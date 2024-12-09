getPrice('大白座', 1.06);
getPrice('小白座', 1.06);
getPrice('40智能', 1.06);
getPrice('木座', 1.06);
getPrice('方缸', 1.06);
getPrice('空缸', 1.06);
getPrice('储物罐尖盖', 1.06);
getPrice('储物罐平盖', 1.06);
getPrice('小缸', 1.06);
getPrice('大缸', 1.06);

// 批量输出改价格
function changePrice(arr, name, mulNum) {
  let result = arr.map((item) => Math.round(item * mulNum));
  // 四舍五入取整
  console.log(name, result.join('  '));
  return result;
}

function getPrice(choose, mulNum) {
  let dabaiData = {
    priceArr: [935, 1270, 1430, 1210, 1430, 1630, 1730, 1640, 1590, 1620, 1540, 1200],
    goodsName: '大白座'
  };
  let xiaobaiData = {
    priceArr: [260, 290, 300, 320, 380, 430, 660, 570, 660, 730, 950, 1150, 1380, 1240, 1450, 1600],
    goodsName: '小白座'
  };
  let zhineng40Data = {
    priceArr: [2960, 3580, 3580, 3160, 3160, 3380, 3380, 2960],
    goodsName: '40智能'
  };
  let muzuoData = {
    priceArr: [210, 248, 300, 320, 380, 580, 600, 850, 1190, 1400, 560, 570, 1150, 1330, 1530],
    goodsName: '木座'
  };
  let fanggangData = {
    priceArr: [1380, 1700, 1860, 1280, 1600, 1700, 1280, 1600, 1700, 1380, 1700, 1860],
    goodsName: '方缸'
  };
  let konggangData = {
    priceArr: [
      28, 32, 43, 55, 80, 126, 260, 60, 85, 120, 220, 270, 340, 110, 260, 160, 170, 420, 480, 560, 1250, 200, 230, 380, 430, 530, 590, 690, 850, 1300, 900
    ],
    goodsName: '空缸'
  };
  let chuwuguanJianData = {
    priceArr: [
      53, 68, 63, 76, 85, 110, 135, 165, 256, 388, 495, 105, 130, 140, 180, 228, 280, 350, 485, 580, 140, 155, 175, 205, 430, 500, 580, 225, 245, 550, 650, 780,
      1080, 1350, 1350
    ],
    goodsName: '储物罐尖盖'
  };
  let chuwuguanPingData = {
    priceArr: [
      63, 76, 85, 110, 135, 165, 256, 388, 490, 110, 135, 145, 190, 235, 285, 355, 480, 580, 145, 180, 210, 435, 505, 585, 230, 248, 560, 660, 790, 1090
    ],
    goodsName: '储物罐平盖'
  };
  let xiaogangData = {
    priceArr: [190, 240, 108, 158],
    goodsName: '小缸'
  };
  let dagangData = {
    priceArr: [1750],
    goodsName: '大缸'
  };
  let chooseObj = {
    '大白座': dabaiData,
    '小白座': xiaobaiData,
    '40智能': zhineng40Data,
    '木座': muzuoData,
    '方缸': fanggangData,
    '空缸': konggangData,
    '储物罐尖盖': chuwuguanJianData,
    '储物罐平盖': chuwuguanPingData,
    '小缸': xiaogangData,
    '大缸': dagangData
  };

  let userChooseData = chooseObj[choose];
  changePrice(userChooseData.priceArr, userChooseData.goodsName, mulNum);
}
