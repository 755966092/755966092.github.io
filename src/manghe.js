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
  "ib-trans-id": "32dfe5bec2b44e0d9598ffa0fba34bf7",
  "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
  "sec-ch-ua":
    '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-site",
  cookie:
    "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=7ca5d59516494794022865390e3c535b75649854b3dabd2e9bd7b62951; acw_sc__v2=62510eeac19f29c4d7ba8540c81a8bdc65b9a172; acw_sc__v3=62511220496efdaa418488dda015242ef8a4fff7; ssxmod_itna2=eqjxyDcDgDn0wrxlSodjKD5DQDOSiekbseD6ObnED0y0DRD03DuY3ujOj2UoMNYTXsRS0u50xqxnRjGUmcWKeAdE=pDTvKfzpfXp10Fa2BOduQpMc0zu3UoqcjGq8t7qwHIXEHUdpkoeUwAQR3jAl4xIeqKI3MoxwfGg8+GeTLDFmQU3NTt=pbRYqQN5re03OuX=vxAVtuEq113hi8f=RS9FUpKKn8jkEb3Gj1REFWnKgb7INFThyApxZOxFUeAj4+Y=50L8OoI+KuYUsqk06ggybdkHeL7F3qAPZIkUAKll1e/gAZLM=ey1PsBdSiewY0EiqPbqK4KvjxpY3OE0hZN12=eli+0DwajtA0QlLzE4P+GSZQvaiKbjEQGizLPxmGPie6pF=PZYvK1A/Pfd2fkFElQAh1oixd27fqaIm93gCEw+q+FqZYIzUELjjCSteZ368T4fKTDG2SD=zhdlr4KeqC7rbLbz2d2DtFxtYiZbRKRe=bu5jhdCRDSM4Tq4nKijhT/LQY0D8x1ZKmNlWSDqD08DijwAHZS48jxxD===; ssxmod_itna=Yqfx0QKCuD2nDXDnekDkmGCmDCiGOFYWGfDBLhD4iNDnD8x7YDvGzMQGb3QBWQNlEmPNAQCDawwIBYgwExNuox4GIDeKG2DmeDyDi5GRD09eYzPNKD3Dm4i3DDOdDgDmKGgWqGff2xDc7DWy10x0ru1PD0cb1OrAPYhKORcaFDB4eh7bYimuDCDxxAlrqCjhxsGhtCm8TFAD5GK+PHlrWoWbvg9GDD==",
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
    let ranNum = Math.floor(Math.random() * (15000 - 7000 + 1) + 7000);
    await sleep(ranNum);
    console.log(
      "间隔时间: " +
        ranNum +
        ",当前页:" +
        page +
        ",当前藏品:" +
        resultData[0].gName
    );
    crawler.c.queue(
      `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${arr[arrNum]}&onSale=0&order=0`
    );
  } else {
    // 处理数据,请求下一个
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      if (ele.gStatus == 2 && arr[arrNum] == ele.albumId) {
        resultObj[ele.gName] = ele.gNum - 1;
        break;
      }
    }

    fs.writeFile(
      `./src/data/data-${arr[arrNum]}.js`,
      "var lineData = " + JSON.stringify(data) + JSON.stringify(resultObj),
      () => {}
    );
    fs.writeFile(
      `./src/data/d2ata-${arr[arrNum]}.js`,
      "var lineData = " + JSON.stringify(resultObj),
      () => {}
    );

    if (arrNum == 12) {
      console.log("结束...");
      process.exit(1);
    }
    arrNum += 1;
    page = 1;
    await sleep(Math.floor(Math.random() * (13000 - 8000 + 1) + 8000));

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
