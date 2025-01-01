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
  FixMessage: 
  1. 逐字逐句对比，修复和谐文字/剧情，同时更新老白为某些章节打的最新补丁
  2. 纠正错别字和与语句不通顺的地方
  3. 恢复老白“特色”成语，懂的都懂，经典 心满意足->芯满溢足 
  Date: 2025-01-02
---------------------------------------------

`,
  'uuks5NetData': {
    'customHeaders': {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
      'Origin': 'https://www.uuks5.com',
      'Referer': 'https://www.uuks5.com/',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'Cookie':
        '_gid=GA1.2.272840062.1735755641; cf_clearance=cJ0CxP6HXd2G7YqK.mCL3ef6ViSItX.OMCQv_28_Jqs-1735765800-1.2.1.1-paI3OG7yGcMJCcMyyAtZrYtO_hok2GUVYRHPjdaj9ZQm175cLSjV7aq.OJMrcwJVbY0YK5B8wHX8diPSQMQq3MBn7og_56lY3PF7aGSVE3NUrC77B0wFp8GNZAN3M5JapnjanEb8mWn.nHD4pX2sDJccmhGsObdFlQ7tKLzJInuTy3Y_jsgeyUJ24cxbtXWVC0g_l2tBuQp1EcyU7mYE1nDOcwHt9wMaDiEd64m8ffaxU6ZA.bkeoQREvm1eMCUjSz4i0S8zR_JVNL2OSbrku4IkgPazA1EO_Cj73kJ6kUx2u1nL_lVBZrwCEEU548k9oumv8zY_Pg5jLAKnCFYt0DaS9YSQP_5WSP8cOXDmsveLdF60cK562UnC9Yx4uBA2YBK0.Y40yiKk.w_FPNJjiZqt60oz2I_09_egS8YEDwTtbaXAB8.ffafGRZWtFB6A9SanVXPYX6yF.BVg5V82Tw; _gat_gtag_UA_123139500_3=1; _ga_XD24LCGMPV=GS1.1.1735765795.7.1.1735765800.0.0.0; _ga=GA1.1.1771271361.1732799149'
      // 添加其他需要的headers
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
  'preText': `---------------------------------------------
  Name:《开局合欢宗，被师姐拿捏命脉》
  Author: 咸鱼老白
  Maker&Coder: 达不溜
  FixMessage: 
  1. 逐字逐句对比，修复和谐文字/剧情，同时更新老白为某些章节打的最新补丁
  2. 纠正错别字和与语句不通顺的地方
  3. 恢复老白“特色”成语，懂的都懂，经典 心满意足->芯满溢足 
  Date: 2025-01-02
---------------------------------------------

`,
  'zonghengNetData': {
    'customHeaders': {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
      'Host': 'read.zongheng.com',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
      'Cookie':
        'ZHID=893DC9F832022E388CC7D9FABD1A4B61; zh_visitTime=1734087993847; __zhpp=325004D1BE403BFB86D5D2672AB28D6C; _c_WBKFRo=zGbTIW3v1IX5TN9zEv5giJrnIsRFvXmRxYGibg4t; loginphone=18510410059; zhffr=0; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22191354962406c9-06572a15032596-4c657b58-1474560-1913549624112c0%22%2C%22%24device_id%22%3A%22191354962406c9-06572a15032596-4c657b58-1474560-1913549624112c0%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D; __zhct=9690071b1062c3830157621a4fbe7c82.1735760271763; PassportCaptchaId=9e70f9e3fe5e8300748f158b354f7854; Hm_lvt_c202865d524849216eea846069349eb9=1734087994,1735760283; HMACCOUNT=AFAAE246E78E90C3; logon=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMTE0OTk2NDE4NQ%3D%3D%7C40917988440877A5250CD1A9D330615A; __logon__=MTA4MTk2%7CMA%3D%3D%7C%7C6LSk5aa76Imv5q%2BN5a6L5bm86JaH%7CdHJ1ZQ%3D%3D%7CMTE0OTk2NDE4NQ%3D%3D%7C40917988440877A5250CD1A9D330615A; __zhs__=1f1797facb0790ccaccfef9ebe0fd8d5c40e903c75bd60fbcac1b48b59b5195ce8ff1a743362a7195625db4f792d756c53b62d6fe3e4e661d56da90fa30271938dff8c4f7506069bf5e9b0792a15269eaa7adb6d6067ad33963b8dc02a3b9e9412c3531123a1988f303edf4459ef77fba849ef58ac9e82c1641dec32fa0b73150ca4448e3cd2b88b6d5ba3ed872515e6e1d821ca5b0c5a36e29f9205f26fc89dc2ff214273380b9f368663311fe1501efaa526892ea492f485d780453d6e7ecbbe7434ca3de7d516301a239f6ab563c2a4fc0716724b920088e76aee922f24109b55dcd7366593316983c9ff43cd81181191798a9b58ceb97889cb7e3f7c5a30; __zhc__=30820122300d06092a864886f70d01010105000382010f003082010a0282010100c6f1920371cac4ecb3fa35a26ae8805c222c74807e503b520f3ea34205aa3253898ada8dc0cfbf9abf288c356028712bae38554ebcee1131881c6a7ef347c21a0eb66e4f4420ce91a6a0a1ec6d27577f82aac1497901b222ccfc73cb919258b9a29e49fa4262598227abbf6f4d6dcaa9db76fea2f14116a99c18105883a9c3ef8abb014a9fc8880348ac05e2d8bee9693bcc315460e3b947189764acade665e1ef3c1f0d601e7aaa6834d2fba153566beb6908f853eccb36749375c1e7ab3175e42eb24c537b15b1ee535bf18142b2beec8c75776cf997c8f0a3b06fbeea80361f9ca4cd9b5ffa63994c311017d337a527e9de204d30462c6d4e5f110d3c1c0d0203010001; acw_tc=2760820417357642126541437eb556bc5568a7f5c419a7b099887b404a2b28; acw_sc__v2=6775a8f4d091cddff04351eb9093c2b8efb699b9; Hm_lpvt_c202865d524849216eea846069349eb9=1735764214'
      // 添加其他需要的headers
    },
    'eData': {
      'words': [1665692260, 2019644492, 2053331304, 1497658947],
      'sigBytes': 16
    }
  }
};
// Aco账号：  [1246384471, 1480945736, 1900430969, 1816348501],
// 全解锁账号 [1665692260, 2019644492, 2053331304, 1497658947]

module.exports = {
  uuks5NovelData,
  zonghengNovelData
};
