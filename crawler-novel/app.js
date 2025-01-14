const fs = require('fs');
const path = require('path');
const readline = require('readline');

const getNovelUUks5 = require('./modules/getNovel-uuks5');
const getNovelUUks5_2 = require('./modules/getNovel-uuks5-2');
const getNovelZongHeng = require('./modules/getNovel-zongheng');

// 创建读取行接口
const readlineWay = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readlineWay.question('-> 【请输入需要爬取的小说网站 1: uuks5 2: 纵横 3: uuks5-2】 : ', function (choose1) {
  let chooseObj = {
    1: 'uuks5',
    2: 'zongheng',
    3: 'uuks5-2'
  };
  let funObj = {
    'uuks5': getNovelUUks5.startGetNovel,
    'zongheng': getNovelZongHeng.startGetNovel,
    'uuks5-2': getNovelUUks5_2.startGetNovel
  };

  // 执行爬取
  funObj[chooseObj[choose1]]();
  readlineWay.close(); // 关闭
});

// 监听 readline 关闭事件
readlineWay.on('close', () => {
  // 设置一个3秒（3000毫秒）的定时器
  // setTimeout(() => {
  //   console.log('-> |**************************************|');
  //   console.log('-> |重命名完成，程序将在3秒后自动退出！......|');
  //   console.log('-> |**************************************|');
  //   process.exit(0); // 退出程序，状态码0 表示正常退出
  // }, 3000);
});
