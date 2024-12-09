const fs = require('fs');
const path = require('path');

// 读取本地已下载章节文件
async function readDownloadedList(downloadedChapterFilePath) {
  if (fs.existsSync(downloadedChapterFilePath)) {
    return JSON.parse(fs.readFileSync(downloadedChapterFilePath, 'utf8'));
  }
  return [];
}

// 更新已下载章节
async function writeDownloadedList(downloadedChapterFilePath, downloadedChapters, constData) {
  // 保存已下载章节的记录
  fs.writeFileSync(downloadedChapterFilePath, JSON.stringify(downloadedChapters), 'utf8');
  console.log(`------ ${constData.websiteName}网站下载记录已更新！`);
}

// 保存小说到本地
function saveNovelFile(allChaptersContent, downloadedChapters, constData, saveNovelFilePath) {
  // 避免重复添加前缀
  let preText = downloadedChapters.length > 0 ? '' : constData.preText;

  // 每章之间用分隔符分隔
  let novelContent = preText + allChaptersContent.map((i) => i + '\n\n---------------------------------------------\n\n').join('');
  // 存储
  fs.appendFileSync(saveNovelFilePath, novelContent, 'utf8');
  console.log(`------ ${constData.websiteName}小说已更新！！！追加到 ${constData.bookName}`);
}

module.exports = {
  readDownloadedList,
  writeDownloadedList,
  saveNovelFile
};
