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

var data = {}
  
  
  
  

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