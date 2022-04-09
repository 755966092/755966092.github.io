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
var arr = [
  100513759, 100513761, 100513762, 100513763, 100513764, 100513765, 100513766,
  100513767, 100513768, 100513769, 100513770, 100513771,
];

var url =
  "https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=" +
  page +
  "&pageSize=200&albumId=100513762&onSale=0&order=0";

var headers = {
  accept: "application/json, text/plain, */*",
  "accept-language": "zh-CN",
  "hb-nft-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
  "ib-device-id": "e141d54cf837418784b6c8fd68ae1e37",
  "ib-platform-type": "web",
  "ib-trans-id": "55361d7c8c614c8daa9bf14b036569fc",
  "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
  "sec-ch-ua":
    '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  cookie:
    "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=7ca5d59c16494702431206938e010b3cbef0159eba7a47d18b8997233a; acw_sc__v3=6250ef324f51f80cf1ffabc83a79fc08c9b06709; ssxmod_itna=eqAx9DgDy0KGq4BPOe5K4+AKDOWdqaeWFDl=DWTeGzDAxn40iDtPxTBDDTWvzH31tW73YGOjli531xrEnmq4K=ch3XtrDneG0DQKGmDBKDSDWKD9IeOlOnDixGWDbxDYGxY5GnDQykDWEp1DDP8DW5scx0rB2PD0g+zzpAxtcF8yoIHDBbeK6nvrGpqrm43K=DeeAwr7nwq63px3BDEs80PKOpNFY8XSQBDSWhYZQGDD; ssxmod_itna2=eqAx9DgDy0KGq4BPOe5K4+AKDOWdqaeWD6azxDqi=DlEiBDjby30QRLqLEe6qRDn4i5Vebja3O3a7CAQeoH3LARvPxfjSn68=SaERa/SQcI=seB98cWq6QQ=8CX3F55ozfXFy9kOXlqfF0ho4pxAA3WIIDerk/3vYsdLxLeLcUW3XnQjZleTqZQ3iwjLZfmnE8fWGifWpi3aED+agQScc+Pa1Ma9zxuHzqI7OR7Twacas3ZEGx+5PbEpR3LoC3LAfyqMZWqv+8dkBmxC9AOXBQHZnrXY9sy1R5H6R+f68EKZxIK5Gzusq3G8qrMOkrEb=2aY88aRPzRqrShDMTTEKbgoYAeD7jtQDkioH2Nci4A6wsAP5753iqYQIsiea8QHED3oKkQqibP47qHY+CGuRPv8+bO7GeWU=0YPDb78Wm+KMBhtWWPCq8mhmU4jWLL9hjSDY2X1fmt7Dp7qLRaRbwu+YbDGcDG7qYo7i80jqao6cn5qixa2D+aeNem+PXE0q3Wpo2xW8Pj85cZ4jfqYAhzGOLDhoYoAEEz0x4D=",
  Referer: "https://www.ibox.art/",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

var data = [];
console.log("开始");
crawler.initCrawler({ headers }, async (res, b) => {
  if (b) {
    console.log("请求失败", b);
  }
  resultData = JSON.parse(res.body).data.list;
  data = data.concat(resultData);
  page += 1;

  if (resultData.length > 0) {
    await sleep(Math.floor(Math.random() * (15000 - 10000 + 1) + 10000));
    console.log("当前页:" + page + ",当前藏品:" + data[0].gName);
    crawler.c.queue(
      `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${arr[arrNum]}&onSale=0&order=0`
    );
  } else {
    // 处理数据,请求下一个
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      if (ele.gStatus == 2) {
        resultObj[ele.gName] = ele.gNum - 1;
        break;
      }
    }

    fs.writeFile(
      `./src/data/data-${arr[arrNum]}.js`,
      "var lineData = " + JSON.stringify(data) + JSON.stringify(resultObj),
      () => {}
    );

    if (arrNum == 12) {
      console.log("结束...");
      console.log(resultObj);
      process.exit(1);
    }
    arrNum += 1;
    page = 1;
    await sleep(Math.floor(Math.random() * (13000 - 8000 + 1) + 5000));

    crawler.c.queue(
      `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${arr[arrNum]}&onSale=0&order=0`
    );
    // 结束条件,请求玩数组内数据
  }
  // console.log("length:", resultData.length);
});

// for (let i = 0; i < arr.length; i++) {
//   const ele = arr[i];
// crawler.c.queue(
//   `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=200&albumId=${ele}&onSale=0&order=0`
// );
// }
crawler.c.queue(
  `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=200&albumId=100513759&onSale=0&order=0`
);

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
