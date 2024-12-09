// ---------------------------- 引用库 ---------------------------- //
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
// const cryptoJS = require('crypto-js');
const myData = require('../data/my-data');
const common = require('common');

const localData = JSON.parse(JSON.stringify(myData)); // 深拷贝数据对象
let constData = {};

// ---------------------------- 重要变量 ---------------------------- //
let allChaptersContent = []; // 存储所有章节内容的数组
let downloadedChapters = []; // 读取已下载章节的记录
let downloadedChapterFilePath = ''; // 已下载章节名
let saveNovelFilePath = ''; // 小说存储地址

// ---------------------------- 函数 ---------------------------- //
// 根据输入参数获取常量数据
function getConstData(website) {
  let dataType = {
    'uuks5': localData.uuks5NovelData,
    'zongheng': localData.zonghengNovelData
  };
  constData = dataType[website];
  // 完整路径名
  downloadedChapterFilePath = path.join(__dirname, '..', 'data', constData.downloadedChaptersFile);
  saveNovelFilePath = path.join(__dirname, '..', 'novel', constData.bookName);
  // 读取本地已下载章节文件
  downloadedChapters = common.readDownloadedList;

  // 创建一个axios实例，用于保持cookies
  // instanceAxios = axios.create({
  //   withCredentials: true, // 保持cookies
  //   headers: constData.customHeaders // 设置自定义headers
  // });
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
  if (nextHref !== 'javascript:' || nextHref !== 'javascript:;') {
    if (!urlsArray.includes(nextChapterLink) && nextChapterLink !== constData.EndUrl) {
      // 如果存在下一章链接且未下载过，继续递归获取下一章
      await fetchChapterContent(nextChapterLink);
    }
  } else {
    // 所有章节都下载完毕，保存到文件
    saveToFile();
  }
}

// 递归函数来获取每个章节的内容
async function fetchChapterContent(url) {
  try {
    const response = await instance.get(url, {
      headers: {
        ...constData.zonghengNetData.customHeaders
      }
    });
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
      chapterContent = getZonghengPayData($('#ejccontent').text());
    }

    // 将当前章节的标题和内容添加到数组
    allChaptersContent.push(`${chapterTitle}\n\n${chapterContent}`);
    console.log(`--- 已下载章节: ${chapterTitle}`);

    // 获取下一页
    goNextPage(chapterTitle, url, $('div.nav-btn-group a:last').attr('href'));
  } catch (error) {
    console.error(`请求失败: ${error.message}`);
  }
}

// 保存所有章节内容到文件
function saveToFile() {
  // 每章之间用分隔符分隔
  let novelContent = preText + allChaptersContent.map((i) => i + '\n\n---------------------------------------------\n\n').join('');
  // 存储
  fs.appendFileSync(saveNovelFilePath, novelContent, 'utf8');

  console.log(`------ ${constData.websiteName}小说已更新！！！追加到 ${constData.bookName}`);
  // 保存已下载章节的记录
  fs.writeFileSync(downloadedChapterFilePath, JSON.stringify(downloadedChapters), 'utf8');
  console.log(`------ ${constData.websiteName}网站下载记录已更新！`);
}

// 下载需要登录
async function startGetNovelNeedLogin(choose) {
  // 第一步 先初始化常量数据
  getConstData(choose);

  // 第二步 获取第一页数据
  let url = constData.startUrl;
  // 如果有已下载的章节记录，从最后一个已下载章节的下一个开始
  if (downloadedChapters.length > 0) {
    const lastDownloadedUrl = downloadedChapters[downloadedChapters.length - 1].url;
    const response = await instance.get(lastDownloadedUrl, {
      headers: {
        ...constData.zonghengNetData.customHeaders
      }
    });
    const $ = cheerio.load(response.data);
    // 先获取本地记录的最新章节，然后获取下一页
    const nextHref = $('div.nav-btn-group a:last').attr('href');
    const nextChapterLink = preUrl + nextHref;
    // 如果存在下一章链接，跳转到下一页
    if (nextHref !== 'javascript:;') {
      url = nextChapterLink;
    }
  }
  // 判断章节是否下载过
  const urlsArray = downloadedChapters.map((obj) => obj.url);
  if (!urlsArray.includes(url)) {
    // 没有下载过的话，直接请求
    await fetchChapterContent(url);
    goNextPage(chapterTitle, url, $('div.nav-btn-group a:last').attr('href'));
  } else {
    console.log(`------ ${constData.websiteName}所有章节已是最新，无需下载！`);
  }
}

// 下载无需登录
async function startGetNovelNoLogin() {
  getConstData(choose); // 初始化常量数据

  let url = constData.startUrl;

  // 如果有已下载的章节记录，从最后一个已下载章节的下一个开始
  if (downloadedChapters.length > 0) {
    const lastDownloadedUrl = downloadedChapters[downloadedChapters.length - 1].url;

    // 请求页面数据
    const response = await axios.get(lastDownloadedUrl);
    const $ = cheerio.load(response.data);

    // 先获取本地记录的最新章节，然后获取下一页
    const nextHref = $('#nextChapterBottom').attr('href');
    const nextChapterLink = constData.preUrl + nextHref;
    // 如果不是最新章，赋值下一页链接
    if (nextHref !== 'javascript:') {
      url = nextChapterLink;
    }
  }

  // 排查章节进度，如果url存在，则说明已经是最新
  const urlsArray = downloadedChapters.map((obj) => obj.url);
  if (!urlsArray.includes(url)) {
    await fetchChapterContent(url);
  } else {
    console.log('------ 所有章节已是最新，无需下载！');
  }
}

module.exports = {
  startGetNovelNoLogin,
  startGetNovelNeedLogin
};
