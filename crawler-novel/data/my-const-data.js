// 常量存储
// -------------------------------------------------------------------------------- //
// uu小说下载data
const uuks5NovelData = {
  'websiteName': 'UUks5',
  'startUrl': 'https://www.uuks5.com/book/781417/422378169.html',
  'preUrl': 'https://www.uuks5.com/book/781417/',
  'endUrl': '', // 调试用 为空就是下载全本；截止到某一章，就填哪一章的链接
  'downloadedChaptersFile': 'uuks5-chapters-downloaded.json', // 已下载章节的记录文件
  'bookName': 'uuks5最新版-开局合欢宗-被师姐拿捏命脉.txt', // 书名
  'preText': `---------------------------------------------
  Name:《开局合欢宗，被师姐拿捏命脉》
  Author: 咸鱼老白
  Maker&Coder: 达不溜
  Message: 
  1. 逐字逐句对比，修复和谐的文字/剧情，同时更新老白为某些章节打的最新补丁
  2. 纠正错别字和与语句不通顺的地方
  3. 恢复老白“特色”成语，懂的都懂，经典 心满意足->芯满溢足 等等
  Warnning: 警告-老白写书也不容易，看txt并不能给老白带来任何收益！！！
  这本只是融合修订版，我的要求是【只做收藏，请勿传播！】【只做收藏，请勿传播！】
  Date: 2025-01-08
---------------------------------------------

`,
  'uuks5NetData': {
    'customHeaders': {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'Cookie':
        '_gid=GA1.2.1384548815.1741883233; _gat_gtag_UA_123139500_3=1; cf_clearance=iJDzjDGd5AmTY4J_owaNjJNE5DSrppZLBd0911.BiXo-1741883226-1.2.1.1-5s0pZPLaIXmqCXJXePNY0JfWqmHJ45KYiELqpMwQB3YIHFy.h9.tqMO4i8v2p0xUbv.75V4oVf59Xg70C0ZYFXf3q2SNJQhlhddfEOYWczY1dj1gu8okVHnl2whMDAsHwb1jLTMAYFhKl0GpqBc2ByNFQKQ1mV7Ueb7HySIBNcyMqs3ysYKS7GcZ3sRHxgywI0H1nt6.LOi6DSujQWG8loZ6xPsQHuGBhqQCjHvZkPmieEOQVE.I8pYrFsgSajiKACSYSilS_BFlXp28v5eMCQjVqfPhoe.m8il7udyH3kdy1RM3qD_RZVOzce3hhxnm1XYT6Cmo_3d_oxdPnwBqVLjlhKmQJ.oWiuqAQACdv1A5sanb9TejOC3UMIv5EcqcBYL33gqtC2f.Dpzzt_dhzPscZeY4gxnTTj88USkg2ok; _ga_XD24LCGMPV=GS1.1.1741883233.2.1.1741883247.0.0.0; _ga=GA1.1.1538759881.1741504883'
      // 添加其他需要的headers
    }
  }
};

const uuks5NovelData2 = {
  'websiteName': 'UUks5',
  'startUrl': 'https://www.uuks5.com/book/168017/73819413.html',
  'preUrl': 'https://www.uuks5.com/book/168017/',
  'endUrl': '', // 调试用 为空就是下载全本；截止到某一章，就填哪一章的链接
  'downloadedChaptersFile': 'uuks5-2-chapters-downloaded.json', // 已下载章节的记录文件
  'bookName': 'uuks5最新版-偷香高手.txt', // 书名
  'preText': `------------------------------------------------
  Name:《偷香高手》
  Author: 六如和尚
  Maker&Coder: 达不溜
  Message: 
  1. 逐字逐句对比，修复和谐的文字/剧情，同时更新老白为某些章节打的最新补丁
  2. 纠正错别字和与语句不通顺的地方
  3. 恢复老白“特色”成语，懂的都懂，经典 心满意足->芯满溢足 等等
  Warnning: 警告-老白写书也不容易，看txt并不能给老白带来任何收益！！！
  这本只是融合修订版，我的要求是【只做收藏，请勿传播！】【只做收藏，请勿传播！】
  Date: 2025-01-08
------------------------------------------------

`,
  'uuks5NetData': {
    'customHeaders': {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 Edg/134.0.0.0',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'Cookie':
        'ZHID=1741454491633ZHI9CLN4J9G89G2OL01; zh_visitTime=1741454491634; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2219576c6bff616bf-08ddc404977fcc-4c657b58-1474560-19576c6bff72aef%22%2C%22%24device_id%22%3A%2219576c6bff616bf-08ddc404977fcc-4c657b58-1474560-19576c6bff72aef%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D; zhffr=0; Hm_lvt_c202865d524849216eea846069349eb9=1741693131,1741788413,1741872784,1741882280; HMACCOUNT=C08EC75BE8789218; acw_tc=2760820017418822854844084ec5739ecd5e2b00413c428f68248f5594ca8e; PassportCaptchaId=58e199c90f17a3138e0f9b0ef4bba5e7; __zhpp=B30F2B3D03D3F6BAC1D669ADC31B17C8; _c_WBKFRo=TbaHVO8ywVx0fqgGTdbKnAn3XUB748X022dM27Gm; _nb_ioWEgULi=; logon=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMTM0NzU1MDEwMw%3D%3D%7C53241529DAC62F730BA39607F9A880C7; __logon__=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMTM0NzU1MDEwMw%3D%3D%7C53241529DAC62F730BA39607F9A880C7; __zhs__=7b4230da50b387004e2afa32375035c38043a0518c1f6c35cf218db28b61c4e9a7fc519455b7efe5b33f26ddd475c11cad59192121c483078ff81b55cb001ecc1e6d7aa8c3a9d4959e525a5eba2792c256f402d083580cf78299732eb0b0a4738b64c45e040b79148feb5ef88dcb7153848be985a4b80704cf6fab77cc3902933b1c468782df880ff0e6724ec2af42b4693257befffe1c02114e8a8a5acdfb19770c9f07240556c248358efa5d92653253c2ab53795c9788ef8e6b054f67ef3d5a9a80e3c7d93e5ca614071cc08b8a20a3690d620a00e3cdf7505edafff162d7b50d837c43fc5ece8bdedc4c2b437110e96e70946e139b2b22cdddad17ada7b6; __zhc__=30820122300d06092a864886f70d01010105000382010f003082010a0282010100c2a22e7e577f2e8e9ef39123a607ff8035928d7ef86435a9b7bdcbe121f83f52a79c8ca707be3336537a62997affbcf4f324a7807d343a5ec1e0f27a4df41fff75e59a119bde7e38ffd6da013c848c50f3dbf890e96dd195138754bd92ec9903fef94350caa7beb80d8b84b1f37a37e1b8a096beac7026a18ba351871f3ee97085abf6bf0cfb34ce3dd967d0af8845d4123aba01e48348dc060b4dc84bfcd791f922f159ba411c5b0f282ca3c957a132432afe646791695ee6c842c34c26e48737e347212a1fe33ee1691636534c3110ac4aa507614bec45a33f94ecceeac422f255479270c190553057ab3c494b05e63851fd68ecb233e1a15a291c353badcd0203010001; Hm_lpvt_c202865d524849216eea846069349eb9=1741882355'
      // 偷香高手 添加其他需要的headers
    }
  }
};

// -------------------------------------------------------------------------------- //

// 纵横data
const zonghengNovelData = {
  'websiteName': '纵横中文网',
  'startUrl': 'https://read.zongheng.com/chapter/1286982/73595075.html', // 小说的起始URL
  'preUrl': 'https://read.zongheng.com',
  'endUrl': '', // 记得后面加问号 调试用 为空就是下载全本；截止到某一章，就填哪一章的链接
  'bookName': '纵横最新版-开局合欢宗-被师姐拿捏命脉.txt',
  'downloadedChaptersFile': 'zongheng-chapters-downloaded.json', // 已下载章节的记录文件
  'preText': `------------------------------------------
  Name:《开局合欢宗，被师姐拿捏命脉》
  Author: 咸鱼老白
  Maker&Coder: 达不溜
  FixMessage: 
  1. 逐字逐句对比，修复和谐过的文字/剧情，同时更新老白为某些章节打的最新补丁
  2. 纠正错别字和与语句不通顺的地方
  3. 恢复老白“特色”成语，懂的都懂，经典 心满意足->芯满溢足 等等
  Warnning: 警告-老白写书也不容易，看txt并不能给老白带来任何收益！！！
  这本只是融合修订版，我的要求是【只做收藏，请勿传播！】【只做收藏，请勿传播！】
  Date: 2025-01-08
------------------------------------------

`,
  'zonghengNetData': {
    'customHeaders': {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
      'Host': 'read.zongheng.com',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'Cookie':
        'ZHID=893DC9F832022E388CC7D9FABD1A4B61; __zhpp=325004D1BE403BFB86D5D2672AB28D6C; _c_WBKFRo=zGbTIW3v1IX5TN9zEv5giJrnIsRFvXmRxYGibg4t; loginphone=18510410059; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22191354962406c9-06572a15032596-4c657b58-1474560-1913549624112c0%22%2C%22%24device_id%22%3A%22191354962406c9-06572a15032596-4c657b58-1474560-1913549624112c0%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D; zh_visitTime=1738387669611; zhffr=0; Hm_lvt_c202865d524849216eea846069349eb9=1739768932,1739776086,1739855580,1740457121; HMACCOUNT=AFAAE246E78E90C3; logon=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMjQ3NDMyMDQ0%7C29726EAA4AC8108C334AD44BD5449083; __logon__=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMjQ3NDMyMDQ0%7C29726EAA4AC8108C334AD44BD5449083; __zhs__=7bd41d0bf44c811daa5b5745ec7b23fc30190de52ec9385682f5e6d46e24bda8cff27a836166d73fee691704479c5c2b5f30e19389068fedf93a5acce957b8d45d21ae49530c878c7907d6ed5ad6b7e07a4b3ac0afc5fdbbb72c09187bd2d163a61d5e2c54857003abd48075a39be3bbdf122e53b39a9ce77c968e24fda1590f32549f0904c3c855e72d58d73aa5edbdaa158195c4ca61e61b22c1ff524cf664abd241caf2c4597beb089f19bc1699bf58e6f2d0964f67114fd21bae01dd87c0ddda34640f628eb09f3bd76181d534de10fa22e0c7faf0d5171c5e01401080a7b74c9d8b38608954d7034f18f534f0d6635629213ae2f0974f9ba9eb518f2c4c; __zhc__=30820122300d06092a864886f70d01010105000382010f003082010a0282010100a60981b80c81b36ab469c76097bb4090d4a222fb90c37004cb0edf76630a6a7d2d62084df4db59fe96412e6e211c342db95c4a7aee7a1a19f177440f3a498d9034806cf211e7f3988c58fcd19cc45571f7be01648e0a2b107e588fe161881d8cb4ad13cbd1c989f34d2c34961bf7651e30e15da620375efaecf1db2cbbab620b783cdb9c958ba67151920306f1551b03af40906dc07691775cd791c79d1bc71c417783f57ee66fe56ee43a8f2ab0b1ce1cb900f100730ca79cc659e06c4befc2e3d83601da8fb85ab70daaeda3ebbbc5bbf97bd5338cdb411409c4b0385007c8d386c0c77189dfbae386f51cb9ba14513ef5a40dc0f7f2c809daeffcedc435ff0203010001; acw_tc=ac11000117404624524824063e0032f1c84807f94c90965d78873f77bf2191; PassportCaptchaId=a2bfc79a0cdb8ed8815c614e5206d55d; Hm_lpvt_c202865d524849216eea846069349eb9=1740462665'
      // 添加其他需要的headers
    },
    'eData': {
      'words': [1648785490, 1798327915, 1482976609, 1718376295],
      'sigBytes': 16
    }
  }
};
// Aco账号：  [1246384471, 1480945736, 1900430969, 1816348501],
// 全解锁账号 [1665692260, 2019644492, 2053331304, 1497658947]
// [893743701, 1950508908, 1883846514, 946040442]
//  [1647785267, 843405424, 1181578352, 878915703]
// 1648785490  1798327915 1482976609 1718376295

module.exports = {
  uuks5NovelData,
  uuks5NovelData2,
  zonghengNovelData
};
