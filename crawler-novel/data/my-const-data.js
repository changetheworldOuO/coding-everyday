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
        '_gid=GA1.2.1497024621.1741504884; cf_clearance=oFDXh8rkesU4LCq2ZgM999CsCYzhBvjldnKIVDJWFMw-1741504880-1.2.1.1-n8uqGZS43Uq5rUs1MRqXJSfOfHV5kdlGv00nanFv9WU09oA0LP010aA5PvQjnpQTxjmzzvch2MrrXhnn7h09uMT2qsW9uOMK6TYz9DUetCcNFKwQrzqP4Y4smMKtp6pClAADqtpPtTvPMHIrPKXc8msYeCei1uKbcjVyRFTpAj15HV8isYwelZrTFo3M3CxhTTf_tiDtz6PrMkEs_dmNTQafUP2.JvSnXo5qzmPcv579aP3ClXQmD.smNIexHnMAxJQApZ.HDiAc9M6sEX84NP_fRGi8jJ4FnGnfVvNDC1jGw3Fw.ZTHZcCfi95YJpXcQWUgqdMY_K5xtcUYwZ8KQuVNyuqnCaCEdWFhr27KeB5M6PIfgrssIJVt.ryw5foiAps5Cb7g0iYvqqvTEjyFh1cr0lpQ0NdUSlcOjIrWnybJzQdW8OWqkpzv22rp7v7mdPw5Hnwz4npVHyDE6JGHdpD_DV2YwR_ySxpo7v8sLgk; _gat_gtag_UA_123139500_3=1; _ga_XD24LCGMPV=GS1.1.1741504883.1.1.1741505128.0.0.0; _ga=GA1.1.1538759881.1741504883'
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
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'Cookie':
        '_gid=GA1.2.1379095898.1736823474; PHPSESSID=s3hafgt14o27uhoc2nqu8e160l; cf_clearance=KWpSaw0igJd_FaIp_Duq7BIHtcfTbHYbjH.EG.X1K78-1736831717-1.2.1.1-T6IzxR4hg8tzYceDm_iTRxlWGt95ZEO0Hc2Hp15kyrZvr1fJoWEu5h_9MPha3hgq2SclMqzF64oGYlqeCx9Fm4fkuyrU1OEoRSIhiWPlYHoyG0rZ8IfMIh_sxg2Yo_mf0oJ3K6R3.mx7EuCbrl9P4x6jZvs.Cq9IIECyFfr4Ax_w66raMsfkDPjxAUJpmkewYuYD4ACJCGw9y6lCDk0nW6sS984wTl_d6quLBm8O_.2rleferT4PsZtXnq7UNHnfxwcylVFFUsXZDi.j7OcUlvGENF9e2QC_GNJ9NbDChlM.e92Hh7bZvHRw_Q0w3kQ2o0O55oJV9mfsf7XNksAA2A; _gat_gtag_UA_123139500_3=1; _ga_XD24LCGMPV=GS1.1.1736829253.26.1.1736831721.0.0.0; _ga=GA1.1.1771271361.1732799149'
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
      'words': [1647785267, 843405424, 1181578352, 878915703],
      'sigBytes': 16
    }
  }
};
// Aco账号：  [1246384471, 1480945736, 1900430969, 1816348501],
// 全解锁账号 [1665692260, 2019644492, 2053331304, 1497658947]
// [893743701, 1950508908, 1883846514, 946040442]

module.exports = {
  uuks5NovelData,
  uuks5NovelData2,
  zonghengNovelData
};
