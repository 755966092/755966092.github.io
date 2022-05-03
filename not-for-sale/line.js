// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/all-name-js");
const jsData = require("./data/js-data");

var data =  [{'albumId': 100099581, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100099582, 'gId': 100825197, 'gName': '《山海经》-呲铁', 'gNum': '46', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 58885.0, 'tokenId': '513682'},
{'albumId': 100099599, 'gId': 100825828, 'gName': '《山海经》-狡', 'gNum': '82', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 32887.0, 'tokenId': '513815'},
{'albumId': 100000395, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000378, 'gId': 100592116, 'gName': '《山海经》-混沌', 'gNum': '5381', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4255.0, 'tokenId': '367464'},
{'albumId': 100513734, 'gId': 101004543, 'gName': '《山海经》-何罗鱼', 'gNum': '309', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18000.0, 'tokenId': '736957'},
{'albumId': 100513733, 'gId': 101004139, 'gName': '《山海经》-雷神', 'gNum': '5', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 82800.0, 'tokenId': '736471'},
{'albumId': 100513748, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513745, 'gId': 101017848, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '469', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12500.0, 'tokenId': '748688'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133347, 'gName': '冥王-哈迪斯', 'gNum': '473', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 82220.0, 'tokenId': '986501'},
{'albumId': 100513779, 'gId': 101135031, 'gName': '智慧女神-雅典娜', 'gNum': '517', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 81111.0, 'tokenId': '986605'},
{'albumId': 100513780, 'gId': 101136424, 'gName': '狩猎女神-阿尔忒弥斯', 'gNum': '270', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 96666.0, 'tokenId': '896350'},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 99999.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 100831590, 'gName': '金钱豹', 'gNum': '87', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 27000.0, 'tokenId': '519501'},
{'albumId': 100513396, 'gId': 100836728, 'gName': '一見有喜 平安長樂', 'gNum': '1203', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3730.0, 'tokenId': '522715'},
{'albumId': 100513397, 'gId': 100838386, 'gName': '一見有喜 平安長樂', 'gNum': '861', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3698.0, 'tokenId': '524037'},
{'albumId': 100513731, 'gId': 101002113, 'gName': '未来太空之十二大事件', 'gNum': '980', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 19000.0, 'tokenId': '736401'},
{'albumId': 100513736, 'gId': 101006414, 'gName': '月球探测器', 'gNum': '200', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13599.0, 'tokenId': '737742'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010829, 'gName': '功夫小子', 'gNum': '482', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8288.0, 'tokenId': '742866'},
{'albumId': 100513744, 'gId': 101017085, 'gName': '悟道小子', 'gNum': '180', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 11110.0, 'tokenId': '747532'},
{'albumId': 100513727, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000128, 'gId': 100117946, 'gName': '《找自己》快乐版', 'gNum': '18', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 15888.0, 'tokenId': '59886'},
{'albumId': 100513752, 'gId': 101037314, 'gName': '万国争霸-资源徽章', 'gNum': '165', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 24890.0, 'tokenId': '766663'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513798, 'gId': 101218400, 'gName': '秋色斑斓', 'gNum': '364', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 15555.55, 'tokenId': '909218'},
{'albumId': 100513799, 'gId': 101219121, 'gName': '金瓜满载', 'gNum': '585', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 13500.0, 'tokenId': '976351'},
{'albumId': 100513795, 'gId': 101216836, 'gName': '森林聚会', 'gNum': '150', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 8699.0, 'tokenId': '907787'},
{'albumId': 100513796, 'gId': 101217268, 'gName': '异世界·海之城', 'gNum': '282', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 8840.0, 'tokenId': '908273'},
{'albumId': 100099867, 'gId': 100831076, 'gName': '泰迪熊-空投版', 'gNum': '4858', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 2347.0, 'tokenId': '519171'},
{'albumId': 100000396, 'gId': 100714145, 'gName': 'iBox宣传小标兵', 'gNum': '38', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3300.0, 'tokenId': '492949'},
{'albumId': 100000190, 'gId': 100230393, 'gName': 'iBox-神牛降瑞', 'gNum': '5205', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1799.0, 'tokenId': '115574'},
{'albumId': 100000139, 'gId': 100131501, 'gName': 'iBox-金牛献福', 'gNum': '349', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2022.0, 'tokenId': '75212'},
{'albumId': 100000388, 'gId': 100600882, 'gName': 'iBox-战牛无双', 'gNum': '1775', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1997.0, 'tokenId': '383463'},
{'albumId': 100000394, 'gId': 100707989, 'gName': 'iBox-翔牛摘星', 'gNum': '4382', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1018.0, 'tokenId': '484695'},
{'albumId': 100000383, 'gId': 100595605, 'gName': 'iBox-电牛放歌', 'gNum': '1681', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1549.0, 'tokenId': '371602'},
{'albumId': 100000384, 'gId': 100596172, 'gName': 'iBox-电牛放歌', 'gNum': '248', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1580.0, 'tokenId': '372212'},
{'albumId': 100099573, 'gId': 100825031, 'gName': '集牛换虎-虎虎生威', 'gNum': '457', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7399.0, 'tokenId': '513511'},
{'albumId': 100513807, 'gId': 101274795, 'gName': '大鱼', 'gNum': '859', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 24555.0, 'tokenId': '974628'},
{'albumId': 100513800, 'gId': 101219704, 'gName': '爱丽丝梦游仙境', 'gNum': '568', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 26998.0, 'tokenId': '911381'},
{'albumId': 100513802, 'gId': 101224425, 'gName': '五虎上将-赵云', 'gNum': '89', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 82999.0, 'tokenId': '913233'},
{'albumId': 100513803, 'gId': 101224555, 'gName': '思情郎 ', 'gNum': '19', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 16999.0, 'tokenId': '913545'},
{'albumId': 100513806, 'gId': 101273727, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2791', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5300.0, 'tokenId': '973216'},
{'albumId': 100513822, 'gId': 101319350, 'gName': '五虎上将-马超', 'gNum': '248', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 46200.0, 'tokenId': '987258'},
{'albumId': 100513845, 'gId': 101441060, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '1528', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 19599.0, 'tokenId': '1106152'},
{'albumId': 100000169, 'gId': 100171140, 'gName': '闪电（Flash）', 'gNum': '7004', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 1500.0, 'tokenId': '96656'},
{'albumId': 100000118, 'gId': 100045129, 'gName': 'iBox 002号空投版', 'gNum': '1007', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 2770.0, 'tokenId': '58326'},
{'albumId': 100513844, 'gId': 101428695, 'gName': '魅紫萄萄', 'gNum': '4163', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2159.0, 'tokenId': '1083649'},
{'albumId': 100513843, 'gId': 101412753, 'gName': '蕃红李李', 'gNum': '3221', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2688.0, 'tokenId': '1067964'},
{'albumId': 100513842, 'gId': 101398227, 'gName': '大芒妖妖', 'gNum': '3695', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2508.0, 'tokenId': '1064044'},
{'albumId': 100513726, 'gId': 100957359, 'gName': 'iBox−赛博边牧', 'gNum': '22181', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 299.99, 'tokenId': '706117'},
{'albumId': 100000335, 'gId': 100545383, 'gName': 'iBox-潮牛逐浪', 'gNum': '14630', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 685.0, 'tokenId': '341214'},
{'albumId': 100000254, 'gId': 100386456, 'gName': 'iBox-玄牛遂意', 'gNum': '15586', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 388.0, 'tokenId': '214112'},
{'albumId': 100000253, 'gId': 100366642, 'gName': 'iBox-灵牛来喜', 'gNum': '15772', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 771.0, 'tokenId': '191841'},
{'albumId': 100513724, 'gId': 100875978, 'gName': 'iBox-CyberTiger', 'gNum': '14500', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 515.0, 'tokenId': '633556'},
{'albumId': 100513750, 'gId': 101025687, 'gName': 'iBox−赛博蓝猫', 'gNum': '4417', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 899.0, 'tokenId': '753957'},
{'albumId': 100513774, 'gId': 101082437, 'gName': 'iBox−赛博布偶', 'gNum': '1206', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 298.0, 'tokenId': '787695'},
{'albumId': 100000393, 'gId': 100631742, 'gName': 'I‘m Sorry', 'gNum': '28135', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 200.0, 'tokenId': '412625'},
{'albumId': 100513804, 'gId': 101257130, 'gName': 'iBox-赛博加菲', 'gNum': '32194', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 577.77, 'tokenId': '956471'},
{'albumId': 100513805, 'gId': 101260402, 'gName': 'iBox-赛博哈士奇', 'gNum': '1466', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1088.0, 'tokenId': '960802'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101288140, 'gName': '玫瑰玫瑰我爱你', 'gNum': '352', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 49449.0, 'tokenId': '1098201'},
{'albumId': 100513814, 'gId': 101288864, 'gName': '夜上海', 'gNum': '476', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7888.0, 'tokenId': '1009422'},
{'albumId': 100513815, 'gId': 101290082, 'gName': '如果没有你', 'gNum': '794', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7699.0, 'tokenId': '1242187'},
{'albumId': 100513816, 'gId': 101293489, 'gName': '俏冤家', 'gNum': '3301', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2930.0, 'tokenId': '1004191'},
{'albumId': 100513820, 'gId': 101316496, 'gName': '好春宵', 'gNum': '5788', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2930.0, 'tokenId': '1240778'},
{'albumId': 100513818, 'gId': 101304329, 'gName': '蔷薇处处开', 'gNum': '295', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2788.0, 'tokenId': '988676'},
{'albumId': 100513759, 'gId': 101040436, 'gName': '伊爱娃（IARA）', 'gNum': '673', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 35555.0, 'tokenId': '1242171'},
{'albumId': 100513761, 'gId': 101041121, 'gName': '佛里奥索（FURIOSA）', 'gNum': '638', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7666.0, 'tokenId': '907459'},
{'albumId': 100513762, 'gId': 101041553, 'gName': '贝贝（BEBE）', 'gNum': '320', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7699.0, 'tokenId': '783970'},
{'albumId': 100513763, 'gId': 101043984, 'gName': '普普拉（PURPURA）', 'gNum': '2001', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2780.0, 'tokenId': '1242615'},
{'albumId': 100513764, 'gId': 101044717, 'gName': '拉万达（LAVANDA）', 'gNum': '678', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2800.0, 'tokenId': '780774'},
{'albumId': 100513765, 'gId': 101046246, 'gName': '布兰卡（BRANCA）', 'gNum': '151', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2718.0, 'tokenId': '775109'},
{'albumId': 100513766, 'gId': 101048772, 'gName': '紫月（MINGUANTE）', 'gNum': '621', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2750.0, 'tokenId': '779940'},
{'albumId': 100513767, 'gId': 101050932, 'gName': '橙日（CRESCENTE）', 'gNum': '725', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2740.0, 'tokenId': '780357'},
{'albumId': 100513768, 'gId': 101053129, 'gName': '蓝日（NOVA）', 'gNum': '866', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2800.0, 'tokenId': '781920'},
{'albumId': 100513769, 'gId': 101054911, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '592', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2850.0, 'tokenId': '779707'},
{'albumId': 100513770, 'gId': 101058030, 'gName': '维洛（VELOZ）', 'gNum': '1655', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2740.0, 'tokenId': '895037'},
{'albumId': 100513771, 'gId': 101058923, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '492', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2888.0, 'tokenId': '778729'},
{'albumId': 100513712, 'gId': 100840823, 'gName': '林黛玉', 'gNum': '45', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 30888.0, 'tokenId': '644714'},
{'albumId': 100513713, 'gId': 100841806, 'gName': '薛宝钗', 'gNum': '328', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8588.0, 'tokenId': '660498'},
{'albumId': 100513714, 'gId': 100842625, 'gName': '史湘云', 'gNum': '397', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8566.0, 'tokenId': '661881'},
{'albumId': 100513715, 'gId': 100844388, 'gName': '秦可卿', 'gNum': '1410', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4500.0, 'tokenId': '723376'},
{'albumId': 100513716, 'gId': 100845602, 'gName': '王熙凤', 'gNum': '569', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4399.0, 'tokenId': '656986'},
{'albumId': 100513717, 'gId': 100847712, 'gName': '贾巧姐', 'gNum': '624', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4699.0, 'tokenId': '657381'},
{'albumId': 100513718, 'gId': 100849163, 'gName': '贾探春', 'gNum': '20', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4455.0, 'tokenId': '643911'},
{'albumId': 100513719, 'gId': 100851636, 'gName': '贾惜春', 'gNum': '438', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4799.0, 'tokenId': '656789'},
{'albumId': 100513720, 'gId': 100853782, 'gName': '贾迎春', 'gNum': '528', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4689.0, 'tokenId': '656273'},
{'albumId': 100513721, 'gId': 100856788, 'gName': '贾元春', 'gNum': '1478', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4500.0, 'tokenId': '727485'},
{'albumId': 100513722, 'gId': 100857470, 'gName': '李纨', 'gNum': '104', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4750.0, 'tokenId': '644670'},
{'albumId': 100513723, 'gId': 100859576, 'gName': '妙玉', 'gNum': '154', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4299.0, 'tokenId': '645082'},
{'albumId': 100092612, 'gId': 100754496, 'gName': '经典熊', 'gNum': '244', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 30888.0, 'tokenId': '501863'},
{'albumId': 100092613, 'gId': 100754843, 'gName': '万圣熊', 'gNum': '235', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 10899.0, 'tokenId': '498774'},
{'albumId': 100092614, 'gId': 100755724, 'gName': '精灵熊', 'gNum': '514', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9490.0, 'tokenId': '553770'},
{'albumId': 100092616, 'gId': 100756401, 'gName': '摇滚熊', 'gNum': '586', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3999.0, 'tokenId': '500606'},
{'albumId': 100092617, 'gId': 100757401, 'gName': '美女熊', 'gNum': '537', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4300.0, 'tokenId': '500008'},
{'albumId': 100092618, 'gId': 100758045, 'gName': '可可熊', 'gNum': '134', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4030.0, 'tokenId': '494760'},
{'albumId': 100092619, 'gId': 100758997, 'gName': '迪奇克熊', 'gNum': '39', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3970.0, 'tokenId': '494055'},
{'albumId': 100092620, 'gId': 100760012, 'gName': '剑士熊', 'gNum': '4', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3958.0, 'tokenId': '496900'},
{'albumId': 100092622, 'gId': 100761626, 'gName': '全机甲熊', 'gNum': '572', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3999.0, 'tokenId': '500623'},
{'albumId': 100092624, 'gId': 100762702, 'gName': '斗士熊', 'gNum': '598', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3999.0, 'tokenId': '500613'},
{'albumId': 100092625, 'gId': 100763916, 'gName': '军团熊', 'gNum': '763', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3950.0, 'tokenId': '514079'},
{'albumId': 100092627, 'gId': 100764502, 'gName': '半机甲熊', 'gNum': '304', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4100.0, 'tokenId': '496828'},
{'albumId': 100092628, 'gId': 100765581, 'gName': '机器人熊', 'gNum': '335', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3949.0, 'tokenId': '497701'},
{'albumId': 100000317, 'gId': 100490254, 'gName': '同道大叔', 'gNum': '35', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 44888.0, 'tokenId': '254450'},
{'albumId': 100000316, 'gId': 100490193, 'gName': '大魔术师', 'gNum': '973', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 8288.0, 'tokenId': '909812'},
{'albumId': 100000315, 'gId': 100488869, 'gName': '奇幻马戏团', 'gNum': '648', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 8322.0, 'tokenId': '352695'},
{'albumId': 100000303, 'gId': 100468438, 'gName': '白羊座：加利斯', 'gNum': '542', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6333.0, 'tokenId': '259879'},
{'albumId': 100000318, 'gId': 100475792, 'gName': '金牛座：牛丢丢', 'gNum': '636', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6666.0, 'tokenId': '261607'},
{'albumId': 100000319, 'gId': 100477862, 'gName': '双子座：猫院长', 'gNum': '1254', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5950.0, 'tokenId': '584731'},
{'albumId': 100000306, 'gId': 100473213, 'gName': '巨蟹座：蛋丁', 'gNum': '961', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7999.0, 'tokenId': '352509'},
{'albumId': 100000307, 'gId': 100474351, 'gName': '狮子座：狮总裁', 'gNum': '647', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5555.0, 'tokenId': '261730'},
{'albumId': 100000308, 'gId': 100479497, 'gName': '处女座：矮豆豆', 'gNum': '1437', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6188.88, 'tokenId': '1235528'},
{'albumId': 100000309, 'gId': 100480431, 'gName': '天秤座：窝窝鸡', 'gNum': '919', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7000.0, 'tokenId': '350396'},
{'albumId': 100000310, 'gId': 100481625, 'gName': '天蝎座：雷猴', 'gNum': '661', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5999.0, 'tokenId': '262003'},
{'albumId': 100000311, 'gId': 100483835, 'gName': '射手座：格雷', 'gNum': '1419', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6288.0, 'tokenId': '974153'},
{'albumId': 100000312, 'gId': 100484319, 'gName': '摩羯座：奋斗熊', 'gNum': '451', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7680.0, 'tokenId': '258507'},
{'albumId': 100000313, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000314, 'gId': 100486792, 'gName': '双鱼座：小超鱼', 'gNum': '22', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5899.0, 'tokenId': '252915'},
{'albumId': 100000233, 'gId': 100267115, 'gName': '斯派修姆光线', 'gNum': '245', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 59999.0, 'tokenId': '348146'},
{'albumId': 100000234, 'gId': 100267378, 'gName': '八分光轮', 'gNum': '159', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14999.0, 'tokenId': '242337'},
{'albumId': 100000235, 'gId': 100268060, 'gName': '捕捉光环', 'gNum': '242', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15000.0, 'tokenId': '244033'},
{'albumId': 100000236, 'gId': 100268563, 'gName': '奥特意念光线', 'gNum': '146', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15777.0, 'tokenId': '241603'},
{'albumId': 100000237, 'gId': 100269450, 'gName': '奥特屏障', 'gNum': '434', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5398.0, 'tokenId': '249543'},
{'albumId': 100000238, 'gId': 100269948, 'gName': '空中撞击战法', 'gNum': '174', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5300.0, 'tokenId': '241160'},
{'albumId': 100000239, 'gId': 100271270, 'gName': '奥特念力', 'gNum': '738', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5499.0, 'tokenId': '1240397'},
{'albumId': 100000240, 'gId': 100271654, 'gName': '奥特水流', 'gNum': '364', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5660.0, 'tokenId': '245040'},
{'albumId': 100000241, 'gId': 100272780, 'gName': '奥特瞬间移动', 'gNum': '732', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5250.0, 'tokenId': '770588'},
{'albumId': 100000242, 'gId': 100273457, 'gName': '奥特高速旋转', 'gNum': '651', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5666.0, 'tokenId': '511807'},
{'albumId': 100000243, 'gId': 100274287, 'gName': '巨大化能力', 'gNum': '723', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5299.0, 'tokenId': '771012'},
{'albumId': 100000244, 'gId': 100274918, 'gName': '碎裂光线', 'gNum': '596', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4999.0, 'tokenId': '358027'},
{'albumId': 100000245, 'gId': 100275256, 'gName': '奥特眼光线', 'gNum': '176', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5499.0, 'tokenId': '242183'},
{'albumId': 100000246, 'gId': 100275922, 'gName': '超级过肩摔', 'gNum': '84', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4899.0, 'tokenId': '240063'},
{'albumId': 100000247, 'gId': 100276930, 'gName': '防御能力', 'gNum': '334', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5299.0, 'tokenId': '244224'},
{'albumId': 100000248, 'gId': 100277955, 'gName': '光线白刃取', 'gNum': '601', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5055.0, 'tokenId': '358114'},
{'albumId': 100000249, 'gId': 100278153, 'gName': '奥特空中意念捕捉', 'gNum': '41', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5333.0, 'tokenId': '239367'},
{'albumId': 100000180, 'gId': 100187074, 'gName': '木叶村众人', 'gNum': '163', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 88000.0, 'tokenId': '107794'},
{'albumId': 100000179, 'gId': 100186903, 'gName': '鸣人VS佐助', 'gNum': '392', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 10888.88, 'tokenId': '1414825'},
{'albumId': 100000178, 'gId': 100186503, 'gName': '奇拉比&鸣人', 'gNum': '392', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 12888.0, 'tokenId': '1241922'},
{'albumId': 100000171, 'gId': 100179400, 'gName': '宇智波佐助', 'gNum': '254', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5379.0, 'tokenId': '104263'},
{'albumId': 100000172, 'gId': 100180376, 'gName': '旗木卡卡西', 'gNum': '235', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5450.0, 'tokenId': '104363'},
{'albumId': 100000173, 'gId': 100181581, 'gName': '自来也', 'gNum': '445', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5500.0, 'tokenId': '106044'},
{'albumId': 100000174, 'gId': 100182772, 'gName': '波风水门', 'gNum': '641', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5000.0, 'tokenId': '108084'},
{'albumId': 100000175, 'gId': 100183627, 'gName': '第七班', 'gNum': '501', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5499.0, 'tokenId': '106910'},
{'albumId': 100000176, 'gId': 100184775, 'gName': '鸣人VS我爱罗', 'gNum': '654', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5399.0, 'tokenId': '108274'},
{'albumId': 100000177, 'gId': 100185200, 'gName': '漩涡鸣人', 'gNum': '84', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5500.0, 'tokenId': '103185'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143240, 'gName': '斯巴达（Sparta）', 'gNum': '34', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 59999.0, 'tokenId': '89760'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 88800.0, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143646, 'gName': '麦克思（Max）', 'gNum': '140', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38888.0, 'tokenId': '90808'},
{'albumId': 100000158, 'gId': 100143703, 'gName': '萨德（Sade）', 'gNum': '15', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 24999.0, 'tokenId': '90662'},
{'albumId': 100000159, 'gId': 100143886, 'gName': '露娜（Luna）', 'gNum': '16', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 16666.0, 'tokenId': '89339'},
{'albumId': 100000160, 'gId': 100144134, 'gName': '奇迹（Miracle）', 'gNum': '82', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 48500.0, 'tokenId': '89994'},
{'albumId': 100000161, 'gId': 100144285, 'gName': '吉娜（Gina）', 'gNum': '51', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26666.0, 'tokenId': '89687'},
{'albumId': 100000162, 'gId': 100144466, 'gName': '桑迪（Sunday）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 27777.0, 'tokenId': '89621'},
{'albumId': 100000163, 'gId': 100144643, 'gName': '格若瑞娅（Gloria）', 'gNum': '45', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 48888.0, 'tokenId': '90789'},
{'albumId': 100000164, 'gId': 100144922, 'gName': '艾伯纳（Abner）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 31888.0, 'tokenId': '90882'},
{'albumId': 100000165, 'gId': 100144963, 'gName': '泡泡（Bubble）', 'gNum': '1', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '89175'},
{'albumId': 100513869, 'gId': 101834851, 'gName': '干杯', 'gNum': '419', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11160547, 'ownerName': '时砚亮', 'priceCny': 6988.0, 'tokenId': '1419572'},
{'albumId': 100513784, 'gId': 101198492, 'gName': 'iBox-CyberMouse', 'gNum': '9394', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 890.0, 'tokenId': '879666'},
{'albumId': 100000323, 'gId': 100514812, 'gName': '张国荣公益数字藏品', 'gNum': '14', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 28500.0, 'tokenId': '665157'},
{'albumId': 100513824, 'gId': 101342420, 'gName': '五虎上将-黄忠', 'gNum': '378', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 46666.0, 'tokenId': '996243'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101728251, 'gName': 'Cece-plants', 'gNum': '3219', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 11111.0, 'tokenId': '1341815'},
{'albumId': 100513868, 'gId': 101834079, 'gName': 'Cece-cotton', 'gNum': '3647', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 10800.0, 'tokenId': '1418763'},
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
