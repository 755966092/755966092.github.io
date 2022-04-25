// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 个人详情页      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 辛德勒  https://www.ibox.art/zh-cn/account/?type=0&sub=0&id=10146203
// 详情    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductDetail?albumId=100000118
// id查询  https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=50&albumId=100513745&onSale=0&order=0&u_atoken=854a1b9d-f244-4f53-b1b8-dbb1dbebda51&u_asession=01Jq2_yZG44PldPMUzpPK_64oKm1N0cm-Z9wYe1VpyKQXB58PNkN3wT2OIvtgtPgkuX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K9esXxZSz_eFXjsNK6ic5AZiuAafKdTYAKXPpDxh19QCGBkFo3NEHBv0PZUm6pbxQU&u_asig=05IBWrYtfymA_uDUcLVJ8xTf-WTNmxYW2pFG78yqcabg3FnzpbjAJKqGtU5hWcqzf2Y9nepblkCDkytjeqfdw7DEMGuE1YEBuVmRC9IPyW6A5dHmmwLBPX8pxxVshsdM8matyMPiFOPeRMzR1MuYUhz6UKm6uEk_3KLvNIBjFoZCf9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzRs4Ssbd3UE93JcJ__4A6vT3ZFHYP02cpYq4ibng9y3Hm341ApPXXfn0ATZ7PzLRdO3h9VXwMyh6PgyDIVSG1W8qzXawpZZ4bVe-btTXRTswRtJjAoFPV1D1dp9iP-bWzt9XsRMLo9MAUW1mcFqykOVKTlpxd8_0jNZUkyAMMj2KmWspDxyAEEo4kbsryBKb9Q&u_aref=H%2BcDQ7zuj64tmtGLcCuOiekJIgg%3D
// 搜索    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/searchGoodsV2?subType=0&sort=0&onSale=1&grade=-1&origin=0&type=0&page=1&pageSize=50&content=%E6%A0%87%E5%85%B5&u_atoken=9f8a20f4-3c61-4c09-bef0-d611ffb7e3ab&u_asession=011zSKYF_miNMdqX59R90EAnri63BWt3tLfecQt65cHrTPFiC3P3PYVmwtlwPs9bZGX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K9UGqvZrZnx5dof9QQAI7QziuAafKdTYAKXPpDxh19QCGBkFo3NEHBv0PZUm6pbxQU&u_asig=057a-RdImaMhvFwQOLmETQHJzaBxM8uOheRyr5re3_0P8V2LhHXM8aZbbF4NcjCtjzivSSfbnoxoiY-VgwnxktRgiSp8LideI-3fio5q98xItylugM-qpR5S2e_PbjkjV_mSGRfpypomBgFpTaotfPCWe5X9v_xlXfvEm6-3byIK39JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzYTNVIpflp6QaMD1KoiM1oyWrfAzkncYABtrpbuQa8V7m341ApPXXfn0ATZ7PzLRdO3h9VXwMyh6PgyDIVSG1W9vgbrDSUjiqZVZvDpOsi__LJ0CqtehMVLVIw0n4HVzWiR-kaq0dnbCqA59uOg0PEsur0BH9eY_ATWShouPlebSmWspDxyAEEo4kbsryBKb9Q&u_aref=zmxXoHsrIabfDw49ZznT27UMauE%3D

// 实时价格,随时运行
const path = require("path"),
  root_path = process.cwd(),
  crawler = require(path.join(root_path, "/public/crawler")),
  fs = require("fs");
const xlsx = require("node-xlsx");
const moment = require("moment");
var jsData = require("./data/js-data");

var page = 1;
var resultData = [];
var id = "100513850";
// var id = "100513845";
var data = {};
console.log("开始...");
crawler.initCrawler(async (res, err) => {
  if (err) {
    console.log("请求失败", err);
  }
  // 获取数据
  console.log("获取数据...");
  if (JSON.parse(res.body).data) {
    console.log("有数据...");
    if (JSON.parse(res.body).data.list.length > 0) {
      console.log("列表有数据...", page);
      resultData = resultData.concat(JSON.parse(res.body).data.list);
      // 所有列表
      await sleep(Math.floor(Math.random() * (12000 - 5000 + 1) + 5000));
      page++;
      crawler.c.queue([
        {
          uri: getUrl(page, id),
          jQuery: false,
        },
      ]);
    } else {
      // 写入
      formatData(resultData);
    }
  }
});

// crawler.c.queue([
//   {
//     uri: getUrl(page, id),
//     jQuery: false,
//   },
// ]);

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

function getUrl(page, id) {
  // return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${id}&onSale=1&order=1`;
  return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${id}&onSale=0&order=0`;
}
let resu = {
  code: 1,
  data: {
  currPage: 1,
  hashNext: 0,
  list: [
  {
  albumId: 100513850,
  gId: 101448928,
  gName: "迷幻梦境",
  gNum: "96",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 31488,
  tokenId: "1101813"
  },
  {
  albumId: 100513850,
  gId: 101449073,
  gName: "迷幻梦境",
  gNum: "241",
  gStatus: 16,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 31498,
  tokenId: "1101714"
  },
  {
  albumId: 100513850,
  gId: 101448908,
  gName: "迷幻梦境",
  gNum: "76",
  gStatus: 16,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 31499,
  tokenId: "1102023"
  },
  {
  albumId: 100513850,
  gId: 101448997,
  gName: "迷幻梦境",
  gNum: "165",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 31886,
  tokenId: "1103996"
  },
  {
  albumId: 100513850,
  gId: 101449000,
  gName: "迷幻梦境",
  gNum: "168",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 31888.88,
  tokenId: "1101763"
  },
  {
  albumId: 100513850,
  gId: 101449047,
  gName: "迷幻梦境",
  gNum: "215",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 31999,
  tokenId: "1101730"
  },
  {
  albumId: 100513850,
  gId: 101449117,
  gName: "迷幻梦境",
  gNum: "285",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 32500,
  tokenId: "1103955"
  },
  {
  albumId: 100513850,
  gId: 101448922,
  gName: "迷幻梦境",
  gNum: "90",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 32500,
  tokenId: "1101819"
  },
  {
  albumId: 100513850,
  gId: 101448936,
  gName: "迷幻梦境",
  gNum: "104",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 33100,
  tokenId: "1101809"
  },
  {
  albumId: 100513850,
  gId: 101448857,
  gName: "迷幻梦境",
  gNum: "25",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 33333,
  tokenId: "1104035"
  },
  {
  albumId: 100513850,
  gId: 101448990,
  gName: "迷幻梦境",
  gNum: "158",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 33333,
  tokenId: "1101772"
  },
  {
  albumId: 100513850,
  gId: 101449072,
  gName: "迷幻梦境",
  gNum: "240",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 34567,
  tokenId: "1102010"
  },
  {
  albumId: 100513850,
  gId: 101448975,
  gName: "迷幻梦境",
  gNum: "143",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 34888,
  tokenId: "1101782"
  },
  {
  albumId: 100513850,
  gId: 101449014,
  gName: "迷幻梦境",
  gNum: "182",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 34999,
  tokenId: "1102015"
  },
  {
  albumId: 100513850,
  gId: 101448867,
  gName: "迷幻梦境",
  gNum: "35",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 35000,
  tokenId: "1101856"
  },
  {
  albumId: 100513850,
  gId: 101448900,
  gName: "迷幻梦境",
  gNum: "68",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 36000,
  tokenId: "1101835"
  },
  {
  albumId: 100513850,
  gId: 101448907,
  gName: "迷幻梦境",
  gNum: "75",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 36666,
  tokenId: "1101830"
  },
  {
  albumId: 100513850,
  gId: 101449086,
  gName: "迷幻梦境",
  gNum: "254",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 39168,
  tokenId: "1101705"
  },
  {
  albumId: 100513850,
  gId: 101449127,
  gName: "迷幻梦境",
  gNum: "295",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 39800,
  tokenId: "1101677"
  },
  {
  albumId: 100513850,
  gId: 101449027,
  gName: "迷幻梦境",
  gNum: "195",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 39999,
  tokenId: "1101744"
  },
  {
  albumId: 100513850,
  gId: 101448958,
  gName: "迷幻梦境",
  gNum: "126",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 42800,
  tokenId: "1102020"
  },
  {
  albumId: 100513850,
  gId: 101448849,
  gName: "迷幻梦境",
  gNum: "17",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 43228,
  tokenId: "1101870"
  },
  {
  albumId: 100513850,
  gId: 101448973,
  gName: "迷幻梦境",
  gNum: "141",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 45678,
  tokenId: "1104003"
  },
  {
  albumId: 100513850,
  gId: 101448850,
  gName: "迷幻梦境",
  gNum: "18",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 48886,
  tokenId: "1104038"
  },
  {
  albumId: 100513850,
  gId: 101448959,
  gName: "迷幻梦境",
  gNum: "127",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49998,
  tokenId: "1101793"
  },
  {
  albumId: 100513850,
  gId: 101448938,
  gName: "迷幻梦境",
  gNum: "106",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101808"
  },
  {
  albumId: 100513850,
  gId: 101449088,
  gName: "迷幻梦境",
  gNum: "256",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101703"
  },
  {
  albumId: 100513850,
  gId: 101448890,
  gName: "迷幻梦境",
  gNum: "58",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1104027"
  },
  {
  albumId: 100513850,
  gId: 101448913,
  gName: "迷幻梦境",
  gNum: "81",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1104020"
  },
  {
  albumId: 100513850,
  gId: 101448924,
  gName: "迷幻梦境",
  gNum: "92",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101820"
  },
  {
  albumId: 100513850,
  gId: 101448943,
  gName: "迷幻梦境",
  gNum: "111",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101802"
  },
  {
  albumId: 100513850,
  gId: 101449001,
  gName: "迷幻梦境",
  gNum: "169",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101762"
  },
  {
  albumId: 100513850,
  gId: 101448843,
  gName: "迷幻梦境",
  gNum: "11",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101874"
  },
  {
  albumId: 100513850,
  gId: 101449128,
  gName: "迷幻梦境",
  gNum: "296",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101676"
  },
  {
  albumId: 100513850,
  gId: 101449081,
  gName: "迷幻梦境",
  gNum: "249",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999,
  tokenId: "1101707"
  },
  {
  albumId: 100513850,
  gId: 101448851,
  gName: "迷幻梦境",
  gNum: "19",
  gStatus: 6,
  isBuy: 1,
  ownerId: 10537822,
  ownerName: "西图",
  priceCny: 49999.99,
  tokenId: "1101869"
  }
  ],
  pageSize: 50,
  totalCount: 0,
  totalPage: 0
  },
  message: "success",
  msgId: "0a012b2c0bce412eab8283516b730f3c",
  success: true
  }
  

formatData(resu.data.list);

async function formatData(data) {
  console.log("处理数据...");
  let result = { priceCny: [], priceCny2: [], time: moment().valueOf() };
  console.log("result: ", result);
  data.forEach((item) => {
    if (item.priceCny > 99) {
      // if (item.gStatus == 6) {
      result.priceCny.push(item.priceCny);
      // } else {
      // result.priceCny2.push(item.priceCny);
      // }
    }
  });
  jsData.data["id_" + id] = result;

  fs.writeFile(
    "./src/fenbu/data/js-data.js",
    `module.exports =  ${JSON.stringify(jsData)}`,
    () => {}
  );
  fs.writeFile(
    "./src/fenbu/data/html-data.js",
    `let lineData = ${JSON.stringify(jsData)}`,
    () => {}
  );
  console.log("写入文件中...");
  sleep(10000);
}
