const data = require("./data/data-1.js").lineData;

var arr = [
  100000153, 100000154, 100000155, 100000156, 100000157, 100000158, 100000159,
  100000160, 100000161, 100000162, 100000163, 100000164, 100000165,
];
// {
//     albumId: 100000153,
//     gId: 100143149,
//     gName: "卡洛儿（Coral）",
//     gNum: "1",
//     gStatus: 1,
//     isBuy: 0,
//     ownerId: 10031408,
//     ownerName: "GfanX Inc.",
//     priceCny: 15000,
//     tokenId: "89210",
//   },
var line = [{ id: 100000111, hisData: [] }];

for (let j = 0; j < arr.length; j++) {
  const id = arr[j];
  let min = 0;
  for (let i = 0; i < data.length; i++) {
    const ele = data[i];
    if (id == ele.albumId) {
      if (min < ele.priceCny && ele.gStatus == 6) {
        min = ele.priceCny;
      }
      //   
      line.push({
        id,
        hisData: [],
      });
    }
  }
}
