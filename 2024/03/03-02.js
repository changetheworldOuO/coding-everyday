const axios = require('axios'); // 导入Axios库
const fs = require('fs'); // 导入File System模块

// 定义目标网址
const url = 'https://pandamtl.com/another-world-milf-hunter-260/';

// 发送HTTP GET请求获取页面内容
axios
  .get(url)
  .then((response) => {
    const htmlContent = response.data; // 获取HTML内容

    // 在这里进行数据提取或其他处理操作...

    // let txtContent = htmlContent.

    // 将结果写入TXT文件
    fs.writeFileSync('Milf Hunter TXT.txt', htmlContent);

    console.log('已保存为txt文件');
  })
  .catch((error) => {
    console.error(`请求失败：${error}`);
  });
