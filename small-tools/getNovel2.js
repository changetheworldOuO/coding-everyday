// ---------------------------- 引用库 ---------------------------- //
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const cryptoJS = require('crypto-js');

// ---------------------------- 常量 ---------------------------- //
// 小说的起始URL
const startUrl = 'https://read.zongheng.com/chapter/1286982/73595075.html';
const preUrl = 'https://read.zongheng.com';
const EndUrl = ''; // 截止到某一章，调试用
const bookName = '开局合欢宗-被师姐拿捏命脉-纵横最新版.txt';
// 已下载章节的记录文件
const downloadedChaptersFile = 'downloaded_chapters2.json';

// ---------------------------- 变量 ---------------------------- //
// 存储所有章节内容的数组
let allChaptersContent = [];
let preText = `------------------------------------------------------
Name:   | 《开局合欢宗，被师姐拿捏命脉》
Author: |  咸鱼老白
Maker:  |  达不溜
Date:   |  2024-12-02
------------------------------------------------------

`;

// ---------------------------- 函数 ---------------------------- //

// 读取已下载章节的记录
let downloadedChapters = [];
if (fs.existsSync(downloadedChaptersFile)) {
  const data = fs.readFileSync(downloadedChaptersFile, 'utf8');
  downloadedChapters = JSON.parse(data);
  if (downloadedChapters.length > 0) {
    preText = '';
  }
}

// 自定义headers
const customHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
  'Host': 'read.zongheng.com',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
  'Referer': 'https://www.zongheng.com/',
  'Cookie': `ZHID=B5762401A8ACE4E3EAEB08C2410A30A4; zh_visitTime=1731326880627; __zhpp=1E5C4D327CBADC53F40A792B2C6338C2; _c_WBKFRo=PHFm3y4Bm6ro0kmpbA5ZWeBMFEW4t15ub4uyAnuE; PassportCaptchaId=61d9c90e00784f699cc82315a4b63a62; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221930bfe323e581-033a12adbd38bd-4c657b58-2073600-1930bfe323f4b2%22%2C%22%24device_id%22%3A%221930bfe323e581-033a12adbd38bd-4c657b58-2073600-1930bfe323f4b2%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D; loginphone=18510410059; zhffr=0; Hm_lvt_c202865d524849216eea846069349eb9=1732106433,1732106778,1733022769,1733088313; HMACCOUNT=64E794DE6A0D3F1B; logon=MTA4MTk2%7CMA%3D%3D%7C%7C5Lmm5Y%2BLNzQwMTAxMDc%3D%7CdHJ1ZQ%3D%3D%7CMTgyODU5MDgxMw%3D%3D%7C9CB0635C12DA0BE79EF6D3988E932890; __logon__=MTA4MTk2%7CMA%3D%3D%7C%7C5Lmm5Y%2BLNzQwMTAxMDc%3D%7CdHJ1ZQ%3D%3D%7CMTgyODU5MDgxMw%3D%3D%7C9CB0635C12DA0BE79EF6D3988E932890; __zhs__=31c9a3edf8f7239e11aa705ac40ad68b2310c7a713e32d1d1a5475f946705a3f8e4969a944b0fd2c772aaaa2c9e79c4b53d6853cab5ab0e9c8c61bbc56e4976138ce1ecd2b8b9bcc378bffccd0deea50853b4c4336f29c1ace58b7f18b01fe7c7a1468a54f11658fa43b22ee581293baffe95a7be9f4e784e2ab2b6e97273bf514f3f59dfc2628488b657320f4dacdd23b05c0418d5ffbb31c64ab4ac1cc21ba63515cf23778de5f00309aeac663fb0e7cb294d6a78fca7a946cbb02c0ebe923c112f0d7e6235b916be6aa469e4da3fa61e415cd3e2c4d8a592be759c6fadcc63b297179304a4c590d7fa7cc1e6961ca954d45784c86901beefe99bffac68e63; __zhc__=30820122300d06092a864886f70d01010105000382010f003082010a028201010099080af13f1cb4f5f27a54d226dda81f7472545191c0ce8fcc5fd8d8430578406ffd2ac877ef40e70f5d0325658311b8ccd6c5d744b32e5a991b0a59fc76cba5982b0ce791ba845dcb7179eabafa154f702f85eb99af23dde7f7d17cef48857044772f98a9823625f946692e8dabfc523e6b67286166c5db958edbfcae074a71f3ad897a28faff0426114997b1ef8c9a68be234a84341ea210527b205b6a1aa32d56c23ae4fc754feeb2c464117d61af2dfdbb9ab31611fd31c09f6083736a855c5c033900689862f1fb10f6e7f2aa7e8a58f5bf267f715d2e9b16060fbef1ad36c2d543b5060158834df78b0d73fbf576bc2e06cb326c50907126c53f106bd30203010001; acw_tc=ac11000117331029837845903efda5d8c8974a0144be36b4b0234326888982; Hm_lpvt_c202865d524849216eea846069349eb9=1733103007`
  // 添加其他需要的headers
};

// 创建一个axios实例，用于保持cookies
const instance = axios.create({
  withCredentials: true, // 保持cookies
  headers: customHeaders // 设置自定义headers
});

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
  let data1 = secretText.split('|')[1].trim();
  let data2 = secretText.split('|')[2].trim();
  let data0 = secretText.split('|')[0].trim().replace(/\n|\r/g, '');

  // let e = cryptoJS.enc.Utf8.parse(format(data2));
  //  'words': [1246384471, 1480945736, 1900430969, 1816348501],

  let e = {
    'words': [1984526157, 1731753044, 1832210022, 1684300389],
    'sigBytes': 16
  };
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
  if (nextHref !== 'javascript:;' && !urlsArray.includes(nextChapterLink) && nextChapterLink !== EndUrl) {
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
    const response = await instance.get(url, {
      headers: {
        ...customHeaders
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
      chapterContent = getPayData($('#ejccontent').text());
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
  let novelContent = preText + allChaptersContent.map((i) => i + '\n\n ------------------------------------------------------- \n\n').join('');
  fs.appendFileSync(bookName, novelContent, 'utf8');

  console.log(`------ 小说已更新！！！追加到 ${bookName}`);
  // 保存已下载章节的记录
  fs.writeFileSync(downloadedChaptersFile, JSON.stringify(downloadedChapters), 'utf8');
  console.log('------ 下载记录已更新！');
}

// 开始下载
(async () => {
  // 先登录
  let url = startUrl;

  // 如果有已下载的章节记录，从最后一个已下载章节的下一个开始
  if (downloadedChapters.length > 0) {
    const lastDownloadedUrl = downloadedChapters[downloadedChapters.length - 1].url;

    const response = await instance.get(lastDownloadedUrl, {
      headers: {
        ...customHeaders
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
  // 排查章节进度
  const urlsArray = downloadedChapters.map((obj) => obj.url);
  if (!urlsArray.includes(url)) {
    await fetchChapterContent(url);
  } else {
    console.log('------ 所有章节已是最新，无需下载！');
  }
})();
