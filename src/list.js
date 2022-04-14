const path = require("path"),
  root_path = process.cwd(),
  crawler = require(path.join(root_path, "/public/crawler")),
  fs = require("fs");
const xlsx = require("node-xlsx");
const moment = require("moment");
const name = require("./name");
const allName = require("./data/all-js");

var resultData = {};
let page = 1;
let arrNum = 0;
let resultObj = {};
let resultPic = {};
let timeNum = 0;
var currentData = {};
var arr = [100513801];

// var asd = [
//     100513798
// ];

var asd = [100513801];

//  gStatus: 16, 锁定中
function getUrl(id, page) {
  return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${id}&onSale=1&order=1`;
}


var data = [];
console.log("开始...");
crawler.initCrawler(async (res, err) => {
  if (err) {
    console.log("请求失败", err);
  }
  // 获取数据
  if (JSON.parse(res.body).data) {
    resultData = JSON.parse(res.body).data;
  }
  for (let i = 0; i < allName.lineData.length; i++) {
    const element = allName.lineData[i];
    if (element.id == asd[arrNum]) {
      currentData = element;
      break;
    }
  }

  if (resultData.list && resultData.list.length > 0) {
    for (let j = 0; j < resultData.list.length; j++) {
      const item = resultData.list[j];
      if (item.gStatus == 6) {
        data.push({
          id: currentData.id,
          name: currentData.name,
          total: currentData.total,
          priceCny: item.priceCny,
          albumName: currentData.albumName,
          author: currentData.author,
          authentication: currentData.authentication,
          link: currentData.link,
        });
        break;
      } else {
        // if (j == 199 && gStatus == 2) {
        // }
      }
    }
  } else {
    data.push({
      id: currentData.id,
      name: currentData.name,
      total: currentData.total,
      priceCny: 0,
      albumName: currentData.albumName,
      author: currentData.author,
      authentication: currentData.authentication,
      link: currentData.link,
    });
  }

  if (arrNum < asd.length - 1) {
    arrNum += 1;
    let ranNum = Math.floor(Math.random() * (12000 - 5000 + 1) + 5000);
    console.log(`当前产品${arrNum}: ${currentData.name}`);
    await sleep(ranNum);
    crawler.c.queue([
      {
        uri: getUrl(asd[arrNum], page),
        jQuery: false,
      },
    ]);
  } else {
    fs.writeFile(
      `./src/data/all-test.js`,
      "var lineData = " + JSON.stringify(data),
      () => {}
    );
    var buffer = xlsx.build(formatData(data));

    fs.writeFile(
      `./xlsx/ibox非直售藏品实时价格${moment().format("(MM_DD_HH_mm)")}.xlsx`,
      buffer,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
});

crawler.c.queue([
  {
    uri: getUrl(asd[arrNum], page),
    jQuery: false,
  },
]);

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function formatData(params) {
  let data = [
    {
      name: "价格",
      data: [
        [
          "藏品名字",
          "最低价格",
          "总发行量",
          "所属系列",
          "作者名字",
          "认证",
          "地址",
        ],
      ],
    },
  ];

  params.forEach((item) => {
    data[0].data.push([
      item.name,
      item.priceCny,
      item.total,
      item.albumName,
      item.author,
      item.authentication,
      item.link,
    ]);
  });

  return data;
}
