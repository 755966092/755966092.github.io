// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/name-js");
const jsData = require("./data/js-data");

var data ={
  code: 1,
  data: {
  currPage: 1,
  hashNext: 1,
  list: [
  {
  albumId: 100513946,
  albumName: "大话西游",
  authorHeadImage: "/file/oss/test/image/nft-goods/3d2260727dc449ee92f0302df007f801.png",
  authorId: 11736210,
  authorName: "西安电影制片厂",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "29000",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/dbf635b2272f4d068524ef69a48dec72.jpg",
  vFlag: 1
  },
  {
  albumId: 100513945,
  albumName: "杨戬",
  authorHeadImage: "/file/oss/test/image/nft-goods/907386a9af5d439d8fe0a3c1a68374e7.jpg",
  authorId: 11923062,
  authorName: "Shan Qiao",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "38000",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/32c85ca553c940b6bf5216a98abe0a8c.jpg",
  vFlag: 1
  },
  {
  albumId: 100513931,
  albumName: "大话西游",
  authorHeadImage: "/file/oss/test/image/nft-goods/3d2260727dc449ee92f0302df007f801.png",
  authorId: 11736210,
  authorName: "西安电影制片厂",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "27999",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/cadc716db92a45a8bd5105ccff19f3d1.jpg",
  vFlag: 1
  },
  {
  albumId: 100513930,
  albumName: "三国系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/1bb9792a995f4d14ba0393c6387282ad.jpeg",
  authorId: 11599023,
  authorName: "何宽",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "43996",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/a055f11968694b17a200bfaed0e0eb35.jpg",
  vFlag: 1
  },
  {
  albumId: 100513929,
  albumName: "Cece-Plants",
  authorHeadImage: "/file/oss/test/image/nft-goods/9fb46828d62747b88fe51b554ed4eb13.png",
  authorId: 11826942,
  authorName: "Cece-plants",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "55555",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/47fb43e9bfac461293addc89e59c5f40.jpg",
  vFlag: 1
  },
  {
  albumId: 100513927,
  albumName: "大话西游",
  authorHeadImage: "/file/oss/test/image/nft-goods/3d2260727dc449ee92f0302df007f801.png",
  authorId: 11736210,
  authorName: "西安电影制片厂",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "28199",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/31d6c3b1157c4d97ac93a09e38a25d8f.jpg",
  vFlag: 1
  },
  {
  albumId: 100513926,
  albumName: "大话西游",
  authorHeadImage: "/file/oss/test/image/nft-goods/3d2260727dc449ee92f0302df007f801.png",
  authorId: 11736210,
  authorName: "西安电影制片厂",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "29444",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/ff044a0da0ed440e87d365ed78c7aa6e.jpg",
  vFlag: 1
  },
  {
  albumId: 100513925,
  albumName: "赵文琪",
  authorHeadImage: "/file/oss/test/image/nft-goods/10aa1aaef97b4da0b6aee6d5cd276d98.png",
  authorId: 11594374,
  authorName: "赵文琪",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "29999",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/96fe46101e9142b9b69e20c50e35d78a.jpg",
  vFlag: 1
  },
  {
  albumId: 100513922,
  albumName: "花米奇",
  authorHeadImage: "/file/oss/test/image/nft-goods/8b2a12f708c349e381244190e8519dfe.png",
  authorId: 11645922,
  authorName: "游雯迪",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "26688",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/9026d4ac8d0e41528b1438d4def119c3.jpg",
  vFlag: 1
  },
  {
  albumId: 100513920,
  albumName: "赵文琪",
  authorHeadImage: "/file/oss/test/image/nft-goods/10aa1aaef97b4da0b6aee6d5cd276d98.png",
  authorId: 11594374,
  authorName: "赵文琪",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "16887",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/b98ae81bf98048c298f6d54e77a522ec.jpg",
  vFlag: 1
  },
  {
  albumId: 100513921,
  albumName: "三国系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/1bb9792a995f4d14ba0393c6387282ad.jpeg",
  authorId: 11599023,
  authorName: "何宽",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "93888",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/98f36f0450604aac98919199b2bda8e1.png",
  vFlag: 1
  },
  {
  albumId: 100513919,
  albumName: "四大天王",
  authorHeadImage: "/file/oss/test/image/nft-goods/75b04b0e5883452285640a60c32d80e9.jpg",
  authorId: 11489211,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "15300",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/2527920539c34e058459eba56dd4de26.jpg",
  vFlag: 1
  },
  {
  albumId: 100513918,
  albumName: "大闹天宫系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/75b04b0e5883452285640a60c32d80e9.jpg",
  authorId: 11489211,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "29900",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/9fd3a89866e44c5795c4122a7d116fbd.jpg",
  vFlag: 1
  },
  {
  albumId: 100513916,
  albumName: "牛气冲天",
  authorHeadImage: "/file/oss/test/image/nft-goods/a30fd89e0c7a463aba1e8ed8110ec456.jpeg",
  authorId: 11439239,
  authorName: "龙在天皮影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "99999",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/0519500ffcf44cb4a27dac74a09b3174.jpg",
  vFlag: 1
  },
  {
  albumId: 100513894,
  albumName: "四大天王",
  authorHeadImage: "/file/oss/nft/image/nft-goods/22ac862e81e3424582e05520804fc4f3.jpg",
  authorId: 10004744,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "13997",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/b7f00909df624571aed84bdaab856c56.jpg",
  vFlag: 1
  },
  {
  albumId: 100513893,
  albumName: "企鹅",
  authorHeadImage: "/file/oss/test/image/nft-goods/b4fa987cedd2462b936cdaddd9146847.png",
  authorId: 11350728,
  authorName: "张琳",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "13977",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/7db75c0a425c49e6a1166529bf46649e.jpg",
  vFlag: 1
  },
  {
  albumId: 100513890,
  albumName: "大闹天宫系列",
  authorHeadImage: "/file/oss/nft/image/nft-goods/22ac862e81e3424582e05520804fc4f3.jpg",
  authorId: 10004744,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "77888",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/67640765d3c24ccdac140fa40f514a02.jpg",
  vFlag: 1
  },
  {
  albumId: 100513889,
  albumName: "大闹天宫系列",
  authorHeadImage: "/file/oss/nft/image/nft-goods/22ac862e81e3424582e05520804fc4f3.jpg",
  authorId: 10004744,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "20200",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/d0ce3b75a1ac42118757d9d33c5a0caa.jpg",
  vFlag: 1
  },
  {
  albumId: 100513888,
  albumName: "彩云精灵",
  authorHeadImage: "/file/oss/test/image/nft-goods/014af02c42164925ad912d84132e6bf5.png",
  authorId: 11248758,
  authorName: "蒙秦",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "20888",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/fa0a3a9483ec4b67a93606d9fcd3caae.jpg",
  vFlag: 1
  },
  {
  albumId: 100513885,
  albumName: "彩云精灵",
  authorHeadImage: "/file/oss/test/image/nft-goods/014af02c42164925ad912d84132e6bf5.png",
  authorId: 11248758,
  authorName: "蒙秦",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "25300",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/b92a7c0e0f624d3cad990f5f50b4734a.jpg",
  vFlag: 1
  }
  ],
  pageSize: 20,
  totalCount: 0,
  totalPage: 0
  },
  message: "success",
  msgId: "715568d0e10d4cdb81e63be17c34650a",
  success: true
  }
  
  
  
  
  
  
  
  
  

var handleData = data.data.list;

var resultData = [];
const date = moment().valueOf();

handleData.forEach((item) => {
  for (let i = 0; i < name.data.length; i++) {
    const element = name.data[i];
    if (element.id === item.albumId) {
      resultData.push({
        id: item.albumId,
        name: element.name,
        total: element.total,
        priceCny: Number(item.priceCny),
        albumName: element.albumName,
        hisData: [],
        hisDate: [],
        date: date,
        author: element.author,
        authentication: element.authentication,
        link: element.link,
      });
      break;
    }
  }
});

let shangyici = jsData.lineData;

jsData.time.push(date);

shangyici = shangyici.map((item) => {
  for (let i = 0; i < resultData.length; i++) {
    const ele = resultData[i];
    if (ele.id === item.id) {
      item.hisData.push(ele.priceCny);
      break;
    }
  }
  return item;
});
fs.writeFile(
  "./line/data/DVBlkS2V8vEaFnPkH7P5zf4Z.js",
  `var time = ${JSON.stringify(jsData.time)};var lineData = ${JSON.stringify(
    shangyici
  )}`,
  () => {}
);
fs.writeFile(
  "./line/data/js-data.js",
  `var time = ${JSON.stringify(
    jsData.time
  )}; module.exports = { time:time,lineData: ${JSON.stringify(shangyici)}}`,
  () => {}
);
