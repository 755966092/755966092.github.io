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
  
{'albumId': 100513745, 'gId': 101017491, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '112', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 42888.0, 'tokenId': '748303'},
{'albumId': 100513912, 'gId': 102333644, 'gName': 'Cece-roses', 'gNum': '1572', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': 'Ceceplants', 'priceCny': 97777.0, 'tokenId': '1791233'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513779, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513780, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513781, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100100115, 'gId': 100831527, 'gName': '金钱豹', 'gNum': '24', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 54888.0, 'tokenId': '519449'},
{'albumId': 100513396, 'gId': 100836573, 'gName': '一見有喜 平安長樂', 'gNum': '1048', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 18999.0, 'tokenId': '522557'},
{'albumId': 100513397, 'gId': 100838698, 'gName': '一見有喜 平安長樂', 'gNum': '1173', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 18088.0, 'tokenId': '524342'},
{'albumId': 100513731, 'gId': 101001422, 'gName': '未来太空之十二大事件', 'gNum': '289', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 57888.0, 'tokenId': '735698'},
{'albumId': 100513736, 'gId': 101007186, 'gName': '月球探测器', 'gNum': '972', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 39999.0, 'tokenId': '738661'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010731, 'gName': '功夫小子', 'gNum': '384', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 36666.0, 'tokenId': '743031'},
{'albumId': 100513744, 'gId': 101017271, 'gName': '悟道小子', 'gNum': '366', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 36000.0, 'tokenId': '747822'},
{'albumId': 100513727, 'gId': 100992250, 'gName': 'iBox-虎头小子', 'gNum': '72', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 97999.0, 'tokenId': '727638'},
{'albumId': 100000128, 'gId': 100117987, 'gName': '《找自己》快乐版', 'gNum': '59', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 48522.0, 'tokenId': '59873'},
{'albumId': 100513752, 'gId': 101037279, 'gName': '万国争霸-资源徽章', 'gNum': '130', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 48500.0, 'tokenId': '766628'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 101218953, 'gName': '金瓜满载', 'gNum': '417', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 35300.0, 'tokenId': '908663'},
{'albumId': 100513795, 'gId': 101216756, 'gName': '森林聚会', 'gNum': '70', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 41000.0, 'tokenId': '907831'},
{'albumId': 100513796, 'gId': 101217059, 'gName': '异世界·海之城', 'gNum': '73', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 37500.0, 'tokenId': '908286'},
{'albumId': 100099867, 'gId': 100829702, 'gName': '泰迪熊-空投版', 'gNum': '3484', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7900.0, 'tokenId': '517828'},
{'albumId': 100000396, 'gId': 100715337, 'gName': 'iBox宣传小标兵', 'gNum': '1230', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 17500.0, 'tokenId': '491817'},
{'albumId': 100000190, 'gId': 100227883, 'gName': 'iBox-神牛降瑞', 'gNum': '2695', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 10666.0, 'tokenId': '113498'},
{'albumId': 100000139, 'gId': 100132186, 'gName': 'iBox-金牛献福', 'gNum': '1034', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 10950.0, 'tokenId': '75626'},
{'albumId': 100000388, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000394, 'gId': 100710793, 'gName': 'iBox-翔牛摘星', 'gNum': '7186', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 6600.0, 'tokenId': '487441'},
{'albumId': 100000383, 'gId': 100595547, 'gName': 'iBox-电牛放歌', 'gNum': '1623', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 9479.0, 'tokenId': '371544'},
{'albumId': 100000384, 'gId': 100596207, 'gName': 'iBox-电牛放歌', 'gNum': '283', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 9500.0, 'tokenId': '372245'},
{'albumId': 100099573, 'gId': 100824861, 'gName': '集牛换虎-虎虎生威', 'gNum': '287', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 37500.0, 'tokenId': '513337'},
{'albumId': 100513807, 'gId': 101275675, 'gName': '大鱼', 'gNum': '1739', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 75400.0, 'tokenId': '975967'},
{'albumId': 100513800, 'gId': 101219678, 'gName': '爱丽丝梦游仙境', 'gNum': '542', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 77777.0, 'tokenId': '911398'},
{'albumId': 100513802, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513803, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513806, 'gId': 101273750, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2814', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 17500.0, 'tokenId': '973232'},
{'albumId': 100513822, 'gId': 101319501, 'gName': '五虎上将-马超', 'gNum': '399', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 76000.0, 'tokenId': '987619'},
{'albumId': 100513845, 'gId': 101439559, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '27', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 39888.0, 'tokenId': '1096713'},
{'albumId': 100000169, 'gId': 100171258, 'gName': '闪电（Flash）', 'gNum': '7122', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 7286.0, 'tokenId': '96748'},
{'albumId': 100000118, 'gId': 100044633, 'gName': 'iBox 002号空投版', 'gNum': '511', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 13888.0, 'tokenId': '57354'},
{'albumId': 100513844, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513843, 'gId': 101414616, 'gName': '蕃红李李', 'gNum': '5084', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8080.0, 'tokenId': '1069613'},
{'albumId': 100513842, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513726, 'gId': 100991845, 'gName': 'iBox−赛博边牧', 'gNum': '56667', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2095.0, 'tokenId': '700810'},
{'albumId': 100000335, 'gId': 100541514, 'gName': 'iBox-潮牛逐浪', 'gNum': '10761', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 4795.0, 'tokenId': '333165'},
{'albumId': 100000254, 'gId': 100384056, 'gName': 'iBox-玄牛遂意', 'gNum': '13186', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2966.0, 'tokenId': '211984'},
{'albumId': 100000253, 'gId': 100360830, 'gName': 'iBox-灵牛来喜', 'gNum': '9960', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 4400.0, 'tokenId': '185560'},
{'albumId': 100513724, 'gId': 100904752, 'gName': 'iBox-CyberTiger', 'gNum': '43274', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2088.0, 'tokenId': '636121'},
{'albumId': 100513750, 'gId': 101035619, 'gName': 'iBox−赛博蓝猫', 'gNum': '14349', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4849.0, 'tokenId': '763425'},
{'albumId': 100513774, 'gId': 101094153, 'gName': 'iBox−赛博布偶', 'gNum': '12922', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2740.0, 'tokenId': '797430'},
{'albumId': 100000393, 'gId': 100633355, 'gName': 'I‘m Sorry', 'gNum': '29748', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1575.0, 'tokenId': '414324'},
{'albumId': 100513804, 'gId': 101244158, 'gName': 'iBox-赛博加菲', 'gNum': '19222', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2900.0, 'tokenId': '942666'},
{'albumId': 100513805, 'gId': 101262881, 'gName': 'iBox-赛博哈士奇', 'gNum': '3945', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5599.0, 'tokenId': '962256'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101288155, 'gName': '玫瑰玫瑰我爱你', 'gNum': '367', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 78888.0, 'tokenId': '1104237'},
{'albumId': 100513814, 'gId': 101288602, 'gName': '夜上海', 'gNum': '214', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 29999.0, 'tokenId': '992947'},
{'albumId': 100513815, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513816, 'gId': 101292391, 'gName': '俏冤家', 'gNum': '2203', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7900.0, 'tokenId': '995070'},
{'albumId': 100513820, 'gId': 101310780, 'gName': '好春宵', 'gNum': '72', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7977.0, 'tokenId': '988010'},
{'albumId': 100513818, 'gId': 101310360, 'gName': '蔷薇处处开', 'gNum': '6326', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7890.0, 'tokenId': '1776307'},
{'albumId': 100513759, 'gId': 101040441, 'gName': '伊爱娃（IARA）', 'gNum': '678', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 75555.0, 'tokenId': '1242364'},
{'albumId': 100513761, 'gId': 101040781, 'gName': '佛里奥索（FURIOSA）', 'gNum': '298', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 22999.0, 'tokenId': '781822'},
{'albumId': 100513762, 'gId': 101041794, 'gName': '贝贝（BEBE）', 'gNum': '561', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 23500.0, 'tokenId': '891956'},
{'albumId': 100513763, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513764, 'gId': 101044932, 'gName': '拉万达（LAVANDA）', 'gNum': '893', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 12222.0, 'tokenId': '806447'},
{'albumId': 100513765, 'gId': 101048004, 'gName': '布兰卡（BRANCA）', 'gNum': '1909', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 11800.0, 'tokenId': '1105287'},
{'albumId': 100513766, 'gId': 101048731, 'gName': '紫月（MINGUANTE）', 'gNum': '580', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10886.0, 'tokenId': '779580'},
{'albumId': 100513767, 'gId': 101050919, 'gName': '橙日（CRESCENTE）', 'gNum': '712', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10999.0, 'tokenId': '780205'},
{'albumId': 100513768, 'gId': 101052538, 'gName': '蓝日（NOVA）', 'gNum': '275', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10000.0, 'tokenId': '776233'},
{'albumId': 100513769, 'gId': 101055875, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1556', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10336.0, 'tokenId': '892115'},
{'albumId': 100513770, 'gId': 101057506, 'gName': '维洛（VELOZ）', 'gNum': '1131', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10650.0, 'tokenId': '833948'},
{'albumId': 100513771, 'gId': 101059238, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '807', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 10248.0, 'tokenId': '781723'},
{'albumId': 100513712, 'gId': 100841472, 'gName': '林黛玉', 'gNum': '694', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 70000.0, 'tokenId': '1231490'},
{'albumId': 100513713, 'gId': 100842208, 'gName': '薛宝钗', 'gNum': '730', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 30999.0, 'tokenId': '773449'},
{'albumId': 100513714, 'gId': 100842315, 'gName': '史湘云', 'gNum': '87', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 28499.0, 'tokenId': '654135'},
{'albumId': 100513715, 'gId': 100844481, 'gName': '秦可卿', 'gNum': '1503', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 15555.0, 'tokenId': '727200'},
{'albumId': 100513716, 'gId': 100845813, 'gName': '王熙凤', 'gNum': '780', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13555.0, 'tokenId': '659351'},
{'albumId': 100513717, 'gId': 100848247, 'gName': '贾巧姐', 'gNum': '1159', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14998.0, 'tokenId': '663408'},
{'albumId': 100513718, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513719, 'gId': 100851767, 'gName': '贾惜春', 'gNum': '569', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 16999.0, 'tokenId': '657970'},
{'albumId': 100513720, 'gId': 100854160, 'gName': '贾迎春', 'gNum': '906', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 17288.0, 'tokenId': '660614'},
{'albumId': 100513721, 'gId': 100855676, 'gName': '贾元春', 'gNum': '366', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13550.0, 'tokenId': '655099'},
{'albumId': 100513722, 'gId': 100858749, 'gName': '李纨', 'gNum': '1383', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14100.0, 'tokenId': '723763'},
{'albumId': 100513723, 'gId': 100860108, 'gName': '妙玉', 'gNum': '686', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 16550.0, 'tokenId': '657913'},
{'albumId': 100092612, 'gId': 100754264, 'gName': '经典熊', 'gNum': '12', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 62000.0, 'tokenId': '493996'},
{'albumId': 100092613, 'gId': 100754794, 'gName': '万圣熊', 'gNum': '186', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 24999.0, 'tokenId': '497660'},
{'albumId': 100092614, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092616, 'gId': 100756576, 'gName': '摇滚熊', 'gNum': '761', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9099.0, 'tokenId': '502822'},
{'albumId': 100092617, 'gId': 100757335, 'gName': '美女熊', 'gNum': '471', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9100.0, 'tokenId': '499298'},
{'albumId': 100092618, 'gId': 100758595, 'gName': '可可熊', 'gNum': '684', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9100.0, 'tokenId': '501626'},
{'albumId': 100092619, 'gId': 100759597, 'gName': '迪奇克熊', 'gNum': '639', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9850.0, 'tokenId': '500961'},
{'albumId': 100092620, 'gId': 100760431, 'gName': '剑士熊', 'gNum': '423', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9150.0, 'tokenId': '498805'},
{'albumId': 100092622, 'gId': 100761417, 'gName': '全机甲熊', 'gNum': '363', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9288.0, 'tokenId': '498201'},
{'albumId': 100092624, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092625, 'gId': 100763946, 'gName': '军团熊', 'gNum': '793', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9400.0, 'tokenId': '525461'},
{'albumId': 100092627, 'gId': 100765227, 'gName': '半机甲熊', 'gNum': '1029', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9500.0, 'tokenId': '1793349'},
{'albumId': 100092628, 'gId': 100765662, 'gName': '机器人熊', 'gNum': '416', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9380.0, 'tokenId': '498697'},
{'albumId': 100000317, 'gId': 100490263, 'gName': '同道大叔', 'gNum': '44', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 79998.0, 'tokenId': '254725'},
{'albumId': 100000316, 'gId': 100489602, 'gName': '大魔术师', 'gNum': '382', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 26000.0, 'tokenId': '260187'},
{'albumId': 100000315, 'gId': 100488859, 'gName': '奇幻马戏团', 'gNum': '638', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 29000.0, 'tokenId': '352413'},
{'albumId': 100000303, 'gId': 100468605, 'gName': '白羊座：加利斯', 'gNum': '709', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 16000.0, 'tokenId': '316421'},
{'albumId': 100000318, 'gId': 100476143, 'gName': '金牛座：牛丢丢', 'gNum': '987', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 17599.0, 'tokenId': '352533'},
{'albumId': 100000319, 'gId': 100476921, 'gName': '双子座：猫院长', 'gNum': '313', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 15500.0, 'tokenId': '256575'},
{'albumId': 100000306, 'gId': 100472704, 'gName': '巨蟹座：蛋丁', 'gNum': '452', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 15000.0, 'tokenId': '258725'},
{'albumId': 100000307, 'gId': 100473717, 'gName': '狮子座：狮总裁', 'gNum': '13', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 16600.0, 'tokenId': '252680'},
{'albumId': 100000308, 'gId': 100479494, 'gName': '处女座：矮豆豆', 'gNum': '1434', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 16228.0, 'tokenId': '1111126'},
{'albumId': 100000309, 'gId': 100480613, 'gName': '天秤座：窝窝鸡', 'gNum': '1101', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 15499.0, 'tokenId': '358020'},
{'albumId': 100000310, 'gId': 100480995, 'gName': '天蝎座：雷猴', 'gNum': '31', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 17000.0, 'tokenId': '252765'},
{'albumId': 100000311, 'gId': 100483493, 'gName': '射手座：格雷', 'gNum': '1077', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 14888.0, 'tokenId': '357931'},
{'albumId': 100000312, 'gId': 100485310, 'gName': '摩羯座：奋斗熊', 'gNum': '1442', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 14999.0, 'tokenId': '1778626'},
{'albumId': 100000313, 'gId': 100485484, 'gName': '水瓶座：格白尼', 'gNum': '165', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 18000.0, 'tokenId': '254528'},
{'albumId': 100000314, 'gId': 100486801, 'gName': '双鱼座：小超鱼', 'gNum': '31', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 16888.0, 'tokenId': '252745'},
{'albumId': 100000233, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000234, 'gId': 100267399, 'gName': '八分光轮', 'gNum': '180', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 43666.0, 'tokenId': '242042'},
{'albumId': 100000235, 'gId': 100268052, 'gName': '捕捉光环', 'gNum': '234', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 42444.0, 'tokenId': '243730'},
{'albumId': 100000236, 'gId': 100268892, 'gName': '奥特意念光线', 'gNum': '475', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 40500.0, 'tokenId': '374045'},
{'albumId': 100000237, 'gId': 100269362, 'gName': '奥特屏障', 'gNum': '346', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14999.0, 'tokenId': '244229'},
{'albumId': 100000238, 'gId': 100270280, 'gName': '空中撞击战法', 'gNum': '506', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14888.0, 'tokenId': '254958'},
{'albumId': 100000239, 'gId': 100270906, 'gName': '奥特念力', 'gNum': '374', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14998.0, 'tokenId': '244311'},
{'albumId': 100000240, 'gId': 100271372, 'gName': '奥特水流', 'gNum': '82', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13888.0, 'tokenId': '240082'},
{'albumId': 100000241, 'gId': 100272561, 'gName': '奥特瞬间移动', 'gNum': '513', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14000.0, 'tokenId': '341653'},
{'albumId': 100000242, 'gId': 100273159, 'gName': '奥特高速旋转', 'gNum': '353', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15000.0, 'tokenId': '244456'},
{'albumId': 100000243, 'gId': 100273621, 'gName': '巨大化能力', 'gNum': '57', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13999.0, 'tokenId': '239621'},
{'albumId': 100000244, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000245, 'gId': 100275098, 'gName': '奥特眼光线', 'gNum': '18', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14987.0, 'tokenId': '239152'},
{'albumId': 100000246, 'gId': 100275862, 'gName': '超级过肩摔', 'gNum': '24', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13999.0, 'tokenId': '239113'},
{'albumId': 100000247, 'gId': 100277084, 'gName': '防御能力', 'gNum': '488', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13998.0, 'tokenId': '258205'},
{'albumId': 100000248, 'gId': 100277958, 'gName': '光线白刃取', 'gNum': '604', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14200.0, 'tokenId': '360333'},
{'albumId': 100000249, 'gId': 100278423, 'gName': '奥特空中意念捕捉', 'gNum': '311', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14999.0, 'tokenId': '243540'},
{'albumId': 100000179, 'gId': 100186899, 'gName': '鸣人VS佐助', 'gNum': '388', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 41999.0, 'tokenId': '1235133'},
{'albumId': 100000178, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000171, 'gId': 100179552, 'gName': '宇智波佐助', 'gNum': '406', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 13500.0, 'tokenId': '105640'},
{'albumId': 100000172, 'gId': 100180600, 'gName': '旗木卡卡西', 'gNum': '459', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 15000.0, 'tokenId': '106442'},
{'albumId': 100000173, 'gId': 100181906, 'gName': '自来也', 'gNum': '770', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14999.0, 'tokenId': '118818'},
{'albumId': 100000174, 'gId': 100182785, 'gName': '波风水门', 'gNum': '654', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 15499.0, 'tokenId': '108098'},
{'albumId': 100000175, 'gId': 100183631, 'gName': '第七班', 'gNum': '505', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 19233.0, 'tokenId': '106934'},
{'albumId': 100000176, 'gId': 100184516, 'gName': '鸣人VS我爱罗', 'gNum': '395', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14300.0, 'tokenId': '105445'},
{'albumId': 100000177, 'gId': 100185555, 'gName': '漩涡鸣人', 'gNum': '439', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 13999.0, 'tokenId': '105909'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143237, 'gName': '斯巴达（Sparta）', 'gNum': '31', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 88000.0, 'tokenId': '89732'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 87888.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 75000.0, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143546, 'gName': '麦克思（Max）', 'gNum': '40', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 45888.0, 'tokenId': '89550'},
{'albumId': 100000158, 'gId': 100143827, 'gName': '萨德（Sade）', 'gNum': '139', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 35000.0, 'tokenId': '90550'},
{'albumId': 100000159, 'gId': 100143970, 'gName': '露娜（Luna）', 'gNum': '100', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39995.0, 'tokenId': '90295'},
{'albumId': 100000160, 'gId': 100144194, 'gName': '奇迹（Miracle）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 35000.0, 'tokenId': '90555'},
{'albumId': 100000161, 'gId': 100144301, 'gName': '吉娜（Gina）', 'gNum': '67', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 77777.0, 'tokenId': '89899'},
{'albumId': 100000162, 'gId': 100144544, 'gName': '桑迪（Sunday）', 'gNum': '128', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 45678.0, 'tokenId': '90479'},
{'albumId': 100000163, 'gId': 100144648, 'gName': '格若瑞娅（Gloria）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 49999.0, 'tokenId': '89771'},
{'albumId': 100000164, 'gId': 100144922, 'gName': '艾伯纳（Abner）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 33000.0, 'tokenId': '90882'},
{'albumId': 100000165, 'gId': 100145059, 'gName': '泡泡（Bubble）', 'gNum': '97', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 36666.0, 'tokenId': '90179'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101200936, 'gName': 'iBox-CyberMouse', 'gNum': '11838', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4886.0, 'tokenId': '874896'},
{'albumId': 100000323, 'gId': 100514815, 'gName': '张国荣公益数字藏品', 'gNum': '17', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 58888.0, 'tokenId': '665156'},
{'albumId': 100513824, 'gId': 101342375, 'gName': '五虎上将-黄忠', 'gNum': '333', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 78000.0, 'tokenId': '995970'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513868, 'gId': 101834025, 'gName': 'Cece-cotton', 'gNum': '3593', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 36550.0, 'tokenId': '1416225'},
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
