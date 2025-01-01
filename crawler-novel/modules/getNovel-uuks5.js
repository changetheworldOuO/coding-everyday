// ---------------------------- 引用库 ---------------------------- //
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const myData = require('../data/my-data');
const localData = JSON.parse(JSON.stringify(myData)); // 深拷贝数据对象

// ---------------------------- 常量 ---------------------------- //
// 获取常量信息
const { startUrl, preUrl, endUrl, downloadedChaptersFile, bookName, uuks5NetData } = localData.uuks5NovelData;
let { preText } = localData.uuks5NovelData;
let downloadedChapterFilePath = path.join(__dirname, '..', 'data', downloadedChaptersFile);
let saveNovelFilePath = path.join(__dirname, '..', 'novel', bookName);

// 小说的起始URL
// const startUrl = 'https://www.uuks5.com/book/781417/422378169.html';
// const preUrl = 'https://www.uuks5.com/book/781417/';
// const endUrl = ''; // 截止到某一章，调试用
// const downloadedChaptersFile = 'downloaded_chapters1.json'; // 已下载章节的记录文件
// const bookName = '开局合欢宗-被师姐拿捏命脉-未删减原始版.txt'; // 书名

// ---------------------------- 变量 ---------------------------- //
// 存储所有章节内容的数组
let allChaptersContent = [];

// 创建一个axios实例，用于保持cookies
const uuks5Session = axios.create({
  withCredentials: true, // 保持cookies
  headers: uuks5NetData.customHeaders // 设置自定义headers
});

// ---------------------------- 函数 ---------------------------- //

// 读取已下载章节的记录
let downloadedChapters = [];

if (fs.existsSync(downloadedChapterFilePath)) {
  const data = fs.readFileSync(downloadedChapterFilePath, 'utf8');
  downloadedChapters = JSON.parse(data);
  if (downloadedChapters.length > 0) {
    preText = '';
  }
}

async function goNextPage(chapterTitle, url, nextHref) {
  // 记录已下载的章节
  let currentObj = {
    title: chapterTitle,
    url: url
  };
  downloadedChapters.push(currentObj);

  // 查找“下一章”按钮的链接
  const nextChapterLink = preUrl + nextHref;
  const urlsArray = downloadedChapters.map((obj) => obj.url);

  // 判断
  if (nextHref !== 'javascript:' && !urlsArray.includes(nextChapterLink) && nextChapterLink !== endUrl) {
    // 如果存在下一章链接且未下载过，继续递归获取下一章
    await fetchChapterContent(nextChapterLink);
  } else {
    // 所有章节都下载完毕，保存到文件
    saveToFile();
  }
}

// 递归函数来获取每个章节的内容
async function fetchChapterContent(url) {
  try {
    const response = await uuks5Session.get(url);
    const $ = cheerio.load(response.data);

    // 选择包含标题和正文的<div>标签
    const contentDivSelector = '#mlfy_main_text'; // 假设标题和正文在一个id为"content"的<div>标签内
    const $contentDiv = $(contentDivSelector);

    // 提取标题
    const chapterTitle = $contentDiv.find('h1').text().trim();

    // 提取正文
    const chapterContent =
      '  ' +
      $contentDiv
        .find('p')
        .map((i, el) => $(el).text().trim())
        .get()
        .join('\n  ');

    allChaptersContent.push(`${chapterTitle}\n\n${chapterContent}`); // 将当前章节的标题和内容添加到数组
    console.log(`--- 已下载章节: ${chapterTitle}`);
    // 获取下一页
    goNextPage(chapterTitle, url, $('#nextChapterBottom').attr('href'));
  } catch (error) {
    console.error(`请求失败: ${error.message}`);
  }
}

// 保存所有章节内容到文件
function saveToFile() {
  // 每章之间用分隔符分隔
  let novelContent = preText + allChaptersContent.map((i) => i + '\n\n---------------------------------------------\n\n').join('');
  fs.appendFileSync(saveNovelFilePath, novelContent, 'utf8');

  console.log(`------ 小说已更新！！！追加到 ${bookName}`);
  // 保存已下载章节的记录
  fs.writeFileSync(downloadedChapterFilePath, JSON.stringify(downloadedChapters, null, 2), 'utf8');
  console.log('------ 下载记录已更新！');
}

// 入口函数
async function startGetNovel() {
  let url = startUrl;

  // 如果有已下载的章节记录，从最后一个已下载章节的下一个开始
  if (downloadedChapters.length > 0) {
    const lastDownloadedUrl = downloadedChapters[downloadedChapters.length - 1].url;
    const response = await uuks5Session.get(lastDownloadedUrl);
    const $ = cheerio.load(response.data);

    // 先获取本地记录的最新章节，然后获取下一页
    const nextHref = $('#nextChapterBottom').attr('href');
    const nextChapterLink = preUrl + nextHref;

    if (nextHref !== 'javascript:') {
      url = nextChapterLink;
    }
  }

  // 排查章节进度
  const urlsArray = downloadedChapters.map((obj) => obj.url);
  if (!urlsArray.includes(url)) {
    await fetchChapterContent(url);
  } else {
    console.log('------ 所有章节已是最新，无需下载！');
  }
}

module.exports = {
  startGetNovel
};
