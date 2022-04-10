const path = require("path"),
  root_path = process.cwd(),
  crawler = require(path.join(root_path, "/public/crawler")),
  fs = require("fs");
const xlsx = require("node-xlsx");
const moment = require("moment");
const name = require("./name");

var resultData = {};
let page = 1;
let arrNum = 0;
let resultObj = {};
let resultPic = {};
let timeNum = 0;
var arr = [
  100513722, 100513723, 100513721, 100513720, 100513719, 100513718, 100513717,
  100513716, 100513715, 100513714, 100513713, 100513712,
];

var asd = [
  100000120, 100000378, 100000395, 100099581, 100099582, 100099599, 100100115,
  100513396, 100513397, 100513731, 100513733, 100513734, 100513736, 100513737,
  100513741, 100513745, 100513748, 100513752, 100513756, 100513758, 100513777,
  100513778, 100513779, 100513780, 100513781, 100513782, 100513782, 100513790,
  100513798, 100513799,
];
/**
 * 100099581 《山海经》-蚩尤
 * 100099582 《山海经》-呲铁
 * 100099599 《山海经》-狡
 * 100000395 《山海经》-狰
 * 100000378 《山海经》-混沌
 * 100513734 《山海经》-何罗鱼
 * 100513733 《山海经》-雷神
 * 100513748 《山海经》-钦原
 *
 * 100513745 火与工匠之神-赫菲斯托斯
 * 100513777 神王-宙斯
 * 100513778 冥王-哈迪斯
 * 100513779 智慧女神-雅典娜
 * 100513780 狩猎女神-阿尔忒弥斯
 * 100513781 太阳神-阿波罗
 *
 *
 * 100100115 金钱豹
 *
 * 100513396 一見有喜 平安長樂1
 * 100513397 一見有喜 平安長樂2
 *
 * 100513731 未来太空之十二大事件
 * 100513736 月球探测器
 *
 * 100513737 暴富有道(金福)
 *
 * 100513741 功夫小子
 * 100513744 悟道小子
 * 100513727 虎头小子
 * 
 * 100000169 闪电
 * 100000128 《找自己》快乐版
 * 100000118 iBox 002号空投版
 * 
 * 100513752 万国争霸-资源徽章
 * 100513756 Love-001
 * 100513758 潇湘咖啡
 * 100513790 霸王别姬
 * 
 * 100513798 秋色斑斓
 * 100513799 金瓜满载
 * 100513795 森林聚会
 * 100513796 异世界·海之城
 *
 * 100000120 GGAC 探索地球起源传说
 *
 * 100513726 iBox−赛博边牧
 * 100513782 iBox-赛博龙
 * 100099867 泰迪熊-空投版

 * 100000396 iBox宣传小标兵
 * 100000335 iBox-潮牛逐浪
 * 100000254 iBox-玄牛遂意
 * 100000253 iBox-灵牛来喜
 * 100000190 iBox-神牛降瑞
 * 100000139 iBox-金牛献福
 * 100000388 iBox-战牛无双
 * 100000394 iBox-翔牛摘星
 * 100000384 iBox-电牛放歌
 * 100099573 集牛换虎-虎虎生威
 *
 *
 */

function getUrl(page, arr, arrNum) {
  return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${arr[arrNum]}&onSale=0&order=0`;
}
var data = [];
console.log("开始");
crawler.initCrawler(async (res, err) => {
  if (err) {
    console.log("请求失败", err);
  }
  // 获取数据
  if (JSON.parse(res.body).data) {
    resultData = JSON.parse(res.body).data.list;
  }
  data = data.concat(resultData);
  page += 1;

  if (resultData.length > 0) {
    let ranNum = Math.floor(Math.random() * (15000 - 7000 + 1) + 7000);
    timeNum += ranNum / 1000;
    await sleep(ranNum);
    console.log(
      ` 间隔时间: ${ranNum} ,当前页: ${page} ,当前藏品: ${resultData[0].gName}`
    );
    console.log(getUrl(page, arr, arrNum));
    crawler.c.queue([
      {
        uri: getUrl(page, arr, arrNum),
        jQuery: false,
      },
    ]);
  } else {
    // 处理数据,请求下一个
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      // gStatus; 2 未開  1 未寄售  6  正在寄售
      // 获取最低价
      if (ele.gStatus == 6 && arr[arrNum] == ele.albumId) {
        if (resultPic[ele.gName]) {
          if (ele.priceCny < resultPic[ele.gName]) {
            resultPic[ele.gName] = ele.priceCny;
          }
        } else {
          resultPic[ele.gName] = ele.priceCny;
        }
      }
      // 获取已开数量
      if (ele.gStatus == 2 && arr[arrNum] == ele.albumId) {
        resultObj[ele.gName] = ele.gNum - 1;
        break;
      }
    }

    // 结束条件
    if (arrNum == arr.length - 1) {
      // 计算
      fs.writeFile(`./src/data/time-6.js`, "总耗时: " + timeNum, () => {});
      fs.writeFile(
        `./src/data/data-6.js`,
        "var lineData = " + JSON.stringify(data),
        () => {}
      );
      fs.writeFile(
        `./src/data/num-6.js`,
        "var lineData = " + JSON.stringify(resultObj),
        () => {}
      );
      fs.writeFile(
        `./src/data/price-6.js`,
        "var lineData = " + JSON.stringify(resultPic),
        () => {}
      );
      console.log("写入数据中,即将结束...");

      await sleep(20000);

      console.log("结束...");
      process.exit(1);
    }

    // 不满住结束条件继续执行, page初始化为1,因为换了藏品
    arrNum += 1;
    page = 1;
    let timeLin2 = Math.floor(Math.random() * (13000 - 8000 + 1) + 8000);
    timeNum += timeLin2 / 1000;
    await sleep(timeLin2);

    crawler.c.queue([
      {
        uri: getUrl(page, arr, arrNum),
        jQuery: false,
      },
    ]);
    // 结束条件,请求玩数组内数据
  }
});

crawler.c.queue([
  {
    uri: getUrl(page, arr, arrNum),
    jQuery: false,
  },
]);

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
