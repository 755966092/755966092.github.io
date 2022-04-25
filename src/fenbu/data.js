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
// var id = "100513850";
var id = "100513845";
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
  hashNext: 1,
  list: [
  {
  albumId: 100513845,
  gId: 101439533,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "1",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 20000,
  tokenId: "1096413"
  },
  {
  albumId: 100513845,
  gId: 101439540,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "8",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 16666,
  tokenId: "1096420"
  },
  {
  albumId: 100513845,
  gId: 101439543,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "11",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 13666,
  tokenId: "1096423"
  },
  {
  albumId: 100513845,
  gId: 101439556,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "24",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18888,
  tokenId: "1096435"
  },
  {
  albumId: 100513845,
  gId: 101439561,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "29",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 28888,
  tokenId: "1096437"
  },
  {
  albumId: 100513845,
  gId: 101439573,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "41",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18888,
  tokenId: "1096717"
  },
  {
  albumId: 100513845,
  gId: 101439583,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "51",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 36666,
  tokenId: "1096456"
  },
  {
  albumId: 100513845,
  gId: 101439587,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "55",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18888,
  tokenId: "1096460"
  },
  {
  albumId: 100513845,
  gId: 101439607,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "75",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 49999.99,
  tokenId: "1096723"
  },
  {
  albumId: 100513845,
  gId: 101439615,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "83",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18888,
  tokenId: "1096479"
  },
  {
  albumId: 100513845,
  gId: 101439617,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "85",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 12600,
  tokenId: "1096721"
  },
  {
  albumId: 100513845,
  gId: 101439619,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "87",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 38000,
  tokenId: "1096485"
  },
  {
  albumId: 100513845,
  gId: 101439624,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "92",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 15999,
  tokenId: "1096490"
  },
  {
  albumId: 100513845,
  gId: 101439631,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "99",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 14999,
  tokenId: "1096496"
  },
  {
  albumId: 100513845,
  gId: 101439633,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "101",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 13216,
  tokenId: "1096497"
  },
  {
  albumId: 100513845,
  gId: 101439638,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "106",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 13999,
  tokenId: "1096728"
  },
  {
  albumId: 100513845,
  gId: 101439651,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "119",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 31111,
  tokenId: "1096512"
  },
  {
  albumId: 100513845,
  gId: 101439682,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "150",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 20000,
  tokenId: "1096538"
  },
  {
  albumId: 100513845,
  gId: 101439691,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "159",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 16999,
  tokenId: "1096546"
  },
  {
  albumId: 100513845,
  gId: 101439695,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "163",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 23918,
  tokenId: "1096741"
  },
  {
  albumId: 100513845,
  gId: 101439700,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "168",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 38888,
  tokenId: "1096551"
  },
  {
  albumId: 100513845,
  gId: 101439702,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "170",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18888,
  tokenId: "1096555"
  },
  {
  albumId: 100513845,
  gId: 101439703,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "171",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 12799,
  tokenId: "1096557"
  },
  {
  albumId: 100513845,
  gId: 101439704,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "172",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 19999,
  tokenId: "1096556"
  },
  {
  albumId: 100513845,
  gId: 101439719,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "187",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 15888,
  tokenId: "1096570"
  },
  {
  albumId: 100513845,
  gId: 101439723,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "191",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 30000,
  tokenId: "1096573"
  },
  {
  albumId: 100513845,
  gId: 101439729,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "197",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 17777,
  tokenId: "1096579"
  },
  {
  albumId: 100513845,
  gId: 101439734,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "202",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 20000,
  tokenId: "1096584"
  },
  {
  albumId: 100513845,
  gId: 101439736,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "204",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 14888,
  tokenId: "1096586"
  },
  {
  albumId: 100513845,
  gId: 101439745,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "213",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18880,
  tokenId: "1096593"
  },
  {
  albumId: 100513845,
  gId: 101439757,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "225",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 13166,
  tokenId: "1096603"
  },
  {
  albumId: 100513845,
  gId: 101439785,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "253",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 21999,
  tokenId: "1096613"
  },
  {
  albumId: 100513845,
  gId: 101439789,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "257",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 13000,
  tokenId: "1096617"
  },
  {
  albumId: 100513845,
  gId: 101439792,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "260",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 20000,
  tokenId: "1096620"
  },
  {
  albumId: 100513845,
  gId: 101439793,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "261",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 12799,
  tokenId: "1096621"
  },
  {
  albumId: 100513845,
  gId: 101439800,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "268",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18999,
  tokenId: "1096627"
  },
  {
  albumId: 100513845,
  gId: 101439813,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "281",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 20000,
  tokenId: "1096637"
  },
  {
  albumId: 100513845,
  gId: 101439822,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "290",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 15888,
  tokenId: "1096940"
  },
  {
  albumId: 100513845,
  gId: 101439829,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "297",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 25555,
  tokenId: "1096646"
  },
  {
  albumId: 100513845,
  gId: 101439834,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "302",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 18999,
  tokenId: "1096651"
  },
  {
  albumId: 100513845,
  gId: 101439839,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "307",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 29999,
  tokenId: "1096655"
  },
  {
  albumId: 100513845,
  gId: 101439854,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "322",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 28888.88,
  tokenId: "1096665"
  },
  {
  albumId: 100513845,
  gId: 101439855,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "323",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 32888,
  tokenId: "1096950"
  },
  {
  albumId: 100513845,
  gId: 101439865,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "333",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 33333.33,
  tokenId: "1096671"
  },
  {
  albumId: 100513845,
  gId: 101439875,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "343",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 25000,
  tokenId: "1096681"
  },
  {
  albumId: 100513845,
  gId: 101439886,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "354",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 13800,
  tokenId: "1097137"
  },
  {
  albumId: 100513845,
  gId: 101439887,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "355",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 12999,
  tokenId: "1096690"
  },
  {
  albumId: 100513845,
  gId: 101439896,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "364",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 20022,
  tokenId: "1096964"
  },
  {
  albumId: 100513845,
  gId: 101439900,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "368",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 14698,
  tokenId: "1096972"
  },
  {
  albumId: 100513845,
  gId: 101439903,
  gName: "威尼斯双年艺术展纪念海报",
  gNum: "371",
  gStatus: 6,
  isBuy: 0,
  ownerId: 10886326,
  ownerName: "杨嘎",
  priceCny: 21000,
  tokenId: "1096699"
  }
  ],
  pageSize: 50,
  totalCount: 0,
  totalPage: 0
  },
  message: "success",
  msgId: "226e1801967e43a7b2f56e00bc4c69ff",
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
