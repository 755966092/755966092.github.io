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
          jQuery: false
        }
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
        albumId: 100513852,
        gId: 101449907,
        gName: "蝴蝶精灵",
        gNum: "175",
        gStatus: 16,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 38888.0,
        tokenId: "1108278"
      },
      {
        albumId: 100513852,
        gId: 101451057,
        gName: "蝴蝶精灵",
        gNum: "1325",
        gStatus: 16,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39555.0,
        tokenId: "1108083"
      },
      {
        albumId: 100513852,
        gId: 101451197,
        gName: "蝴蝶精灵",
        gNum: "1465",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39955.0,
        tokenId: "1107998"
      },
      {
        albumId: 100513852,
        gId: 101450978,
        gName: "蝴蝶精灵",
        gNum: "1246",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39966.0,
        tokenId: "1107624"
      },
      {
        albumId: 100513852,
        gId: 101451374,
        gName: "蝴蝶精灵",
        gNum: "1642",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39998.0,
        tokenId: "1108724"
      },
      {
        albumId: 100513852,
        gId: 101451169,
        gName: "蝴蝶精灵",
        gNum: "1437",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39998.0,
        tokenId: "1108615"
      },
      {
        albumId: 100513852,
        gId: 101450166,
        gName: "蝴蝶精灵",
        gNum: "434",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39999.0,
        tokenId: "1108147"
      },
      {
        albumId: 100513852,
        gId: 101451162,
        gName: "蝴蝶精灵",
        gNum: "1430",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39999.0,
        tokenId: "1108025"
      },
      {
        albumId: 100513852,
        gId: 101450302,
        gName: "蝴蝶精灵",
        gNum: "570",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39999.0,
        tokenId: "1108010"
      },
      {
        albumId: 100513852,
        gId: 101450069,
        gName: "蝴蝶精灵",
        gNum: "337",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39999.0,
        tokenId: "1108197"
      },
      {
        albumId: 100513852,
        gId: 101451207,
        gName: "蝴蝶精灵",
        gNum: "1475",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 39999.0,
        tokenId: "1107990"
      },
      {
        albumId: 100513852,
        gId: 101450888,
        gName: "蝴蝶精灵",
        gNum: "1156",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 40000.0,
        tokenId: "1108466"
      },
      {
        albumId: 100513852,
        gId: 101449954,
        gName: "蝴蝶精灵",
        gNum: "222",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 42000.0,
        tokenId: "1108258"
      },
      {
        albumId: 100513852,
        gId: 101450884,
        gName: "蝴蝶精灵",
        gNum: "1152",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 42000.0,
        tokenId: "1108470"
      },
      {
        albumId: 100513852,
        gId: 101450785,
        gName: "蝴蝶精灵",
        gNum: "1053",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 42568.0,
        tokenId: "1108511"
      },
      {
        albumId: 100513852,
        gId: 101450145,
        gName: "蝴蝶精灵",
        gNum: "413",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 42777.0,
        tokenId: "1108162"
      },
      {
        albumId: 100513852,
        gId: 101449735,
        gName: "蝴蝶精灵",
        gNum: "3",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 42888.0,
        tokenId: "1108213"
      },
      {
        albumId: 100513852,
        gId: 101450988,
        gName: "蝴蝶精灵",
        gNum: "1256",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 42888.88,
        tokenId: "1108425"
      },
      {
        albumId: 100513852,
        gId: 101449756,
        gName: "蝴蝶精灵",
        gNum: "24",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 42999.0,
        tokenId: "1107531"
      },
      {
        albumId: 100513852,
        gId: 101450773,
        gName: "蝴蝶精灵",
        gNum: "1041",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 43000.0,
        tokenId: "1107747"
      },
      {
        albumId: 100513852,
        gId: 101451146,
        gName: "蝴蝶精灵",
        gNum: "1414",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 43210.0,
        tokenId: "1108032"
      },
      {
        albumId: 100513852,
        gId: 101450227,
        gName: "蝴蝶精灵",
        gNum: "495",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 43888.0,
        tokenId: "1107258"
      },
      {
        albumId: 100513852,
        gId: 101449876,
        gName: "蝴蝶精灵",
        gNum: "144",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 43888.0,
        tokenId: "1107492"
      },
      {
        albumId: 100513852,
        gId: 101451656,
        gName: "蝴蝶精灵",
        gNum: "1924",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 44444.0,
        tokenId: "1108983"
      },
      {
        albumId: 100513852,
        gId: 101451732,
        gName: "蝴蝶精灵",
        gNum: "2000",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 44444.0,
        tokenId: "1109109"
      },
      {
        albumId: 100513852,
        gId: 101450605,
        gName: "蝴蝶精灵",
        gNum: "873",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 44888.0,
        tokenId: "1107582"
      },
      {
        albumId: 100513852,
        gId: 101451909,
        gName: "蝴蝶精灵",
        gNum: "2177",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45000.0,
        tokenId: "1109347"
      },
      {
        albumId: 100513852,
        gId: 101449928,
        gName: "蝴蝶精灵",
        gNum: "196",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45000.0,
        tokenId: "1107483"
      },
      {
        albumId: 100513852,
        gId: 101451576,
        gName: "蝴蝶精灵",
        gNum: "1844",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45550.0,
        tokenId: "1108887"
      },
      {
        albumId: 100513852,
        gId: 101450066,
        gName: "蝴蝶精灵",
        gNum: "334",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45555.0,
        tokenId: "1107802"
      },
      {
        albumId: 100513852,
        gId: 101450335,
        gName: "蝴蝶精灵",
        gNum: "603",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45678.0,
        tokenId: "1107794"
      },
      {
        albumId: 100513852,
        gId: 101451160,
        gName: "蝴蝶精灵",
        gNum: "1428",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45678.0,
        tokenId: "1108620"
      },
      {
        albumId: 100513852,
        gId: 101451290,
        gName: "蝴蝶精灵",
        gNum: "1558",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45678.0,
        tokenId: "1107929"
      },
      {
        albumId: 100513852,
        gId: 101450624,
        gName: "蝴蝶精灵",
        gNum: "892",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45678.0,
        tokenId: "1107046"
      },
      {
        albumId: 100513852,
        gId: 101451140,
        gName: "蝴蝶精灵",
        gNum: "1408",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45880.0,
        tokenId: "1108630"
      },
      {
        albumId: 100513852,
        gId: 101450965,
        gName: "蝴蝶精灵",
        gNum: "1233",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 45888.0,
        tokenId: "1107641"
      },
      {
        albumId: 100513852,
        gId: 101449915,
        gName: "蝴蝶精灵",
        gNum: "183",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 46000.0,
        tokenId: "1107461"
      },
      {
        albumId: 100513852,
        gId: 101450212,
        gName: "蝴蝶精灵",
        gNum: "480",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 46665.0,
        tokenId: "1107256"
      },
      {
        albumId: 100513852,
        gId: 101451393,
        gName: "蝴蝶精灵",
        gNum: "1661",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 46666.0,
        tokenId: "1108393"
      },
      {
        albumId: 100513852,
        gId: 101450165,
        gName: "蝴蝶精灵",
        gNum: "433",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 46666.0,
        tokenId: "1107289"
      },
      {
        albumId: 100513852,
        gId: 101450675,
        gName: "蝴蝶精灵",
        gNum: "943",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 46666.0,
        tokenId: "1107783"
      },
      {
        albumId: 100513852,
        gId: 101451428,
        gName: "蝴蝶精灵",
        gNum: "1696",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 46789.0,
        tokenId: "1108368"
      },
      {
        albumId: 100513852,
        gId: 101451770,
        gName: "蝴蝶精灵",
        gNum: "2038",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 46888.88,
        tokenId: "1109154"
      },
      {
        albumId: 100513852,
        gId: 101451331,
        gName: "蝴蝶精灵",
        gNum: "1599",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 47500.0,
        tokenId: "1107906"
      },
      {
        albumId: 100513852,
        gId: 101449911,
        gName: "蝴蝶精灵",
        gNum: "179",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 47600.0,
        tokenId: "1107491"
      },
      {
        albumId: 100513852,
        gId: 101451161,
        gName: "蝴蝶精灵",
        gNum: "1429",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 47999.0,
        tokenId: "1108023"
      },
      {
        albumId: 100513852,
        gId: 101450422,
        gName: "蝴蝶精灵",
        gNum: "690",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 48000.0,
        tokenId: "1107856"
      },
      {
        albumId: 100513852,
        gId: 101451821,
        gName: "蝴蝶精灵",
        gNum: "2089",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 48000.0,
        tokenId: "1109228"
      },
      {
        albumId: 100513852,
        gId: 101450955,
        gName: "蝴蝶精灵",
        gNum: "1223",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 48800.0,
        tokenId: "1107642"
      },
      {
        albumId: 100513852,
        gId: 101451214,
        gName: "蝴蝶精灵",
        gNum: "1482",
        gStatus: 6,
        isBuy: 1,
        ownerId: 10537822,
        ownerName: "西图",
        priceCny: 48886.0,
        tokenId: "1108605"
      }
    ],
    pageSize: 50,
    totalCount: 0,
    totalPage: 0
  },
  message: "success",
  msgId: "9452efcbd725474381a77f609e098aec",
  success: true
};

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

  fs.writeFile("./src/fenbu/data/js-data.js", `module.exports =  ${JSON.stringify(jsData)}`, () => {});
  fs.writeFile("./src/fenbu/data/html-data.js", `let lineData = ${JSON.stringify(jsData)}`, () => {});
  console.log("写入文件中...");
  sleep(10000);
}
