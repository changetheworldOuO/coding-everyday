// ---------------------------- 引用库 ---------------------------- //
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const cryptoJS = require('crypto-js');

const myData = require('../data/my-const-data');
const localData = JSON.parse(JSON.stringify(myData)); // 深拷贝数据对象

// ---------------------------- 常量 ---------------------------- //
// 获取常量信息
// 开始 url, 前置url, 终止url, 记录下载章节，书名，联网Cookie信息
const { startUrl, preUrl, endUrl, downloadedChaptersFile, bookName, zonghengNetData } = localData.zonghengNovelData;
// 前置介绍词
let { preText } = localData.zonghengNovelData;
// 文件下载和读取的完整路径
let downloadedChapterFilePath = path.join(__dirname, '..', 'data', downloadedChaptersFile);
let saveNovelFilePath = path.join(__dirname, '..', 'novel', bookName);

// ---------------------------- 变量 ---------------------------- //
// 存储所有章节内容的数组
let allChaptersContent = [];

// 创建一个axios实例，用于保持cookies
const zonghengSession = axios.create({
  withCredentials: true, // 保持cookies
  headers: zonghengNetData.customHeaders // 设置自定义headers
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

// 获取免费 data
function getFreeData(contentDiv, totalDiv) {
  // 提取正文
  let result =
    '  ' +
    contentDiv
      .find('p')
      .map((i, el) => {
        const $el = totalDiv(el);
        // 获取<p>标签内的所有文本，包括<span>标签内的文本
        return $el.text().trim();
      })
      .get()
      .join('\n  ');
  return result;
}

// 获取免费data
function getPayData(secretText) {
  // let data1 = secretText.split('|')[1].trim();
  // let data2 = secretText.split('|')[2].trim();
  let data0 = secretText.split('|')[0].trim().replace(/\n|\r/g, '');

  // 有可能之后再拉取，需要再次获取 words的值
  let e = zonghengNetData.eData;
  // 解码
  let r = cryptoJS.AES.decrypt(data0, e, {
    mode: cryptoJS.mode.ECB,
    padding: cryptoJS.pad.Pkcs7
  });

  let secretData = r.toString(cryptoJS.enc.Utf8);
  let tempDiv = cheerio.load(secretData);
  let result =
    '  ' +
    tempDiv('p')
      .map((i, el) => {
        const $el = tempDiv(el);
        // 获取<p>标签内的所有文本，包括<span>标签内的文本
        return $el.text().trim();
      })
      .get()
      .join('\n  ');

  return result;
}

// 获取下一页
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

  // 判断下一章
  if (nextHref !== 'javascript:;' && !urlsArray.includes(nextChapterLink) && nextChapterLink !== endUrl) {
    // 如果存在下一章链接且未下载过，继续递归获取下一章
    // await new Promise((resolve) => setTimeout(resolve, 200)); // 每个请求之间延迟2秒
    await fetchChapterContent(nextChapterLink);
  } else {
    // 所有章节都下载完毕，保存到文件
    saveToFile();
  }
}

// 递归函数来获取每个章节的内容
async function fetchChapterContent(url) {
  try {
    const response = await zonghengSession.get(url);
    const $ = cheerio.load(response.data);

    // 提取标题
    const titleDiv = $('.title_txtbox');
    const chapterTitle = titleDiv.text().trim();

    // 正文段落
    let chapterContent = '';
    // console.log('ejccontent:', $('#ejccontent').text());

    if ($('#ejccontent').text() === '') {
      // 免费章节处理
      const contentDiv = $('.content');
      chapterContent = getFreeData(contentDiv, $);
    } else {
      // 付费章节处理
      chapterContent = getPayData($('#ejccontent').text());
    }

    // 将当前章节的标题和内容添加到数组
    allChaptersContent.push(`${chapterTitle}\n\n${chapterContent}`);
    console.log(`--- 已下载章节: ${chapterTitle}`);

    // 获取下一页
    goNextPage(chapterTitle, url, $('div.nav-btn-group a:last').attr('href'));
  } catch (error) {
    // 先保存
    saveToFile();
    console.error(`请求失败: ${error.message}`);
  }
}

// 保存所有章节内容到文件
function saveToFile() {
  if (allChaptersContent.length === 0 || downloadedChapters.length === 0) {
    return;
  }
  // 每章之间用分隔符分隔
  let novelContent = preText + allChaptersContent.map((i) => i + '\n\n---------------------------------------------\n\n').join('');
  fs.appendFileSync(saveNovelFilePath, novelContent, 'utf8');

  console.log(`------ 小说已更新！！！追加到 ${bookName}`);
  // 保存已下载章节的记录
  fs.writeFileSync(downloadedChapterFilePath, JSON.stringify(downloadedChapters, null, 2), 'utf8');
  console.log('------ 下载记录已更新！');
}

// 开始下载
async function startGetNovel() {
  // 先登录
  let url = startUrl;

  // 如果有已下载的章节记录，从最后一个已下载章节的下一个开始
  if (downloadedChapters.length > 0) {
    const lastDownloadedUrl = downloadedChapters[downloadedChapters.length - 1].url;

    const response = await zonghengSession.get(lastDownloadedUrl);
    const $ = cheerio.load(response.data);

    // 先获取本地记录的最新章节，然后获取下一页
    const nextHref = $('div.nav-btn-group a:last').attr('href');
    const nextChapterLink = preUrl + nextHref;
    // 如果存在下一章链接，跳转到下一页
    if (nextHref !== 'javascript:;') {
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
