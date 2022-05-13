// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/all-name-js");
const jsData = require("./data/js-data");

var data =  [{'albumId': 100513745, 'gId': 101017528, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '149', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 49700.0, 'tokenId': '748325'},
{'albumId': 100513912, 'gId': 102332809, 'gName': 'Cece-roses', 'gNum': '737', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': 'Ceceplants', 'priceCny': 51668.0, 'tokenId': '1791835'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513779, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513780, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513781, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100100115, 'gId': 100831629, 'gName': '金钱豹', 'gNum': '126', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 59999.0, 'tokenId': '519608'},
{'albumId': 100513396, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513397, 'gId': 100839059, 'gName': '一見有喜 平安長樂', 'gNum': '1534', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 22600.0, 'tokenId': '524695'},
{'albumId': 100513731, 'gId': 101002117, 'gName': '未来太空之十二大事件', 'gNum': '984', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 54599.0, 'tokenId': '736404'},
{'albumId': 100513736, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010606, 'gName': '功夫小子', 'gNum': '259', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 46000.0, 'tokenId': '743000'},
{'albumId': 100513744, 'gId': 101017336, 'gName': '悟道小子', 'gNum': '431', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 46666.0, 'tokenId': '747697'},
{'albumId': 100513727, 'gId': 100992250, 'gName': 'iBox-虎头小子', 'gNum': '72', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 97999.0, 'tokenId': '727638'},
{'albumId': 100000128, 'gId': 100117980, 'gName': '《找自己》快乐版', 'gNum': '52', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 58888.0, 'tokenId': '59894'},
{'albumId': 100513752, 'gId': 101037541, 'gName': '万国争霸-资源徽章', 'gNum': '392', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 51880.0, 'tokenId': '766933'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513795, 'gId': 101216924, 'gName': '森林聚会', 'gNum': '238', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 44888.0, 'tokenId': '907714'},
{'albumId': 100513796, 'gId': 101217381, 'gName': '异世界·海之城', 'gNum': '395', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 42000.0, 'tokenId': '908071'},
{'albumId': 100099867, 'gId': 100827655, 'gName': '泰迪熊-空投版', 'gNum': '1437', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9600.0, 'tokenId': '515801'},
{'albumId': 100000396, 'gId': 100714218, 'gName': 'iBox宣传小标兵', 'gNum': '111', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 20119.0, 'tokenId': '490552'},
{'albumId': 100000190, 'gId': 100230297, 'gName': 'iBox-神牛降瑞', 'gNum': '5109', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 14788.0, 'tokenId': '115491'},
{'albumId': 100000139, 'gId': 100133353, 'gName': 'iBox-金牛献福', 'gNum': '2201', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 13108.0, 'tokenId': '158084'},
{'albumId': 100000388, 'gId': 100600561, 'gName': 'iBox-战牛无双', 'gNum': '1454', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 12999.0, 'tokenId': '383140'},
{'albumId': 100000394, 'gId': 100707215, 'gName': 'iBox-翔牛摘星', 'gNum': '3608', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 7159.0, 'tokenId': '483937'},
{'albumId': 100000383, 'gId': 100594570, 'gName': 'iBox-电牛放歌', 'gNum': '646', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 10751.0, 'tokenId': '370582'},
{'albumId': 100000384, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100099573, 'gId': 100824676, 'gName': '集牛换虎-虎虎生威', 'gNum': '102', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 41999.0, 'tokenId': '513156'},
{'albumId': 100513807, 'gId': 101275304, 'gName': '大鱼', 'gNum': '1368', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 64888.0, 'tokenId': '975616'},
{'albumId': 100513800, 'gId': 101219355, 'gName': '爱丽丝梦游仙境', 'gNum': '219', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 68888.0, 'tokenId': '910990'},
{'albumId': 100513802, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513803, 'gId': 101224913, 'gName': '思情郎 ', 'gNum': '377', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 59888.0, 'tokenId': '1003004'},
{'albumId': 100513806, 'gId': 101271735, 'gName': 'iBox-赛博司芬克斯', 'gNum': '799', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 20465.0, 'tokenId': '971719'},
{'albumId': 100513822, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513845, 'gId': 101440812, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '1280', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 47885.0, 'tokenId': '1097746'},
{'albumId': 100000169, 'gId': 100171673, 'gName': '闪电（Flash）', 'gNum': '7537', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 8880.0, 'tokenId': '99133'},
{'albumId': 100000118, 'gId': 100045266, 'gName': 'iBox 002号空投版', 'gNum': '1144', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 17668.0, 'tokenId': '58640'},
{'albumId': 100513844, 'gId': 101439317, 'gName': '魅紫萄萄', 'gNum': '14785', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8988.0, 'tokenId': '1090616'},
{'albumId': 100513843, 'gId': 101420932, 'gName': '蕃红李李', 'gNum': '11400', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 9449.0, 'tokenId': '1080344'},
{'albumId': 100513842, 'gId': 101407215, 'gName': '大芒妖妖', 'gNum': '12683', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 9300.0, 'tokenId': '1058249'},
{'albumId': 100513726, 'gId': 100976093, 'gName': 'iBox−赛博边牧', 'gNum': '40915', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1780.0, 'tokenId': '719708'},
{'albumId': 100000335, 'gId': 100532530, 'gName': 'iBox-潮牛逐浪', 'gNum': '1777', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 4378.0, 'tokenId': '340063'},
{'albumId': 100000254, 'gId': 100404593, 'gName': 'iBox-玄牛遂意', 'gNum': '33723', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2600.0, 'tokenId': '237044'},
{'albumId': 100000253, 'gId': 100364190, 'gName': 'iBox-灵牛来喜', 'gNum': '13320', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 3980.0, 'tokenId': '189384'},
{'albumId': 100513724, 'gId': 100880299, 'gName': 'iBox-CyberTiger', 'gNum': '18821', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1777.0, 'tokenId': '602633'},
{'albumId': 100513750, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513774, 'gId': 101110646, 'gName': 'iBox−赛博布偶', 'gNum': '29415', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2350.0, 'tokenId': '806152'},
{'albumId': 100000393, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513804, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513805, 'gId': 101268025, 'gName': 'iBox-赛博哈士奇', 'gNum': '9089', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5899.0, 'tokenId': '967840'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101288046, 'gName': '玫瑰玫瑰我爱你', 'gNum': '258', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 59600.0, 'tokenId': '1003572'},
{'albumId': 100513814, 'gId': 101289257, 'gName': '夜上海', 'gNum': '869', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 38000.0, 'tokenId': '1793461'},
{'albumId': 100513815, 'gId': 101289488, 'gName': '如果没有你', 'gNum': '200', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 38998.0, 'tokenId': '992829'},
{'albumId': 100513816, 'gId': 101294630, 'gName': '俏冤家', 'gNum': '4442', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 9996.0, 'tokenId': '1105011'},
{'albumId': 100513820, 'gId': 101312745, 'gName': '好春宵', 'gNum': '2037', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 9998.0, 'tokenId': '994593'},
{'albumId': 100513818, 'gId': 101305422, 'gName': '蔷薇处处开', 'gNum': '1388', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 10888.0, 'tokenId': '992379'},
{'albumId': 100513772, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513759, 'gId': 101040408, 'gName': '伊爱娃（IARA）', 'gNum': '645', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 59999.0, 'tokenId': '1104283'},
{'albumId': 100513761, 'gId': 101041212, 'gName': '佛里奥索（FURIOSA）', 'gNum': '729', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 29499.0, 'tokenId': '1241910'},
{'albumId': 100513762, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513763, 'gId': 101043175, 'gName': '普普拉（PURPURA）', 'gNum': '1192', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 13399.0, 'tokenId': '834512'},
{'albumId': 100513764, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513765, 'gId': 101047998, 'gName': '布兰卡（BRANCA）', 'gNum': '1903', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 13950.0, 'tokenId': '1104285'},
{'albumId': 100513766, 'gId': 101049291, 'gName': '紫月（MINGUANTE）', 'gNum': '1140', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 13400.0, 'tokenId': '834062'},
{'albumId': 100513767, 'gId': 101052209, 'gName': '橙日（CRESCENTE）', 'gNum': '2002', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 13660.0, 'tokenId': '1337876'},
{'albumId': 100513768, 'gId': 101054239, 'gName': '蓝日（NOVA）', 'gNum': '1976', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 13399.0, 'tokenId': '1241965'},
{'albumId': 100513769, 'gId': 101055582, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1263', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 12878.0, 'tokenId': '835572'},
{'albumId': 100513770, 'gId': 101056707, 'gName': '维洛（VELOZ）', 'gNum': '332', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 13333.0, 'tokenId': '777110'},
{'albumId': 100513771, 'gId': 101059386, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '955', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 13333.0, 'tokenId': '825336'},
{'albumId': 100513712, 'gId': 100840951, 'gName': '林黛玉', 'gNum': '173', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 63000.0, 'tokenId': '656335'},
{'albumId': 100513713, 'gId': 100842227, 'gName': '薛宝钗', 'gNum': '749', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 31999.0, 'tokenId': '1421358'},
{'albumId': 100513714, 'gId': 100842328, 'gName': '史湘云', 'gNum': '100', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 32000.0, 'tokenId': '654752'},
{'albumId': 100513715, 'gId': 100844579, 'gName': '秦可卿', 'gNum': '1601', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18789.0, 'tokenId': '734061'},
{'albumId': 100513716, 'gId': 100845087, 'gName': '王熙凤', 'gNum': '54', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18000.0, 'tokenId': '644301'},
{'albumId': 100513717, 'gId': 100848867, 'gName': '贾巧姐', 'gNum': '1779', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 20499.0, 'tokenId': '739893'},
{'albumId': 100513718, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513719, 'gId': 100852085, 'gName': '贾惜春', 'gNum': '887', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 22888.0, 'tokenId': '660583'},
{'albumId': 100513720, 'gId': 100853789, 'gName': '贾迎春', 'gNum': '535', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 20500.0, 'tokenId': '656372'},
{'albumId': 100513721, 'gId': 100855580, 'gName': '贾元春', 'gNum': '270', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18518.0, 'tokenId': '654576'},
{'albumId': 100513722, 'gId': 100858792, 'gName': '李纨', 'gNum': '1426', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18000.0, 'tokenId': '724221'},
{'albumId': 100513723, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092612, 'gId': 100754346, 'gName': '经典熊', 'gNum': '94', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 61888.0, 'tokenId': '496451'},
{'albumId': 100092613, 'gId': 100754683, 'gName': '万圣熊', 'gNum': '75', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 28588.0, 'tokenId': '494838'},
{'albumId': 100092614, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092616, 'gId': 100756601, 'gName': '摇滚熊', 'gNum': '786', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11000.0, 'tokenId': '519924'},
{'albumId': 100092617, 'gId': 100757127, 'gName': '美女熊', 'gNum': '263', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 12456.0, 'tokenId': '496372'},
{'albumId': 100092618, 'gId': 100758027, 'gName': '可可熊', 'gNum': '116', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11499.0, 'tokenId': '495588'},
{'albumId': 100092619, 'gId': 100759818, 'gName': '迪奇克熊', 'gNum': '860', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11500.0, 'tokenId': '543635'},
{'albumId': 100092620, 'gId': 100760137, 'gName': '剑士熊', 'gNum': '129', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11358.0, 'tokenId': '494718'},
{'albumId': 100092622, 'gId': 100762002, 'gName': '全机甲熊', 'gNum': '948', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11367.0, 'tokenId': '636934'},
{'albumId': 100092624, 'gId': 100762844, 'gName': '斗士熊', 'gNum': '740', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11300.0, 'tokenId': '502800'},
{'albumId': 100092625, 'gId': 100763929, 'gName': '军团熊', 'gNum': '776', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11386.0, 'tokenId': '524989'},
{'albumId': 100092627, 'gId': 100764654, 'gName': '半机甲熊', 'gNum': '456', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 11399.0, 'tokenId': '499155'},
{'albumId': 100092628, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000317, 'gId': 100490548, 'gName': '同道大叔', 'gNum': '329', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 82500.0, 'tokenId': '348948'},
{'albumId': 100000316, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000315, 'gId': 100488469, 'gName': '奇幻马戏团', 'gNum': '248', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 33333.0, 'tokenId': '257770'},
{'albumId': 100000303, 'gId': 100468245, 'gName': '白羊座：加利斯', 'gNum': '349', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 20800.0, 'tokenId': '256730'},
{'albumId': 100000318, 'gId': 100476602, 'gName': '金牛座：牛丢丢', 'gNum': '1446', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 20555.0, 'tokenId': '1793314'},
{'albumId': 100000319, 'gId': 100477072, 'gName': '双子座：猫院长', 'gNum': '464', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 19500.0, 'tokenId': '259330'},
{'albumId': 100000306, 'gId': 100472568, 'gName': '巨蟹座：蛋丁', 'gNum': '316', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 19990.0, 'tokenId': '257391'},
{'albumId': 100000307, 'gId': 100474618, 'gName': '狮子座：狮总裁', 'gNum': '914', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 22666.0, 'tokenId': '352183'},
{'albumId': 100000308, 'gId': 100478151, 'gName': '处女座：矮豆豆', 'gNum': '91', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 23288.0, 'tokenId': '253423'},
{'albumId': 100000309, 'gId': 100480953, 'gName': '天秤座：窝窝鸡', 'gNum': '1441', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 19800.0, 'tokenId': '1793156'},
{'albumId': 100000310, 'gId': 100481462, 'gName': '天蝎座：雷猴', 'gNum': '498', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 19999.0, 'tokenId': '259580'},
{'albumId': 100000311, 'gId': 100483331, 'gName': '射手座：格雷', 'gNum': '915', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 19400.0, 'tokenId': '352095'},
{'albumId': 100000312, 'gId': 100483971, 'gName': '摩羯座：奋斗熊', 'gNum': '103', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 20666.0, 'tokenId': '254650'},
{'albumId': 100000313, 'gId': 100485791, 'gName': '水瓶座：格白尼', 'gNum': '472', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 20400.0, 'tokenId': '259283'},
{'albumId': 100000314, 'gId': 100487327, 'gName': '双鱼座：小超鱼', 'gNum': '557', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 22500.0, 'tokenId': '259926'},
{'albumId': 100000233, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000234, 'gId': 100267407, 'gName': '八分光轮', 'gNum': '188', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 45200.0, 'tokenId': '242282'},
{'albumId': 100000235, 'gId': 100267830, 'gName': '捕捉光环', 'gNum': '12', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 46998.0, 'tokenId': '238919'},
{'albumId': 100000236, 'gId': 100268575, 'gName': '奥特意念光线', 'gNum': '158', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 43888.0, 'tokenId': '242657'},
{'albumId': 100000237, 'gId': 100269445, 'gName': '奥特屏障', 'gNum': '429', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 18888.0, 'tokenId': '249205'},
{'albumId': 100000238, 'gId': 100269795, 'gName': '空中撞击战法', 'gNum': '21', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 19500.0, 'tokenId': '239155'},
{'albumId': 100000239, 'gId': 100270781, 'gName': '奥特念力', 'gNum': '249', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 19760.0, 'tokenId': '241948'},
{'albumId': 100000240, 'gId': 100271446, 'gName': '奥特水流', 'gNum': '156', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 18999.0, 'tokenId': '240981'},
{'albumId': 100000241, 'gId': 100272337, 'gName': '奥特瞬间移动', 'gNum': '289', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 18500.0, 'tokenId': '243280'},
{'albumId': 100000242, 'gId': 100272857, 'gName': '奥特高速旋转', 'gNum': '51', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 18888.0, 'tokenId': '239709'},
{'albumId': 100000243, 'gId': 100273633, 'gName': '巨大化能力', 'gNum': '69', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 19333.0, 'tokenId': '240329'},
{'albumId': 100000244, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000245, 'gId': 100275549, 'gName': '奥特眼光线', 'gNum': '469', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 19332.0, 'tokenId': '250112'},
{'albumId': 100000246, 'gId': 100276254, 'gName': '超级过肩摔', 'gNum': '416', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 18999.0, 'tokenId': '248884'},
{'albumId': 100000247, 'gId': 100276934, 'gName': '防御能力', 'gNum': '338', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 18766.0, 'tokenId': '244264'},
{'albumId': 100000248, 'gId': 100277608, 'gName': '光线白刃取', 'gNum': '254', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 18888.0, 'tokenId': '242814'},
{'albumId': 100000249, 'gId': 100278743, 'gName': '奥特空中意念捕捉', 'gNum': '631', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 19660.0, 'tokenId': '502584'},
{'albumId': 100000179, 'gId': 100186712, 'gName': '鸣人VS佐助', 'gNum': '201', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 44000.0, 'tokenId': '106742'},
{'albumId': 100000178, 'gId': 100186318, 'gName': '奇拉比&鸣人', 'gNum': '207', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 52500.0, 'tokenId': '106850'},
{'albumId': 100000171, 'gId': 100179334, 'gName': '宇智波佐助', 'gNum': '188', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 19888.0, 'tokenId': '103922'},
{'albumId': 100000172, 'gId': 100180792, 'gName': '旗木卡卡西', 'gNum': '651', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 19520.0, 'tokenId': '108696'},
{'albumId': 100000173, 'gId': 100182016, 'gName': '自来也', 'gNum': '880', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 19087.0, 'tokenId': '262120'},
{'albumId': 100000174, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000175, 'gId': 100183986, 'gName': '第七班', 'gNum': '860', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 19766.0, 'tokenId': '249784'},
{'albumId': 100000176, 'gId': 100184328, 'gName': '鸣人VS我爱罗', 'gNum': '207', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 19548.0, 'tokenId': '104006'},
{'albumId': 100000177, 'gId': 100186022, 'gName': '漩涡鸣人', 'gNum': '906', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 19600.0, 'tokenId': '349889'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143210, 'gName': '斯巴达（Sparta）', 'gNum': '4', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.66, 'tokenId': '89257'},
{'albumId': 100000155, 'gId': 100143374, 'gName': '雪莉（Sydney）', 'gNum': '68', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 88888.0, 'tokenId': '90408'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 75000.0, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143625, 'gName': '麦克思（Max）', 'gNum': '119', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 45555.0, 'tokenId': '90357'},
{'albumId': 100000158, 'gId': 100143827, 'gName': '萨德（Sade）', 'gNum': '139', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 48888.0, 'tokenId': '90550'},
{'albumId': 100000159, 'gId': 100143876, 'gName': '露娜（Luna）', 'gNum': '6', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39998.0, 'tokenId': '89243'},
{'albumId': 100000160, 'gId': 100144118, 'gName': '奇迹（Miracle）', 'gNum': '66', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 36666.0, 'tokenId': '89856'},
{'albumId': 100000161, 'gId': 100144301, 'gName': '吉娜（Gina）', 'gNum': '67', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 68888.0, 'tokenId': '89899'},
{'albumId': 100000162, 'gId': 100144544, 'gName': '桑迪（Sunday）', 'gNum': '128', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '90479'},
{'albumId': 100000163, 'gId': 100144724, 'gName': '格若瑞娅（Gloria）', 'gNum': '126', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 43333.0, 'tokenId': '90474'},
{'albumId': 100000164, 'gId': 100144782, 'gName': '艾伯纳（Abner）', 'gNum': '2', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 35000.0, 'tokenId': '89267'},
{'albumId': 100000165, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000323, 'gId': 100514845, 'gName': '张国荣公益数字藏品', 'gNum': '47', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 63333.0, 'tokenId': '665152'},
{'albumId': 100513824, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101726924, 'gName': 'Cece-plants', 'gNum': '1892', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 29000.0, 'tokenId': '1345780'},
{'albumId': 100513868, 'gId': 101830668, 'gName': 'Cece-cotton', 'gNum': '236', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 29688.0, 'tokenId': '1419148'},
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
