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
  100513812, 100513813, 100513814, 100513815, 100513816, 100513817, 100513818,
];
/**
 * 100513812, 霸王别姬 20
 * 100513813, 玫瑰玫瑰我爱你 600
 * 100513814, 夜上海 900
 * 100513815, 如果没有你 900
 * 100513816, 俏冤家 6673
 * 100513817, 好春宵 6673
 * 100513818, 蔷薇处处开 6673
 */

var url = `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${arr[arrNum]}&onSale=0&order=0`;

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

  if (resultData.length > 0 && resultData[0].gStatus == 1) {
    let ranNum = Math.floor(Math.random() * (15000 - 7000 + 1) + 7000);
    timeNum += ranNum / 1000;
    await sleep(ranNum);
    console.log(
      ` 间隔时间: ${ranNum} ,当前页: ${page} ,当前藏品: ${resultData[0].gName}`
    );
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
      fs.writeFile(
        `./src/data-0416/time-8.js`,
        "总耗时: " + timeNum,
        () => {}
      );
      fs.writeFile(
        `./src/data-0416/data-8.js`,
        "var lineData = " + JSON.stringify(data),
        () => {}
      );
      fs.writeFile(
        `./src/data-0416/num-8.js`,
        "var lineData = " + JSON.stringify(resultObj),
        () => {}
      );
      fs.writeFile(
        `./src/data-0416/price-8.js`,
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
