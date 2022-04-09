const path = require("path"),
  root_path = process.cwd(),
  crawler = require(path.join(root_path, "/public/crawler")),
  fs = require("fs");
const xlsx = require("node-xlsx");
const moment = require("moment");
const name = require("./name");

var resultData = {};
let page = 1;

var url =
  "https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=" +
  page +
  "&pageSize=200&albumId=100513728&onSale=0&order=0";

var headers = {
  accept: "application/json, text/plain, */*",
  "accept-language": "zh-CN",
  "hb-nft-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
  "ib-device-id": "e141d54cf837418784b6c8fd68ae1e37",
  "ib-platform-type": "web",
  "ib-trans-id": "b0737ff5cfcf411da0cc3cb13317dd82",
  "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
  "sec-ch-ua":
    '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  cookie:
    "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_sc__v3=6250e7df2211536a86bc28518203d95a856957b1; acw_tc=7ca5d59c16494702431206938e010b3cbef0159eba7a47d18b8997233a; ssxmod_itna=YqRhDKDvZKBKGHD8D2DEDkmeELo59bGKEDBw4AKYDZDiqAPGhDC44F3gD8Aoa2hEsDIg4K1AtlqPPpIbYOAExby64iTD4q07Db4GkDAqiOD7k4e0mdqDPDbxYPDGnPGCDbq0CjxiccgDDaODWHzRx0rcpPD0gR1kOYKdEIOnZcFDB4eq1GoC42tqQb3AQePo02xqExNoj3W7B04kzDKOQeaZCxAMbxGrjqP4D===; ssxmod_itna2=YqRhDKDvZKBKGHD8D2DEDkmeELo59bGbD8LeLxGN55oGaADsT5WxIg1Bcr1vSPxCSB=eYP3qyxAKaYNlSKx1yFF4075Wx7=D+1iD",
  Referer: "https://www.ibox.art/",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

var data = [];
console.log("开始");
crawler.initCrawler({ headers, jQuery: false }, async (res, b) => {
  console.log("请求失败", b);
  resultData = JSON.parse(res.body).data.list;
  data = data.concat(resultData);
  await fs.writeFile(
    `./src/data/xiaohe-data${page}.js`,
    "var lineData = " + JSON.stringify(data),
    () => {}
  );
  page += 1;

  if (resultData.length > 0) {
    await sleep(Math.floor(Math.random() * (2000 - 1000 + 1) + 1000));
    console.log("当前页:", page);
    crawler.c.queue(
      "https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=" +
        page +
        "&pageSize=200&albumId=100513728&onSale=0&order=0"
    );
  } else {
    console.log("结束...", page + "-" + data.length);
    fs.writeFile(
      "./src/data/xiaohe-data.js",
      "var lineData = " + JSON.stringify(data),
      () => {}
    );
  }
  console.log("length:", resultData.length);
});

// 队列中无任务, 退出进程
// crawler.c.on("drain", function () {
//   (async () => {
//     await sleep(3000);
//     process.exit(1);
//   })();
// });

crawler.c.queue(url);

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
