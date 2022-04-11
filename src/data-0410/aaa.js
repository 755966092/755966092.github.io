const data = require("./data-100513771");

// {
//     albumId: 100513770,
//     gId: 101058431,
//     gName: "维洛（VELOZ）",
//     gNum: "2056",
//     gStatus: 2,
//     isBuy: 0,
//     ownerId: 10453154,
//     ownerName: "Francisco Terra",
//     priceCny: 99,
//     tokenId: "",
//   },

var arr = [
  100513759, 100513761, 100513762, 100513763, 100513764, 100513765, 100513766,
  100513767, 100513768, 100513769, 100513770, 100513771,
];
var obj = {}
arr.forEach((item) => {
  for (let i = 0; i < data.lineData.length; i++) {
    const ele = data.lineData[i]
    if (ele.albumId == item) {
        if (ele.gStatus == 2) {
            obj[ele.gName] = ele.gNum - 1;
            break;
        }
    }
  }
});
console.log(obj);
