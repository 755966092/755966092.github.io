// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 个人详情页      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 辛德勒  https://www.ibox.art/zh-cn/account/?type=0&sub=0&id=10146203
// 详情    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductDetail?albumId=100000118
// id查询  https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=50&albumId=100513745&onSale=0&order=0&u_atoken=854a1b9d-f244-4f53-b1b8-dbb1dbebda51&u_asession=01Jq2_yZG44PldPMUzpPK_64oKm1N0cm-Z9wYe1VpyKQXB58PNkN3wT2OIvtgtPgkuX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K9esXxZSz_eFXjsNK6ic5AZiuAafKdTYAKXPpDxh19QCGBkFo3NEHBv0PZUm6pbxQU&u_asig=05IBWrYtfymA_uDUcLVJ8xTf-WTNmxYW2pFG78yqcabg3FnzpbjAJKqGtU5hWcqzf2Y9nepblkCDkytjeqfdw7DEMGuE1YEBuVmRC9IPyW6A5dHmmwLBPX8pxxVshsdM8matyMPiFOPeRMzR1MuYUhz6UKm6uEk_3KLvNIBjFoZCf9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzRs4Ssbd3UE93JcJ__4A6vT3ZFHYP02cpYq4ibng9y3Hm341ApPXXfn0ATZ7PzLRdO3h9VXwMyh6PgyDIVSG1W8qzXawpZZ4bVe-btTXRTswRtJjAoFPV1D1dp9iP-bWzt9XsRMLo9MAUW1mcFqykOVKTlpxd8_0jNZUkyAMMj2KmWspDxyAEEo4kbsryBKb9Q&u_aref=H%2BcDQ7zuj64tmtGLcCuOiekJIgg%3D
// 搜索    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/searchGoodsV2?subType=0&sort=0&onSale=1&grade=-1&origin=0&type=0&page=1&pageSize=50&content=%E6%A0%87%E5%85%B5&u_atoken=9f8a20f4-3c61-4c09-bef0-d611ffb7e3ab&u_asession=011zSKYF_miNMdqX59R90EAnri63BWt3tLfecQt65cHrTPFiC3P3PYVmwtlwPs9bZGX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K9UGqvZrZnx5dof9QQAI7QziuAafKdTYAKXPpDxh19QCGBkFo3NEHBv0PZUm6pbxQU&u_asig=057a-RdImaMhvFwQOLmETQHJzaBxM8uOheRyr5re3_0P8V2LhHXM8aZbbF4NcjCtjzivSSfbnoxoiY-VgwnxktRgiSp8LideI-3fio5q98xItylugM-qpR5S2e_PbjkjV_mSGRfpypomBgFpTaotfPCWe5X9v_xlXfvEm6-3byIK39JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzYTNVIpflp6QaMD1KoiM1oyWrfAzkncYABtrpbuQa8V7m341ApPXXfn0ATZ7PzLRdO3h9VXwMyh6PgyDIVSG1W9vgbrDSUjiqZVZvDpOsi__LJ0CqtehMVLVIw0n4HVzWiR-kaq0dnbCqA59uOg0PEsur0BH9eY_ATWShouPlebSmWspDxyAEEo4kbsryBKb9Q&u_aref=zmxXoHsrIabfDw49ZznT27UMauE%3D

// 实时价格,随时运行
// https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=50&albumId=100513801&onSale=1&order=1

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/name-js");
const jsData = require("./data/js-data");

var data = {
  code: 1,
  data: {
  currPage: 2,
  hashNext: 1,
  list: [
    
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
  priceCny: "19300",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/b92a7c0e0f624d3cad990f5f50b4734a.jpg",
  vFlag: 1
  },
  {
  albumId: 100513884,
  albumName: "iBox赛博生肖系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
  authorId: 10133453,
  authorName: "iBox",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "1000",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/deafb429825f43d7975c941cd28cee38.png",
  vFlag: 1
  },
  {
  albumId: 100513883,
  albumName: "Sunny",
  authorHeadImage: "/file/oss/test/image/nft-goods/684ccb8af8aa4ed59b4a36a039ac5f6c.png",
  authorId: 11235117,
  authorName: "王喆",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "53333",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/fa17d04f212b4cc5b35cacbb6e8e60b3.jpg",
  vFlag: 1
  },
  {
  albumId: 100513881,
  albumName: "异形人",
  authorHeadImage: "/file/oss/test/image/nft-goods/f2be57f458284e72891045ebf97b131a.png",
  authorId: 11225765,
  authorName: "潘跃",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "13999",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/cbd30b77007642949fb8b2802054e094.jpg",
  vFlag: 1
  },
  {
  albumId: 100513880,
  albumName: "iBox赛博生肖系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
  authorId: 10133453,
  authorName: "iBox",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "995",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/7130f960d15d43a9819f07d608f6154c.png",
  vFlag: 1
  },
  {
  albumId: 100513879,
  albumName: "大闹天宫系列",
  authorHeadImage: "/file/oss/nft/image/nft-goods/22ac862e81e3424582e05520804fc4f3.jpg",
  authorId: 10004744,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "10199",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/9d8a8ba495a8478e8020829731bea4f0.jpg",
  vFlag: 1
  },
  {
  albumId: 100513871,
  albumName: "iBox赛博生肖系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
  authorId: 10133453,
  authorName: "iBox",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "1050",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/32c62138bb4b4255a55c70632fc23a99.png",
  vFlag: 1
  },
  {
  albumId: 100513867,
  albumName: "姜子牙",
  authorHeadImage: "/file/oss/test/image/nft-goods/e3823b8b0bfe4146a59046c7be11472f.png",
  authorId: 11085019,
  authorName: "Shan Qiao",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "33000",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/a7950ebf638c43bb8a20f73c0552da41.jpg",
  vFlag: 1
  },
  {
  albumId: 100513864,
  albumName: "iBox赛博猫狗系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
  authorId: 10133453,
  authorName: "iBox",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "1500",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/db0c1eebb2504967a9baf3c7b74632eb.jpg",
  vFlag: 1
  },
  {
  albumId: 100513863,
  albumName: "iBox赛博猫狗系列",
  authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
  authorId: 10133453,
  authorName: "iBox",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "1128",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/674ff6af25584d2b81f73f4965168852.jpg",
  vFlag: 1
  },
  {
  albumId: 100513861,
  albumName: "大闹天宫系列",
  authorHeadImage: "/file/oss/nft/image/nft-goods/22ac862e81e3424582e05520804fc4f3.jpg",
  authorId: 10004744,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "11999",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/0c1c651ecf66468bbe1e416c7a34c264.jpg",
  vFlag: 1
  },
  {
  albumId: 100513862,
  albumName: "青啸虎",
  authorHeadImage: "/file/oss/test/image/nft-goods/0942329dc6aa483da2e603dfa847e0ba.jpg",
  authorId: 10048601,
  authorName: "青爵",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "27000",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/92bc360541cf4fcd8730b1074f0335d4.jpg",
  vFlag: 1
  },
  {
  albumId: 100513856,
  albumName: "五虎上将",
  authorHeadImage: "/file/oss/test/image/nft-goods/6d2d3f5d3c4b4e84abd0202635c4446e.jpeg",
  authorId: 10860917,
  authorName: "何宽",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "99999",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/4135eae8f2874330a4de3d060be1cb28.jpg",
  vFlag: 1
  },
  {
  albumId: 100513860,
  albumName: "大闹天宫系列",
  authorHeadImage: "/file/oss/nft/image/nft-goods/22ac862e81e3424582e05520804fc4f3.jpg",
  authorId: 10004744,
  authorName: "熵湾 X 上美影",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "10300",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/e65902ecec2d4152bea7af5c7ee1636a.jpg",
  vFlag: 1
  },
  {
  albumId: 100513859,
  albumName: "功夫猫-2号",
  authorHeadImage: "/file/oss/test/image/nft-goods/710e12be688e4ec9b91455be9afb7bb8.png",
  authorId: 10154081,
  authorName: "Pancya",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "1100",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/05815d6299224603a20b9af7a5f01407.jpg",
  vFlag: 1
  },
  {
  albumId: 100513858,
  albumName: "功夫猫-1号",
  authorHeadImage: "/file/oss/test/image/nft-goods/710e12be688e4ec9b91455be9afb7bb8.png",
  authorId: 10154081,
  authorName: "Pancya",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "1100",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/0b9a821615a84ceab4d7b908198ac4f8.jpg",
  vFlag: 1
  },
  {
  albumId: 100513857,
  albumName: "精灵宝贝",
  authorHeadImage: "/file/oss/test/image/nft-goods/710e12be688e4ec9b91455be9afb7bb8.png",
  authorId: 10154081,
  authorName: "Pancya",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "4400",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/6f1db3087764447582d8562b89444dc2.jpg",
  vFlag: 1
  },
  {
  albumId: 100513853,
  albumName: "情愫",
  authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
  authorId: 10133453,
  authorName: "iBox",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "45000",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/48286cfda2d4469da7d8f6057d5db6fe.jpg",
  vFlag: 1
  },
  {
  albumId: 100513851,
  albumName: "呼唤",
  authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
  authorId: 10133453,
  authorName: "iBox",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "41000",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/b773bcbc4cbd487e92a4df26b0e07534.png",
  vFlag: 1
  },
  {
  albumId: 100513841,
  albumName: "五虎上将",
  authorHeadImage: "/file/oss/test/image/nft-goods/6d2d3f5d3c4b4e84abd0202635c4446e.jpeg",
  authorId: 10860917,
  authorName: "何宽",
  gId: null,
  gType: 0,
  isBuy: null,
  onSale: 1,
  price: "0",
  priceCny: "28887",
  priceUnit: "",
  sellLimit: 0,
  thumbPic: "/file/oss/test/image/nft-goods/8007b73b1ff4454b86aaef428d134f86.jpg",
  vFlag: 1
  },

  ],
  pageSize: 20,
  totalCount: 0,
  totalPage: 0
  },
  message: "success",
  msgId: "efd81bf000cb493092c86566df4ecd77",
  success: true
  }
  
  
  
  

var handleData = data.data.list;

var resultData = [];
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
        author: element.author,
        authentication: element.authentication,
        link: element.link,
      });
      break;
    }
  }
});

let shangyici = jsData.lineData;
shangyici = shangyici.map((item) => {
  for (let i = 0; i < resultData.length; i++) {
    const ele = resultData[i];
    if (ele.id === item.id) {
      item.hisData.push(ele.priceCny);
      //   item.priceCny = ele.priceCny;
      //   item.pridateceCny = ele.priceCny;
      break;
    }
  }
  return item;
});

const date = moment().valueOf();

jsData.time.push(date);

var buffer = xlsx.build(formatData(resultData));

fs.writeFile(`./xlsx/ibox实时价格${moment().format("(MM_DD_HH_mm)")}.xlsx`, buffer, (err) => {
  if (err) {
    throw err;
  }
});

fs.writeFile(
  "./line-real-time/data/DVBlkS2V8vEaFnPkH7P5zf4Z.js",
  `var time = ${JSON.stringify(jsData.time)};var lineData = ${JSON.stringify(shangyici)}`,
  () => {}
);


fs.writeFile(
  "./line-real-time/data/js-data.js",
  `var time = ${JSON.stringify(jsData.time)}; module.exports = { time:time,lineData: ${JSON.stringify(shangyici)}}`,
  () => {}
);

function formatData(params) {
  let data = [
    {
      name: "价格",
      data: [["藏品名字", "最低价格", "总发行量", "所属系列", "作者名字", "认证", "地址"]]
    }
  ];

  params.forEach((item) => {
    data[0].data.push([item.name, Number(item.priceCny), item.total, item.albumName, item.author, item.authentication, item.link]);
  });

  return data;
}

// 101081232 --- 782411
// 101131231 --- 1234510 布偶

// 赛博Terrier
// 101625033 --- 1242661
// 101725032 --- 1312674

// 101729032
// 100000001

// 100010667  最小值