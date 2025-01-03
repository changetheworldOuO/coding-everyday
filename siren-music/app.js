const axios = require('axios');
const fs = require('fs');
const path = require('path');
// const pLimit = require('p-limit');
// import pLimit from 'p-limit';

// ---------------------------- 变量 ---------------------------- //

let customHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
  'Cookie': '_ga=GA1.1.1364005538.1735870403; _ga_W23PCBGJKK=GS1.1.1735870402.1.1.1735870434.0.0.0'
};

// 控制并发下载的数量
const sirenSongsTotalUrl = 'https://monster-siren.hypergryph.com/api/songs';

let songsList = []; // 按照专辑分类
// let musicOutputPath = path.join(__dirname, 'music');

function createConcurrentLimit(maxConcurrency) {
  let running = 0;
  const queue = [];

  function next() {
    running--;
    if (queue.length > 0) {
      queue.shift()();
    }
  }

  return function (task) {
    return new Promise((resolve, reject) => {
      const runTask = async () => {
        running++;
        try {
          await task();
          resolve();
        } catch (err) {
          reject(err);
        } finally {
          next();
        }
      };

      if (running < maxConcurrency) {
        runTask();
      } else {
        queue.push(runTask);
      }
    });
  };
}

// 限制最多同时有5个下载任务
const limit = createConcurrentLimit(10); // 限制最多同时有10个下载任务

// 定义下载函数
async function downloadFile(url, outputPath) {
  // 创建一个临时文件名用于部分下载
  const tempFilePath = `${outputPath}.part`;

  try {
    // 发起GET请求，设置响应类型为stream，并添加自定义的Cookie
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
      customHeaders
    });

    // 创建写入流
    const writer = fs.createWriteStream(tempFilePath);
    response.data.pipe(writer);

    // 定义 cleanup 函数
    function cleanup() {
      try {
        fs.unlinkSync(tempFilePath);
      } catch (cleanupErr) {
        console.error(`清理临时文件时出错: ${cleanupErr.message}`);
      }
    }

    // 使用 Promise 来处理 finish 和 error 事件
    return new Promise((resolve, reject) => {
      // 绑定事件监听器
      const onFinish = () => {
        writer.removeListener('error', onError); // 移除 error 监听器
        response.data.removeListener('error', onDataError); // 移除 data error 监听器

        console.log(`${url} 下载完成！`);
        fs.rename(tempFilePath, outputPath, (err) => {
          if (err) return reject(err);
          resolve();
        });
      };

      const onError = (err) => {
        writer.removeListener('finish', onFinish); // 移除 finish 监听器
        response.data.removeListener('error', onDataError); // 移除 data error 监听器

        console.error(`写入文件出错: ${err.message}`);
        cleanup();
        reject(err);
      };

      const onDataError = (err) => {
        writer.removeListener('finish', onFinish); // 移除 finish 监听器
        writer.removeListener('error', onError); // 移除 error 监听器

        console.error(`网络请求出错: ${err.message}`);
        cleanup();
        reject(err);
      };

      // 添加事件监听器
      writer.on('finish', onFinish);
      writer.on('error', onError);
      response.data.on('error', onDataError);
    });
  } catch (err) {
    console.error(`下载文件失败: ${err.message}`);
    throw err;
  }
}
// 创建目录（如果不存在）
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

// 获取完整的歌曲列表
async function getAllSongsList(url) {
  try {
    const response = await axios.get(url, {
      headers: customHeaders
    });
    let tempSongsList = response.data.data.list || [];
    // console.log(`songs数量 ${songsList.length}`);
    let uniqueAlbumCids = [...new Set(tempSongsList.map((item) => item.albumCid))];

    // 保存
    saveSongListToFile();
  } catch (err) {
    console.error(`获取文件列表失败: ${err.message}`);
    throw err;
  }
}

// 保存所有的歌曲信息到文件
function saveSongListToFile() {
  let fileName = 'siren-music-all.json';
  let downloadedSongListFilePath = path.join(__dirname, 'music', fileName);
  fs.writeFileSync(downloadedSongListFilePath, JSON.stringify(songsList, null, 2), 'utf8');
  console.log('------ 歌曲列表已更新！');
}

// 统一下载到music文件夹下，并根据文件名创建子目录
async function downloadAllFilesWithLimit() {
  const baseDir = './music'; // 统一下载到music文件夹下

  // 使用map创建一系列受限的下载任务
  const downloadPromises = filesToDownload.map((file) =>
    limit(async () => {
      // 根据文件名创建子目录路径
      const subDir = path.join(baseDir, path.parse(file.fileName).name);
      const outputPath = path.join(subDir, file.fileName);

      // 确保目标目录存在
      ensureDirectoryExistence(outputPath);

      // 下载文件
      await downloadFile(file.url, outputPath);
    })
  );

  try {
    // 执行所有下载任务
    await Promise.all(downloadPromises);
    console.log('所有文件下载完成！');
  } catch (err) {
    console.error('下载过程中出现错误:', err);
  }
}

// 开始下载
getAllSongsList(sirenSongsTotalUrl);
//downloadAllFilesWithLimit();
