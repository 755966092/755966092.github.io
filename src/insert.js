const ObjectsToCsv = require("objects-to-csv");







var a = [
  {
    albumId: 100513864,
    albumName: "iBox赛博猫狗系列",
    authorAvatar: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
    authorHeadImage: "/file/oss/test/image/nft-goods/e4445769f5614791addecb9040092f0c.png",
    authorId: 10133453,
    authorName: "iBox",
    authorSocialInfo: "",
    authorWalletInfo: "0x1cfcef83638368e84c048ad34b7b2a5132781d9b",
    blindAlbumId: "None",
    brandDesc: "全球领先的数字藏品电商平台",
    brandId: 100000015,
    brandName: "iBox",
    contractAddress: "",
    contractType: "None",
    gDesc: "原宇宙时代神秘组织CyberMeta特战队员，代号：Cibot。虽然外表看起来憨厚，但实际上身怀绝技，肌肉强壮，战力凶猛。善于团队作战，被誉为团队的“最佳拍档”。",
    gDetailUrls: "",
    gFeatures: [],
    gId: 101791884,
    gName: "iBox-赛博GOLDEN",
    gNum: "62852",
    gUrls: [{ size: 158915, width: 300, type: "image/jpeg", url: "/file/oss/test/image/nft-goods/df2c5d9875bb4154b9f403fcaff592d0.jpeg", height: 400 }],
    introduction:
      "未来是一个万物上链的数字世界，数字藏品应用不再局限于艺术品、收藏品，将会扩展到数字身份、版权许可、品牌授权等多个领域，iBox的使命是构建一个全球领先的数字藏品电商平台。",
    isBuy: 0,
    isWithdraw: 0,
    lockUid: 10370026,
    maxPrice: 100000,
    minPrice: 10,
    newResellAddress: "",
    onSale: 16,
    onSaleTime: 1651404089970,
    orderId: "9307875d9c3d4cef81bdd8b2bb80b491",
    orderStatus: "",
    origin: 0,
    ownerAvatar: "https://www.ibox.art/file/oss/test/image/portrait/3842ff4f575e44a0bd42db5a798ddd99.png?style=st",
    ownerId: 11020761,
    ownerName: "QEBJNr6u",
    ownerSocialInfo: "",
    ownerWalletInfo: "0x7389ae6b79e80e79957c0277a74b2b95d2c2fc05",
    price: "188",
    priceCny: "188",
    priceUnit: "",
    resell: 1,
    sellLimit: 100000,
    sellType: 3,
    soldNum: 67029,
    synthesis: 0,
    syntheticActivities: [],
    thirdContractAddress: "",
    thumbPic: "/file/oss/test/image/nft-goods/db0c1eebb2504967a9baf3c7b74632eb.jpg",
    thumbPic2: "/file/oss/test/image/nft-goods/f90d7b50f2d7425f8daaf3f1d16b7bc2.jpg",
    tokenAddress: "",
    tokenId: "1409473",
    vFlag: 1
  }
];

var l = [25000, 70000, 70000, 100000, 100000, 12000, 34000, 100000, 50000, 14991, 53000, 20000, 40000, 15000, 20000, 15000, 15000, 15000, 57000, 33844, 30000];

// 精灵宝贝 1113024 + 25000
// 功夫猫-1号 1154008 + 70000
// 功夫猫-2号 1220765 + 70000
// 赛博GOLDEN 1409473 + 100000
// 赛博Terrier 1299723 + 100000
// 赛博哈士奇 960971 + 12000
// 赛博加菲 925746 + 34000
// Sorry恐龙 467895 + 100000
// 赛博布偶 782411 + 50000
// 赛博蓝猫 750570 + 14991
// 赛博老虎 584839 + 53000
// 灵牛 188862 + 20000
// 玄牛 198192 + 40000
// 闪电  91095 + 15000
// iBox 002号空投版  56846 + 20000
// 魅紫葡萄 1080546 + 15000
// 蕃红李李 1065444 + 15000
// 大芒妖妖 1050426 + 15000
// 赛博边牧 665785 + 57000
// 赛博龙 	856366 + 33844
// 潮牛 323393 + 30000

var list = [];

for (let i = 0; i < a.length; i++) {
  const item = a[i];
  for (let j = 0; j < item.sellLimit; j++) {
    list.push({
      albumId: item.albumId,
      gId: item.gId,
      gName: item.gName,
      gNum: item.gNum,
      gStatus: item.gStatus,
      isBuy: item.isBuy,
      ownerId: item.ownerId,
      ownerName: item.ownerName,
      priceCny: item.priceCny,
      tokenId: (Number(item.tokenId) + j).toString()
    });
  }
}
const csv = new ObjectsToCsv(list);

(async () => {
  await csv.toDisk("./list-abc.csv", { append: true });
})();
