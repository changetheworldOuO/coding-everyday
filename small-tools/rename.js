const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 创建读取行接口
const readlineWay = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ********************************************** 配置项 ********************************************** //
let directoryPath = ''; // 要处理的目录路径
let prefix = ''; // 文件名前缀
const maxNameLength = 4; // 命名长度
// 图片文件扩展名列表
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'];

function renameFile() {
  // 读取文件
  let files = fs.readdirSync(directoryPath);

  if (files.length === 0) {
    return console.error('-> 无法扫描目录: \n' + err);
  }

  let counter = 0; // 从1开始计数

  // 遍历所有文件
  files.forEach((file, index) => {
    const ext = path.extname(file).toLowerCase(); // 获取文件扩展名并转换为小写
    // 检查文件扩展名是否在图片扩展名列表中
    if (imageExtensions.includes(ext)) {
      counter++; // 计数器加1
      const oldPath = path.join(directoryPath, file);
      const newFileName = `${prefix}-${String(counter).padStart(maxNameLength, '0')}${ext}`; // 生成新的文件名
      const newPath = path.join(directoryPath, newFileName);

      // 重命名文件
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`-> 文件：${file} 重命名报错: ${err} \n`);
          return;
        }
		// counter++; // 计数器加1 不太理解为啥这里不能执行++
        console.log(`-> 文件："${file}" 重命名为 "${newFileName}" 成功！`);
      });
    }
  });
}

readlineWay.question('-> 请输入需要重命名的文件夹路径：', function (dirWay) {
  directoryPath = path.join(dirWay);
  // 二次输入
  readlineWay.question('-> 请输入文件名前缀：', function (filePrefix) {
    prefix = filePrefix;
    console.log(`[${directoryPath}] 文件夹开始执行重命名任务......`);
    readlineWay.close(); // 关闭
    renameFile(); // 执行重命名
  });
});

// 监听 readline 关闭事件
readlineWay.on('close', () => {
  // 设置一个3秒（3000毫秒）的定时器
  setTimeout(() => {
    console.log('-> |**************************************|');
    console.log('-> |重命名完成，程序将在3秒后自动退出！......|');
    console.log('-> |**************************************|');
    process.exit(0); // 退出程序，状态码0 表示正常退出
  }, 3000);
});
