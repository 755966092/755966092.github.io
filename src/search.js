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
var arr = [
  100513722, 100513723, 100513721, 100513720, 100513719, 100513718, 100513717,
  100513716, 100513715, 100513714, 100513713, 100513712
];

// var asd = [
//     100513798
// ];

var asd = [
  100099581, 100099582, 100099599, 100000395, 100000378, 100513734, 100513733,
  100513748, 100513745, 100513777, 100513778, 100513779, 100513780, 100513781,
  100100115, 100513396, 100513397, 100513731, 100513736, 100513737, 100513741,
  100513744, 100513727, 100000169, 100000128, 100000118, 100513752, 100513756,
  100513758, 100513790, 100513798, 100513799, 100513795, 100513796, 100000120,
  100513726, 100513782, 100099867, 100000396, 100000335, 100000254, 100000253,
  100000190, 100000139, 100000388, 100000394, 100000384, 100099573, 100513724,
  100000393, 100513750, 100513774, 100513800, 100513802, 100513803, 100513804,
  100513805, 100513806, 100513819, 100513822
];
// 100513831
var asd = [
  100099581, 100099582, 100099599, 100000395, 100000378, 100513734, 100513733,
  100513748, 100513745, 100513777, 100513778, 100513779, 100513780, 100513781,
  100100115, 100513396, 100513397, 100513731, 100513736, 100513737, 100513741,
  100513744, 100513727, 100000169, 100000128, 100000118, 100513752, 100513756,
  100513758, 100513790, 100513798, 100513799, 100513795, 100513796, 100000120,
  100513726, 100513782, 100099867, 100000396, 100000335, 100000254, 100000253,
  100000190, 100000139, 100000388, 100000394, 100000384, 100099573, 100513724,
  100000393, 100513750, 100513774, 100513800, 100513802, 100513803, 100513804,
  100513805, 100513806, 100513819, 100513822, 100513844, 100513843, 100513842,
  100513840, 100513839, 100513836, 100513835, 100513834, 100513841, 100513834,
  100513830, 100513831, 100513829, 100513825, 100513819, 100513810, 100513809,
  100513808, 100513801, 100513794, 100513793, 100513792, 100513791, 100513788,
  100513786, 100513785, 100513784, 100513775, 100513757, 100513747, 100513755,
  100513751, 100513749, 100513746, 100513743, 100513740, 100513739, 100513728,
  100513729, 100513699, 100513691, 100513692, 100513693, 100513392, 100513393,
  100513394, 100098433, 100098435, 100098436, 100098437, 100098438, 100098439,
  100098440, 100098441, 100098442, 100098443, 100098444, 100098448, 100097452,
  100097453, 100090982, 100090988, 100000387, 100000385, 100000386, 100000379,
  100000381, 100000349, 100000374, 100000350, 100000352, 100000358, 100000369,
  100000364, 100000372, 100000366, 100000367, 100000365, 100000373, 100000346,
  100000347, 100000344, 100000345, 100000338, 100000337, 100000336, 100000332,
  100000331, 100000330, 100000322, 100000275, 100000276, 100000273, 100000274,
  100000266, 100000267, 100000268, 100000264, 100000265, 100000255, 100000256,
  100000257, 100000258, 100000259, 100000207, 100000208, 100000203, 100000204,
  100000205, 100000200, 100000201, 100000202, 100000198, 100000199, 100000196,
  100000197, 100000193, 100000194, 100000187, 100000189, 100000170, 100000122,
  100000129, 100000130, 100000131, 100000132, 100000133, 100000134, 100000135,
  100000137, 100000125, 100000126, 100000127, 100000121, 100000119, 100000120,
  100000112, 100000113, 100000114, 100000117, 100000111, 100000096, 100000097,
  100000098, 100000099, 100000102, 100000105, 100000106, 100513812, 100513813,
  100513814, 100513815, 100513816, 100513820, 100513818, 100513759, 100513761,
  100513762, 100513763, 100513764, 100513765, 100513766, 100513767, 100513768,
  100513769, 100513770, 100513771, 100513722, 100513723, 100513721, 100513720,
  100513719, 100513718, 100513717, 100513716, 100513715, 100513714, 100513713,
  100513712, 100092628, 100092612, 100092613, 100092614, 100092617, 100092618,
  100092616, 100092619, 100092620, 100092622, 100092624, 100092625, 100092627,
  100000303, 100000304, 100000305, 100000306, 100000307, 100000308, 100000309,
  100000310, 100000311, 100000312, 100000313, 100000314, 100000315, 100000316,
  100000317, 100000233, 100000234, 100000235, 100000236, 100000237, 100000238,
  100000239, 100000240, 100000241, 100000242, 100000243, 100000244, 100000245,
  100000246, 100000247, 100000248, 100000249, 100000180, 100000179, 100000178,
  100000171, 100000172, 100000173, 100000174, 100000175, 100000176, 100000177,
  100000153, 100000154, 100000155, 100000156, 100000157, 100000158, 100000159,
  100000160, 100000161, 100000162, 100000163, 100000164, 100000165, 100513845,
  100513847, 100513848, 100513850, 100513851, 100513852, 100513853
];
var all = {
  100099581: "《山海经》-蚩尤",
  100099582: "《山海经》-呲铁",
  100099599: "《山海经》-狡",
  100000395: "《山海经》-狰",
  100000378: "《山海经》-混沌",
  100513734: "《山海经》-何罗鱼",
  100513733: "《山海经》-雷神",
  100513748: "《山海经》-钦原",
  100513745: "火与工匠之神-赫菲斯托斯",
  100513777: "神王-宙斯",
  100513778: "冥王-哈迪斯",
  100513779: "智慧女神-雅典娜",
  100513780: "狩猎女神-阿尔忒弥斯",
  100513781: "太阳神-阿波罗",
  100100115: "金钱豹",
  100513396: "一見有喜 平安長樂1",
  100513397: "一見有喜 平安長樂2",
  100513731: "未来太空之十二大事件",
  100513736: "月球探测器",
  100513737: "暴富有道(金福)",
  100513741: "功夫小子",
  100513744: "悟道小子",
  100513727: "虎头小子",
  100000169: "闪电",
  100000128: "《找自己》快乐版",
  100000118: "iBox 002号空投版",
  100513752: "万国争霸-资源徽章",
  100513756: "Love-001",
  100513758: "潇湘咖啡",
  100513790: "霸王别姬",
  100513798: "秋色斑斓",
  100513799: "金瓜满载",
  100513795: "森林聚会",
  100513796: "异世界·海之城",
  100000120: "GGAC 探索地球起源传说",
  100513726: "iBox−赛博边牧",
  100513782: "iBox-赛博龙",
  100099867: "泰迪熊-空投版",
  100000396: "iBox宣传小标兵",
  100000335: "iBox-潮牛逐浪",
  100000254: "iBox-玄牛遂意",
  100000253: "iBox-灵牛来喜",
  100000190: "iBox-神牛降瑞",
  100000139: "iBox-金牛献福",
  100000388: "iBox-战牛无双",
  100000394: "iBox-翔牛摘星",
  100000384: "iBox-电牛放歌",
  100099573: "集牛换虎-虎虎生威"
};
/**
 * 100099581 《山海经》-蚩尤
 * 100099582 《山海经》-呲铁
 * 100099599 《山海经》-狡
 * 100000395 《山海经》-狰
 * 100000378 《山海经》-混沌
 * 100513734 《山海经》-何罗鱼
 * 100513733 《山海经》-雷神
 * 100513748 《山海经》-钦原
 *
 * 100513745 火与工匠之神-赫菲斯托斯
 * 100513777 神王-宙斯
 * 100513778 冥王-哈迪斯
 * 100513779 智慧女神-雅典娜
 * 100513780 狩猎女神-阿尔忒弥斯
 * 100513781 太阳神-阿波罗
 *
 *
 * 100100115 金钱豹
 *
 * 100513396 一見有喜 平安長樂1
 * 100513397 一見有喜 平安長樂2
 *
 * 100513731 未来太空之十二大事件
 * 100513736 月球探测器
 *
 * 100513737 暴富有道(金福)
 *
 * 100513741 功夫小子
 * 100513744 悟道小子
 * 100513727 虎头小子
 * 
 * 100000169 闪电
 * 100000128 《找自己》快乐版
 * 100000118 iBox 002号空投版
 * 
 * 100513752 万国争霸-资源徽章
 * 100513756 Love-001
 * 100513758 潇湘咖啡
 * 100513790 霸王别姬
 * 
 * 100513798 秋色斑斓
 * 100513799 金瓜满载
 * 100513795 森林聚会
 * 100513796 异世界·海之城
 *
 * 100000120 GGAC 探索地球起源传说
 *
 * 100513726 iBox−赛博边牧
 * 100513782 iBox-赛博龙
 * 100099867 泰迪熊-空投版
 * 100513750 iBox−赛博蓝猫
 * 100513774 iBox−赛博布偶
 * 100513724 iBox-CyberTiger
 * 100000393 I‘m Sorry

 * 100000396 iBox宣传小标兵
 * 100000335 iBox-潮牛逐浪
 * 100000254 iBox-玄牛遂意
 * 100000253 iBox-灵牛来喜
 * 100000190 iBox-神牛降瑞
 * 100000139 iBox-金牛献福
 * 100000388 iBox-战牛无双
 * 100000394 iBox-翔牛摘星
 * 100000384 iBox-电牛放歌
 * 100099573 集牛换虎-虎虎生威
 *
 *
 */

//  gStatus: 16, 锁定中
function getUrl(id, page) {
  return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=${page}&pageSize=200&albumId=${id}&onSale=1&order=1`;
}

// function getUrl(id) {
//   return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductDetail?albumId=${id}`;
// }
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
          link: currentData.link
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
      link: currentData.link
    });
  }

  if (arrNum < asd.length - 1) {
    arrNum += 1;
    let ranNum = Math.floor(Math.random() * (16000 - 7000 + 1) + 7000);
    console.log(`当前产品${arrNum}: ${currentData.name}`);
    await sleep(ranNum);
    crawler.c.queue([
      {
        uri: getUrl(asd[arrNum], page),
        jQuery: false
      }
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
    jQuery: false
  }
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
          "地址"
        ]
      ]
    }
  ];

  params.forEach((item) => {
    data[0].data.push([
      item.name,
      item.priceCny,
      item.total,
      item.albumName,
      item.author,
      item.authentication,
      item.link
    ]);
  });

  return data;
}
