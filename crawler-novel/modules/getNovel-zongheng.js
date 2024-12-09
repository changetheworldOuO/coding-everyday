// 解密免费章节
const cheerio = require('cheerio');
const axios = require('axios');

const cryptoJS = require('crypto-js');

// let instanceAxios = {}; // 创建一个axios实例，用于保持cookies
// // 创建一个axios实例，用于保持cookies
// instanceAxios = axios.create({
//   withCredentials: true, // 保持cookies
//   headers: constData.customHeaders // 设置自定义headers
// });

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

// 解密纵横付费章节
function getPayData(secretText) {
  //let data1 = secretText.split('|')[1].trim();
  //let data2 = secretText.split('|')[2].trim();
  let data0 = secretText.split('|')[0].trim().replace(/\n|\r/g, '');

  let e = constData.zonghengNetData.eData; // eData

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

async function fetchChapterContent(url, constData) {
  try {
    const response = await axios.get(url, {
      headers: {
        ...constData.customHeaders
      }
    });
    const $ = cheerio.load(response.data);

    // 提取标题
    const titleDiv = $('.title_txtbox');
    const chapterTitle = titleDiv.text().trim();

    // 正文段落
    let chapterContent = '';
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

module.exports = {
  fetchChapterContent,
  goNextPage,
  getPayData,
  getFreeData
};
