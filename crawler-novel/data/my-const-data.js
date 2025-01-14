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
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
      'Origin': 'https://www.uuks5.com',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'Cookie':
        '_gid=GA1.2.1379095898.1736823474; cf_clearance=GerG_hzARQFHsHHMIjFVU7J12_53gYBqaOBCtBFY.jI-1736840115-1.2.1.1-.Wgw7RHWg4EU5O0TPVxsoOhxkoBW1QGypRXwmGP5JqL7R89JyVrnpSX5VR30Pju8E_jIfCDlQRQTonN9HkVmQYBEq8B7KGhEp0bdsRNWbpuQ35VpnjPOVTPgSYWxfl3CXxLDQRyLI4V2EYKQxI09WLI5runyecE3bhg1U9aqK_I7SerzfWKEN6Hdz_._huI8d1RoRFHnj2xva0vwREQcbqsdOKXyRSko_vQ3VSc11j6FeRHEKqyTWQLirBxM4Ii6tnKa0XBlbN_uGIemb4s4V69fR906aaKVCwsvX2a8NPxSUS.5tZh9.Y32.oNMkxo4Sj3U0_5RpJ_mlwqFMO2sLQ; _gat_gtag_UA_123139500_3=1; _ga_XD24LCGMPV=GS1.1.1736840117.28.1.1736840121.0.0.0; _ga=GA1.1.1771271361.1732799149'
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
  'bookName': 'uuks5最新版-偷香高手2.txt', // 书名
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
      'Origin': 'https://www.uuks5.com',
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
        'ZHID=893DC9F832022E388CC7D9FABD1A4B61; zh_visitTime=1734087993847; __zhpp=325004D1BE403BFB86D5D2672AB28D6C; _c_WBKFRo=zGbTIW3v1IX5TN9zEv5giJrnIsRFvXmRxYGibg4t; loginphone=18510410059; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22191354962406c9-06572a15032596-4c657b58-1474560-1913549624112c0%22%2C%22%24device_id%22%3A%22191354962406c9-06572a15032596-4c657b58-1474560-1913549624112c0%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D; zhffr=0; logon=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMTA5MDI5OTM0Mw%3D%3D%7C0B9E63EE4DC299EEC1BE34A2B3EC1FC9; __logon__=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMTA5MDI5OTM0Mw%3D%3D%7C0B9E63EE4DC299EEC1BE34A2B3EC1FC9; __zhs__=8cc3c569b52eda89d419db6c4407ec6f87ce60793b0d008d76d5acc98c7e087d2daa8253b07a85683fd5ec681aaff1a56031228d29cd0392476e4d09e215bc3a13f29f9c3f61847f4929c12e78a753990eaeeff0428100921d287956be1c982dea77925b311655178defba188c76255b9961a8d4f59415d70551034b954094d490662949b6436dc6273ab8918bd9ce2a5f4b6b780131291adfffcd2f1e903c13e5cd69e31ff24cefc79e1bd609453488daa103451148d461573eb802e5736634e3b301cedc4de2e591bee70366cd0cf573d21dc3f3653ea4d066c5c660b2b38cd6aeb775cee011d19303882074f5f910c932f1e5b26926516b349f4b1961b75a; __zhc__=30820122300d06092a864886f70d01010105000382010f003082010a0282010100bdfa758c48cbc580e3e8adb49f4ed65f45ba34904c9392af73d738bcd90c764800e593d4a3a1b2b4ca124fd637416e24fbc1a19daf36414260f06ac30002729950e1e2f9ccdeb94688c1faedbebc6eb05e69d9ea9e865a048b1a1aec0918f9517dc542509b46d3797db6c8e0f092d03e991a24783b7d53734113a1e3caa57a39debf3c2b79a65f3e598c522858a14c6302da31a9f99ff5a17ce24e37d4dd90449de6fc076acb8241757029f9a03e120d6e1aec418322cf2b3088f4f031413a7610bad113c085f2535c2fbd3e95dd374a9fcadf2e665c8e4257523594a9b80f12b1ba16f93cb9cbefb76f7e679b7e947aef9618cbfa6d1ea6a30124653e4222930203010001; __zhct=5f2429a1b6ea955463a8d281d2a32226.1736220006025; acw_tc=2760820417362200174515254eb54188cbc021e4d32a3eec2a03816f56ad45; PassportCaptchaId=881acc433fdb564024acfbc444103711; Hm_lvt_c202865d524849216eea846069349eb9=1734087994,1735760283,1736220018; Hm_lpvt_c202865d524849216eea846069349eb9=1736220018; HMACCOUNT=AFAAE246E78E90C3'
      // 添加其他需要的headers
    },
    'eData': {
      'words': [893743701, 1950508908, 1883846514, 946040442],
      'sigBytes': 16
    }
  }
};
// Aco账号：  [1246384471, 1480945736, 1900430969, 1816348501],
// 全解锁账号 [1665692260, 2019644492, 2053331304, 1497658947]

module.exports = {
  uuks5NovelData,
  uuks5NovelData2,
  zonghengNovelData
};
