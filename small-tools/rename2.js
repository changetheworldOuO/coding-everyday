const fs = require('fs');
const readline = require('readline');

// 创建读取行接口
const readlineWay = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let nameObj = {
	1: '海夕里',
	2: '砂夜子',
	3: '神野堇',
	4: '神野蓝'
}

let targetDir = './', userChoose = '';

function rename(dir, newName) {
	let files = fs.readdirSync(dir);
	let total = files.length, num = 0;

  if(!files.length) {
		console.log('文件夹下没有文件！任务自动结束...');
		return;
	}
	
	files.forEach(file => {
		if (/(\d+\.ogg)/.test(file)) {
			fs.renameSync(dir+file, dir + newName + '-' + RegExp.$1, (err) => {});
		}
		
		console.log('第' + (++num) +'个任务 [' + file + '] 进行中... ');
		if(num >= total) {
			console.log('\n [' + newName + '] 系列音声 重名名完成！');
		}
	})
}

readlineWay.question('请选择重命名对象 [1海夕里 2砂夜子 3神野堇 4神野蓝]：', function(answer){
    userChoose = nameObj[answer];
	targetDir = __dirname + '/' + nameObj[answer] + '/';
	
	console.log('\n [' + userChoose + '] 系列音声开始启动重命名任务... \n ');
	// 关闭
    readlineWay.close();
	// 重命名
	rename(targetDir, userChoose);
});
