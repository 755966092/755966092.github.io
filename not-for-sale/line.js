// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/all-name-js");
const jsData = require("./data/js-data");

var data =  [
  {'albumId': 100513745, 'gId': 101017820, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '441', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 45999.0, 'tokenId': '748511'},
  {'albumId': 100513912, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513778, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513779, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513780, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513781, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100100115, 'gId': 100831665, 'gName': '金钱豹', 'gNum': '162', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 54444.0, 'tokenId': '519576'},
  {'albumId': 100513396, 'gId': 100836122, 'gName': '一見有喜 平安長樂', 'gNum': '597', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 17500.0, 'tokenId': '522115'},
  {'albumId': 100513397, 'gId': 100838712, 'gName': '一見有喜 平安長樂', 'gNum': '1187', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 16666.0, 'tokenId': '524355'},
  {'albumId': 100513731, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513736, 'gId': 101006306, 'gName': '月球探测器', 'gNum': '92', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 44555.0, 'tokenId': '737674'},
  {'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513741, 'gId': 101010578, 'gName': '功夫小子', 'gNum': '231', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 31999.0, 'tokenId': '742712'},
  {'albumId': 100513744, 'gId': 101016961, 'gName': '悟道小子', 'gNum': '56', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 36666.0, 'tokenId': '747450'},
  {'albumId': 100513727, 'gId': 100992250, 'gName': 'iBox-虎头小子', 'gNum': '72', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 97999.0, 'tokenId': '727638'},
  {'albumId': 100000128, 'gId': 100117980, 'gName': '《找自己》快乐版', 'gNum': '52', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 46111.0, 'tokenId': '59894'},
  {'albumId': 100513752, 'gId': 101037260, 'gName': '万国争霸-资源徽章', 'gNum': '111', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 49999.0, 'tokenId': '766686'},
  {'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513799, 'gId': 101218755, 'gName': '金瓜满载', 'gNum': '219', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 31100.0, 'tokenId': '908538'},
  {'albumId': 100513795, 'gId': 101216719, 'gName': '森林聚会', 'gNum': '33', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 41989.0, 'tokenId': '907790'},
  {'albumId': 100513796, 'gId': 101217321, 'gName': '异世界·海之城', 'gNum': '335', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 36666.0, 'tokenId': '907954'},
  {'albumId': 100099867, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000396, 'gId': 100714779, 'gName': 'iBox宣传小标兵', 'gNum': '672', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 16800.0, 'tokenId': '491106'},
  {'albumId': 100000190, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000139, 'gId': 100132273, 'gName': 'iBox-金牛献福', 'gNum': '1121', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 9200.0, 'tokenId': '74330'},
  {'albumId': 100000388, 'gId': 100601537, 'gName': 'iBox-战牛无双', 'gNum': '2430', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 9990.0, 'tokenId': '384111'},
  {'albumId': 100000394, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000383, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000384, 'gId': 100597470, 'gName': 'iBox-电牛放歌', 'gNum': '1546', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 8666.0, 'tokenId': '373603'},
  {'albumId': 100099573, 'gId': 100824727, 'gName': '集牛换虎-虎虎生威', 'gNum': '153', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 33888.0, 'tokenId': '513206'},
  {'albumId': 100513807, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513800, 'gId': 101220773, 'gName': '爱丽丝梦游仙境', 'gNum': '1637', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 75000.0, 'tokenId': '912590'},
  {'albumId': 100513802, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513803, 'gId': 101224651, 'gName': '思情郎 ', 'gNum': '115', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 47500.0, 'tokenId': '913604'},
  {'albumId': 100513806, 'gId': 101271491, 'gName': 'iBox-赛博司芬克斯', 'gNum': '555', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 16888.0, 'tokenId': '971526'},
  {'albumId': 100513822, 'gId': 101319349, 'gName': '五虎上将-马超', 'gNum': '247', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 79998.0, 'tokenId': '987259'},
  {'albumId': 100513845, 'gId': 101440293, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '761', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 47499.0, 'tokenId': '1097100'},
  {'albumId': 100000169, 'gId': 100167267, 'gName': '闪电（Flash）', 'gNum': '3131', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 6398.0, 'tokenId': '98244'},
  {'albumId': 100000118, 'gId': 100044441, 'gName': 'iBox 002号空投版', 'gNum': '319', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 12300.0, 'tokenId': '57162'},
  {'albumId': 100513844, 'gId': 101429687, 'gName': '魅紫萄萄', 'gNum': '5155', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7250.0, 'tokenId': '1091349'},
  {'albumId': 100513843, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513842, 'gId': 101407801, 'gName': '大芒妖妖', 'gNum': '13269', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7780.0, 'tokenId': '1058631'},
  {'albumId': 100513726, 'gId': 100937958, 'gName': 'iBox−赛博边牧', 'gNum': '2780', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1690.0, 'tokenId': '701420'},
  {'albumId': 100000335, 'gId': 100545714, 'gName': 'iBox-潮牛逐浪', 'gNum': '14961', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 3980.0, 'tokenId': '337001'},
  {'albumId': 100000254, 'gId': 100376209, 'gName': 'iBox-玄牛遂意', 'gNum': '5339', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2988.0, 'tokenId': '205111'},
  {'albumId': 100000253, 'gId': 100366361, 'gName': 'iBox-灵牛来喜', 'gNum': '15491', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 3760.0, 'tokenId': '191485'},
  {'albumId': 100513724, 'gId': 100899549, 'gName': 'iBox-CyberTiger', 'gNum': '38071', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1778.0, 'tokenId': '617277'},
  {'albumId': 100513750, 'gId': 101034599, 'gName': 'iBox−赛博蓝猫', 'gNum': '13329', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4019.0, 'tokenId': '764178'},
  {'albumId': 100513774, 'gId': 101103092, 'gName': 'iBox−赛博布偶', 'gNum': '21861', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2199.0, 'tokenId': '826993'},
  {'albumId': 100000393, 'gId': 100656800, 'gName': 'I‘m Sorry', 'gNum': '53193', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1300.0, 'tokenId': '437406'},
  {'albumId': 100513804, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513805, 'gId': 101265380, 'gName': 'iBox-赛博哈士奇', 'gNum': '6444', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5199.0, 'tokenId': '963950'},
  {'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513813, 'gId': 101288050, 'gName': '玫瑰玫瑰我爱你', 'gNum': '262', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 93377.0, 'tokenId': '1003713'},
  {'albumId': 100513814, 'gId': 101288545, 'gName': '夜上海', 'gNum': '157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 27999.0, 'tokenId': '991504'},
  {'albumId': 100513815, 'gId': 101289687, 'gName': '如果没有你', 'gNum': '399', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 28788.0, 'tokenId': '1002914'},
  {'albumId': 100513816, 'gId': 101293280, 'gName': '俏冤家', 'gNum': '3092', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7300.0, 'tokenId': '1003492'},
  {'albumId': 100513820, 'gId': 101315961, 'gName': '好春宵', 'gNum': '5253', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7186.0, 'tokenId': '1111060'},
  {'albumId': 100513818, 'gId': 101304476, 'gName': '蔷薇处处开', 'gNum': '442', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7298.0, 'tokenId': '989164'},
  {'albumId': 100513759, 'gId': 101040441, 'gName': '伊爱娃（IARA）', 'gNum': '678', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 69998.0, 'tokenId': '1242364'},
  {'albumId': 100513761, 'gId': 101041039, 'gName': '佛里奥索（FURIOSA）', 'gNum': '556', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 23333.0, 'tokenId': '891573'},
  {'albumId': 100513762, 'gId': 101041804, 'gName': '贝贝（BEBE）', 'gNum': '571', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 24111.0, 'tokenId': '892331'},
  {'albumId': 100513763, 'gId': 101043408, 'gName': '普普拉（PURPURA）', 'gNum': '1425', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10045.0, 'tokenId': '890837'},
  {'albumId': 100513764, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513765, 'gId': 101046921, 'gName': '布兰卡（BRANCA）', 'gNum': '826', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 9999.0, 'tokenId': '782297'},
  {'albumId': 100513766, 'gId': 101049474, 'gName': '紫月（MINGUANTE）', 'gNum': '1323', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 9400.0, 'tokenId': '837949'},
  {'albumId': 100513767, 'gId': 101051521, 'gName': '橙日（CRESCENTE）', 'gNum': '1314', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 9590.0, 'tokenId': '835734'},
  {'albumId': 100513768, 'gId': 101054085, 'gName': '蓝日（NOVA）', 'gNum': '1822', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10887.0, 'tokenId': '910911'},
  {'albumId': 100513769, 'gId': 101055490, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1171', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 9668.0, 'tokenId': '834275'},
  {'albumId': 100513770, 'gId': 101057741, 'gName': '维洛（VELOZ）', 'gNum': '1366', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 9499.0, 'tokenId': '838257'},
  {'albumId': 100513771, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513712, 'gId': 100841476, 'gName': '林黛玉', 'gNum': '698', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 70000.0, 'tokenId': '1414857'},
  {'albumId': 100513713, 'gId': 100841514, 'gName': '薛宝钗', 'gNum': '36', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 30059.0, 'tokenId': '644754'},
  {'albumId': 100513714, 'gId': 100842699, 'gName': '史湘云', 'gNum': '471', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 28313.0, 'tokenId': '664592'},
  {'albumId': 100513715, 'gId': 100845026, 'gName': '秦可卿', 'gNum': '2048', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13799.0, 'tokenId': '1778599'},
  {'albumId': 100513716, 'gId': 100846039, 'gName': '王熙凤', 'gNum': '1006', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13500.0, 'tokenId': '661806'},
  {'albumId': 100513717, 'gId': 100847876, 'gName': '贾巧姐', 'gNum': '788', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14889.0, 'tokenId': '659320'},
  {'albumId': 100513718, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513719, 'gId': 100851328, 'gName': '贾惜春', 'gNum': '130', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13000.0, 'tokenId': '644863'},
  {'albumId': 100513720, 'gId': 100854721, 'gName': '贾迎春', 'gNum': '1467', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 15850.0, 'tokenId': '725038'},
  {'albumId': 100513721, 'gId': 100856433, 'gName': '贾元春', 'gNum': '1123', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14500.0, 'tokenId': '662835'},
  {'albumId': 100513722, 'gId': 100858339, 'gName': '李纨', 'gNum': '973', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14665.0, 'tokenId': '661661'},
  {'albumId': 100513723, 'gId': 100860871, 'gName': '妙玉', 'gNum': '1449', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14888.0, 'tokenId': '723463'},
  {'albumId': 100092612, 'gId': 100754415, 'gName': '经典熊', 'gNum': '163', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 70888.0, 'tokenId': '498916'},
  {'albumId': 100092613, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100092614, 'gId': 100755590, 'gName': '精灵熊', 'gNum': '380', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 24580.0, 'tokenId': '501337'},
  {'albumId': 100092616, 'gId': 100756666, 'gName': '摇滚熊', 'gNum': '851', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7999.0, 'tokenId': '534593'},
  {'albumId': 100092617, 'gId': 100757195, 'gName': '美女熊', 'gNum': '331', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 8990.0, 'tokenId': '497598'},
  {'albumId': 100092618, 'gId': 100758178, 'gName': '可可熊', 'gNum': '267', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 8300.0, 'tokenId': '496191'},
  {'albumId': 100092619, 'gId': 100759093, 'gName': '迪奇克熊', 'gNum': '135', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 8300.0, 'tokenId': '494799'},
  {'albumId': 100092620, 'gId': 100760073, 'gName': '剑士熊', 'gNum': '65', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7950.0, 'tokenId': '496323'},
  {'albumId': 100092622, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100092624, 'gId': 100762412, 'gName': '斗士熊', 'gNum': '308', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 8000.0, 'tokenId': '496817'},
  {'albumId': 100092625, 'gId': 100763277, 'gName': '军团熊', 'gNum': '124', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 8888.0, 'tokenId': '494576'},
  {'albumId': 100092627, 'gId': 100764663, 'gName': '半机甲熊', 'gNum': '465', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 8350.0, 'tokenId': '499262'},
  {'albumId': 100092628, 'gId': 100765887, 'gName': '机器人熊', 'gNum': '641', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9211.0, 'tokenId': '501302'},
  {'albumId': 100000317, 'gId': 100490697, 'gName': '同道大叔', 'gNum': '478', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 80000.0, 'tokenId': '519783'},
  {'albumId': 100000316, 'gId': 100489589, 'gName': '大魔术师', 'gNum': '369', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 33333.0, 'tokenId': '259840'},
  {'albumId': 100000315, 'gId': 100488469, 'gName': '奇幻马戏团', 'gNum': '248', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 28000.0, 'tokenId': '257770'},
  {'albumId': 100000303, 'gId': 100468660, 'gName': '白羊座：加利斯', 'gNum': '764', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 14888.0, 'tokenId': '346529'},
  {'albumId': 100000318, 'gId': 100475327, 'gName': '金牛座：牛丢丢', 'gNum': '171', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 17166.0, 'tokenId': '255930'},
  {'albumId': 100000319, 'gId': 100476921, 'gName': '双子座：猫院长', 'gNum': '313', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 14300.0, 'tokenId': '256575'},
  {'albumId': 100000306, 'gId': 100472856, 'gName': '巨蟹座：蛋丁', 'gNum': '604', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 14888.0, 'tokenId': '261151'},
  {'albumId': 100000307, 'gId': 100474634, 'gName': '狮子座：狮总裁', 'gNum': '930', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 16000.0, 'tokenId': '352479'},
  {'albumId': 100000308, 'gId': 100479503, 'gName': '处女座：矮豆豆', 'gNum': '1443', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 15600.0, 'tokenId': '1793312'},
  {'albumId': 100000309, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000310, 'gId': 100481902, 'gName': '天蝎座：雷猴', 'gNum': '938', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 15888.0, 'tokenId': '352417'},
  {'albumId': 100000311, 'gId': 100483138, 'gName': '射手座：格雷', 'gNum': '722', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 14000.0, 'tokenId': '316636'},
  {'albumId': 100000312, 'gId': 100483987, 'gName': '摩羯座：奋斗熊', 'gNum': '119', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 15777.0, 'tokenId': '253758'},
  {'albumId': 100000313, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000314, 'gId': 100487811, 'gName': '双鱼座：小超鱼', 'gNum': '1041', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 14887.0, 'tokenId': '353969'},
  {'albumId': 100000233, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000234, 'gId': 100267375, 'gName': '八分光轮', 'gNum': '156', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 38888.0, 'tokenId': '241443'},
  {'albumId': 100000235, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000236, 'gId': 100268706, 'gName': '奥特意念光线', 'gNum': '289', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 38888.0, 'tokenId': '245216'},
  {'albumId': 100000237, 'gId': 100269645, 'gName': '奥特屏障', 'gNum': '629', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14500.0, 'tokenId': '493470'},
  {'albumId': 100000238, 'gId': 100270280, 'gName': '空中撞击战法', 'gNum': '506', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13999.0, 'tokenId': '254958'},
  {'albumId': 100000239, 'gId': 100270906, 'gName': '奥特念力', 'gNum': '374', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13886.0, 'tokenId': '244311'},
  {'albumId': 100000240, 'gId': 100271472, 'gName': '奥特水流', 'gNum': '182', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13555.0, 'tokenId': '241493'},
  {'albumId': 100000241, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000242, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000243, 'gId': 100274189, 'gName': '巨大化能力', 'gNum': '625', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 12997.0, 'tokenId': '493030'},
  {'albumId': 100000244, 'gId': 100275057, 'gName': '碎裂光线', 'gNum': '735', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13000.0, 'tokenId': '773501'},
  {'albumId': 100000245, 'gId': 100275257, 'gName': '奥特眼光线', 'gNum': '177', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13999.0, 'tokenId': '241282'},
  {'albumId': 100000246, 'gId': 100276214, 'gName': '超级过肩摔', 'gNum': '376', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13998.0, 'tokenId': '244916'},
  {'albumId': 100000247, 'gId': 100276838, 'gName': '防御能力', 'gNum': '242', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 12666.0, 'tokenId': '242881'},
  {'albumId': 100000248, 'gId': 100277763, 'gName': '光线白刃取', 'gNum': '409', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14588.0, 'tokenId': '245980'},
  {'albumId': 100000249, 'gId': 100278644, 'gName': '奥特空中意念捕捉', 'gNum': '532', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 12999.0, 'tokenId': '350514'},
  {'albumId': 100000179, 'gId': 100186682, 'gName': '鸣人VS佐助', 'gNum': '171', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 48888.0, 'tokenId': '105828'},
  {'albumId': 100000178, 'gId': 100186260, 'gName': '奇拉比&鸣人', 'gNum': '149', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 41500.0, 'tokenId': '105101'},
  {'albumId': 100000171, 'gId': 100179890, 'gName': '宇智波佐助', 'gNum': '744', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14000.0, 'tokenId': '110565'},
  {'albumId': 100000172, 'gId': 100180646, 'gName': '旗木卡卡西', 'gNum': '505', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14200.0, 'tokenId': '106947'},
  {'albumId': 100000173, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000174, 'gId': 100182356, 'gName': '波风水门', 'gNum': '225', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 15788.0, 'tokenId': '104169'},
  {'albumId': 100000175, 'gId': 100183163, 'gName': '第七班', 'gNum': '37', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 20666.0, 'tokenId': '102831'},
  {'albumId': 100000176, 'gId': 100184690, 'gName': '鸣人VS我爱罗', 'gNum': '569', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14766.0, 'tokenId': '107448'},
  {'albumId': 100000177, 'gId': 100185788, 'gName': '漩涡鸣人', 'gNum': '672', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 15099.0, 'tokenId': '108465'},
  {'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000154, 'gId': 100143237, 'gName': '斯巴达（Sparta）', 'gNum': '31', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 88000.0, 'tokenId': '89732'},
  {'albumId': 100000155, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 75000.0, 'tokenId': '89250'},
  {'albumId': 100000157, 'gId': 100143546, 'gName': '麦克思（Max）', 'gNum': '40', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 45888.0, 'tokenId': '89550'},
  {'albumId': 100000158, 'gId': 100143827, 'gName': '萨德（Sade）', 'gNum': '139', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 35000.0, 'tokenId': '90550'},
  {'albumId': 100000159, 'gId': 100143876, 'gName': '露娜（Luna）', 'gNum': '6', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38666.0, 'tokenId': '89243'},
  {'albumId': 100000160, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100000161, 'gId': 100144390, 'gName': '吉娜（Gina）', 'gNum': '156', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.0, 'tokenId': '100113'},
  {'albumId': 100000162, 'gId': 100144544, 'gName': '桑迪（Sunday）', 'gNum': '128', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 45678.0, 'tokenId': '90479'},
  {'albumId': 100000163, 'gId': 100144779, 'gName': '格若瑞娅（Gloria）', 'gNum': '181', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 49999.0, 'tokenId': '909877'},
  {'albumId': 100000164, 'gId': 100144782, 'gName': '艾伯纳（Abner）', 'gNum': '2', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 35000.0, 'tokenId': '89267'},
  {'albumId': 100000165, 'gId': 100145124, 'gName': '泡泡（Bubble）', 'gNum': '162', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 33999.0, 'tokenId': '102214'},
  {'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513784, 'gId': 101198863, 'gName': 'iBox-CyberMouse', 'gNum': '9765', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4100.0, 'tokenId': '881991'},
  {'albumId': 100000323, 'gId': 100514818, 'gName': '张国荣公益数字藏品', 'gNum': '20', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 55000.0, 'tokenId': '660124'},
  {'albumId': 100513824, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
  {'albumId': 100513865, 'gId': 101725358, 'gName': 'Cece-plants', 'gNum': '326', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 33900.0, 'tokenId': '1346016'},
  {'albumId': 100513868, 'gId': 101833635, 'gName': 'Cece-cotton', 'gNum': '3203', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 34996.0, 'tokenId': '1418484'},
  ]

  
  

var handleData = data;

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
console.log("写入");
fs.writeFile(
  "./not-for-sale/data/DVBlkS2V8vEaFnPkH7P5zf4Z.js",
  `var time = ${JSON.stringify(jsData.time)};var lineData = ${JSON.stringify(
    shangyici
  )}`,
  () => {console.log("写入成功");}
);
fs.writeFile(
  "./not-for-sale/data/js-data.js",
  `var time = ${JSON.stringify(
    jsData.time
  )}; module.exports = { time:time,lineData: ${JSON.stringify(shangyici)}}`,
  () => {console.log("写入成功");}
);
