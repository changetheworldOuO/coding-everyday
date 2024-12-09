const cheerio = require('cheerio');
const axios = require('axios');

async function fetchChapterContent(url, constData) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // 选择包含标题和正文的<div>标签
    const contentDivSelector = '#mlfy_main_text';
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

    // 将当前章节的标题和内容添加到数组
    allChaptersContent.push(`${chapterTitle}\n\n${chapterContent}`);
    console.log(`--- 已下载章节: ${chapterTitle}`);
    // 获取下一页
    goNextPage(chapterTitle, url, $('#nextChapterBottom').attr('href'));
  } catch (error) {
    console.error(`请求失败: ${error.message}`);
  }
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

  // 判断
  if (nextHref !== 'javascript:' && !urlsArray.includes(nextChapterLink) && nextChapterLink !== EndUrl) {
    // 如果存在下一章链接且未下载过，继续递归获取下一章
    await fetchChapterContent(nextChapterLink);
  } else {
    // 所有章节都下载完毕，保存到文件
    saveToFile();
  }
}

module.exports = {
  fetchChapterContent
};
