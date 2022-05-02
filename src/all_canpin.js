const path = require("path"),
  root_path = process.cwd(),
  crawler = require(path.join(root_path, "/public/crawler")),
  fs = require("fs");
const xlsx = require("node-xlsx");
const moment = require("moment");
const ObjectsToCsv = require("objects-to-csv");

var resultData = {};
let page = 1;
let arrNum = 0;
let resultObj = {};
let resultPic = {};
let timeNum = 0;
// 
var arr = [
  100513812, 100513813, 100513814,100513815, 100513816, 100513820, 100513818, 100513772, 100513759, 100513761, 100513762, 100513763, 100513764, 100513765,
  100513766, 100513767, 100513768, 100513769, 100513770, 100513771, 100513712, 100513713, 100513714, 100513715, 100513716, 100513717, 100513718, 100513719,
  100513720, 100513721, 100513722, 100513723, 100092612, 100092613, 100092614, 100092616, 100092617, 100092618, 100092619, 100092620, 100092622, 100092624,
  100092625, 100092627, 100092628, 100000317, 100000316, 100000315, 100000303, 100000318, 100000319, 100000306, 100000307, 100000308, 100000309, 100000310,
  100000311, 100000312, 100000313, 100000314, 100000233, 100000234, 100000235, 100000236, 100000237, 100000238, 100000239, 100000240, 100000241, 100000242,
  100000243, 100000244, 100000245, 100000246, 100000247, 100000248, 100000249, 100000180, 100000179, 100000178, 100000171, 100000172, 100000173, 100000174,
  100000175, 100000176, 100000177, 100000153, 100000154, 100000155, 100000156, 100000157, 100000158, 100000159, 100000160, 100000161, 100000162, 100000163,
  100000164, 100000165
];



function getUrl(page, arr, arrNum) {
  console.log('arrNum: ', arrNum);
  return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=100&albumId=${arr[arrNum]}&onSale=0&order=0`;
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
    let ranNum = 250;
    await sleep(ranNum);
    console.log(` 间隔时间: ${ranNum} ,当前页: ${page} ,当前藏品: ${resultData[0].gName}`);
    crawler.c.queue([
      {
        uri: getUrl(page, arr, arrNum),
        jQuery: false
      }
    ]);
  } else {
    // 结束条件
    if (arrNum == arr.length - 1) {
      const csv = new ObjectsToCsv(data);

      await csv.toDisk("./list-1111.csv");
      //   await csv.toDisk("./list.csv", { append: true });

      console.log("写入数据中,即将结束...");

      await sleep(20000);

      console.log("结束...");
      process.exit(1);
    }

    // console.log(JSON.parse(res.body));
    // 不满住结束条件继续执行, page初始化为1,因为换了藏品
    arrNum += 1;
    page = 1;
    let timeLin2 = 250;
    await sleep(timeLin2);

    crawler.c.queue([
      {
        uri: getUrl(page, arr, arrNum),
        jQuery: false
      }
    ]);
    // 结束条件,请求玩数组内数据
  }
});

crawler.c.queue([
  {
    uri: getUrl(page, arr, arrNum),
    jQuery: false
  }
]);

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
