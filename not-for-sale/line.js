// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/all-name-js");
const jsData = require("./data/js-data");

var data =  [{'albumId': 100513745, 'gId': 101017789, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '410', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 27666.0, 'tokenId': '748489'},
{'albumId': 100513865, 'gId': 101726818, 'gName': 'Cece-plants', 'gNum': '1786', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 17665.0, 'tokenId': '1345830'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133374, 'gName': '冥王-哈迪斯', 'gNum': '500', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 95000.0, 'tokenId': '986510'},
{'albumId': 100513779, 'gId': 101135000, 'gName': '智慧女神-雅典娜', 'gNum': '486', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 94865.0, 'tokenId': '986515'},
{'albumId': 100513780, 'gId': 101136459, 'gName': '狩猎女神-阿尔忒弥斯', 'gNum': '305', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 98888.0, 'tokenId': '986514'},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 99888.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 100831643, 'gName': '金钱豹', 'gNum': '140', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 38100.0, 'tokenId': '519556'},
{'albumId': 100513396, 'gId': 100835838, 'gName': '一見有喜 平安長樂', 'gNum': '313', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 13000.0, 'tokenId': '521834'},
{'albumId': 100513397, 'gId': 100838901, 'gName': '一見有喜 平安長樂', 'gNum': '1376', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 12820.0, 'tokenId': '524540'},
{'albumId': 100513731, 'gId': 101001441, 'gName': '未来太空之十二大事件', 'gNum': '308', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 38180.0, 'tokenId': '735726'},
{'albumId': 100513736, 'gId': 101006763, 'gName': '月球探测器', 'gNum': '549', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 24900.0, 'tokenId': '737973'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010652, 'gName': '功夫小子', 'gNum': '305', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 26598.0, 'tokenId': '742762'},
{'albumId': 100513744, 'gId': 101017199, 'gName': '悟道小子', 'gNum': '294', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 22900.0, 'tokenId': '747807'},
{'albumId': 100513727, 'gId': 100992276, 'gName': 'iBox-虎头小子', 'gNum': '98', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 59990.0, 'tokenId': '727653'},
{'albumId': 100000128, 'gId': 100117945, 'gName': '《找自己》快乐版', 'gNum': '17', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 39999.0, 'tokenId': '59844'},
{'albumId': 100513752, 'gId': 101037261, 'gName': '万国争霸-资源徽章', 'gNum': '112', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 40970.0, 'tokenId': '766682'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 101219005, 'gName': '金瓜满载', 'gNum': '469', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 32222.0, 'tokenId': '908960'},
{'albumId': 100513795, 'gId': 101216798, 'gName': '森林聚会', 'gNum': '112', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 24999.0, 'tokenId': '907730'},
{'albumId': 100513796, 'gId': 101217164, 'gName': '异世界·海之城', 'gNum': '178', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 23333.0, 'tokenId': '907927'},
{'albumId': 100099867, 'gId': 100826524, 'gName': '泰迪熊-空投版', 'gNum': '306', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6000.0, 'tokenId': '514691'},
{'albumId': 100000396, 'gId': 100714389, 'gName': 'iBox宣传小标兵', 'gNum': '282', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14780.0, 'tokenId': '490713'},
{'albumId': 100000190, 'gId': 100228965, 'gName': 'iBox-神牛降瑞', 'gNum': '3777', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 8000.0, 'tokenId': '114391'},
{'albumId': 100000139, 'gId': 100131603, 'gName': 'iBox-金牛献福', 'gNum': '451', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 8395.0, 'tokenId': '75301'},
{'albumId': 100000388, 'gId': 100600816, 'gName': 'iBox-战牛无双', 'gNum': '1709', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 7990.0, 'tokenId': '383387'},
{'albumId': 100000394, 'gId': 100711770, 'gName': 'iBox-翔牛摘星', 'gNum': '8163', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 3286.0, 'tokenId': '488404'},
{'albumId': 100000383, 'gId': 100594921, 'gName': 'iBox-电牛放歌', 'gNum': '997', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 6899.0, 'tokenId': '370925'},
{'albumId': 100000384, 'gId': 100597114, 'gName': 'iBox-电牛放歌', 'gNum': '1190', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 6499.0, 'tokenId': '373135'},
{'albumId': 100099573, 'gId': 100824659, 'gName': '集牛换虎-虎虎生威', 'gNum': '85', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 25800.0, 'tokenId': '513138'},
{'albumId': 100513807, 'gId': 101275811, 'gName': '大鱼', 'gNum': '1875', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 37799.0, 'tokenId': '976098'},
{'albumId': 100513800, 'gId': 101220632, 'gName': '爱丽丝梦游仙境', 'gNum': '1496', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 37700.0, 'tokenId': '912413'},
{'albumId': 100513802, 'gId': 101224358, 'gName': '五虎上将-赵云', 'gNum': '22', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 81111.0, 'tokenId': '913175'},
{'albumId': 100513803, 'gId': 101224858, 'gName': '思情郎 ', 'gNum': '322', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 29300.0, 'tokenId': '976170'},
{'albumId': 100513806, 'gId': 101273049, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2113', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10888.0, 'tokenId': '974081'},
{'albumId': 100513822, 'gId': 101319371, 'gName': '五虎上将-马超', 'gNum': '269', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 57500.0, 'tokenId': '987242'},
{'albumId': 100513845, 'gId': 101440600, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '1068', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 29788.0, 'tokenId': '1097433'},
{'albumId': 100000169, 'gId': 100171532, 'gName': '闪电（Flash）', 'gNum': '7396', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 4700.0, 'tokenId': '99125'},
{'albumId': 100000118, 'gId': 100045567, 'gName': 'iBox 002号空投版', 'gNum': '1445', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 13000.0, 'tokenId': '58784'},
{'albumId': 100513844, 'gId': 101427555, 'gName': '魅紫萄萄', 'gNum': '3023', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4076.0, 'tokenId': '1083182'},
{'albumId': 100513843, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513842, 'gId': 101399694, 'gName': '大芒妖妖', 'gNum': '5162', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4349.0, 'tokenId': '1053595'},
{'albumId': 100513726, 'gId': 100987318, 'gName': 'iBox−赛博边牧', 'gNum': '52140', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 780.0, 'tokenId': '698030'},
{'albumId': 100000335, 'gId': 100545431, 'gName': 'iBox-潮牛逐浪', 'gNum': '14678', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2299.0, 'tokenId': '336749'},
{'albumId': 100000254, 'gId': 100385940, 'gName': 'iBox-玄牛遂意', 'gNum': '15070', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1150.0, 'tokenId': '213651'},
{'albumId': 100000253, 'gId': 100370204, 'gName': 'iBox-灵牛来喜', 'gNum': '19334', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1800.0, 'tokenId': '195131'},
{'albumId': 100513724, 'gId': 100884745, 'gName': 'iBox-CyberTiger', 'gNum': '23267', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 829.0, 'tokenId': '606750'},
{'albumId': 100513750, 'gId': 101033350, 'gName': 'iBox−赛博蓝猫', 'gNum': '12080', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2460.0, 'tokenId': '759919'},
{'albumId': 100513774, 'gId': 101125284, 'gName': 'iBox−赛博布偶', 'gNum': '44053', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 937.0, 'tokenId': '830335'},
{'albumId': 100000393, 'gId': 100691281, 'gName': 'I‘m Sorry', 'gNum': '87674', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 660.0, 'tokenId': '471408'},
{'albumId': 100513804, 'gId': 101258413, 'gName': 'iBox-赛博加菲', 'gNum': '33477', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1080.0, 'tokenId': '956447'},
{'albumId': 100513805, 'gId': 101260031, 'gName': 'iBox-赛博哈士奇', 'gNum': '1095', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2798.0, 'tokenId': '960127'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101287949, 'gName': '玫瑰玫瑰我爱你', 'gNum': '161', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 53999.0, 'tokenId': '994355'},
{'albumId': 100513814, 'gId': 101288680, 'gName': '夜上海', 'gNum': '292', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 19500.0, 'tokenId': '994731'},
{'albumId': 100513815, 'gId': 101289790, 'gName': '如果没有你', 'gNum': '502', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 19000.0, 'tokenId': '1095721'},
{'albumId': 100513816, 'gId': 101291540, 'gName': '俏冤家', 'gNum': '1352', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 5590.0, 'tokenId': '992197'},
{'albumId': 100513820, 'gId': 101314287, 'gName': '好春宵', 'gNum': '3579', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 5599.0, 'tokenId': '1050056'},
{'albumId': 100513818, 'gId': 101304378, 'gName': '蔷薇处处开', 'gNum': '344', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 5599.0, 'tokenId': '988999'},
{'albumId': 100513772, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513759, 'gId': 101040428, 'gName': '伊爱娃（IARA）', 'gNum': '665', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 42000.0, 'tokenId': '1240663'},
{'albumId': 100513761, 'gId': 101040857, 'gName': '佛里奥索（FURIOSA）', 'gNum': '374', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 16503.0, 'tokenId': '832379'},
{'albumId': 100513762, 'gId': 101041331, 'gName': '贝贝（BEBE）', 'gNum': '98', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 16399.0, 'tokenId': '776360'},
{'albumId': 100513763, 'gId': 101043838, 'gName': '普普拉（PURPURA）', 'gNum': '1855', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7299.0, 'tokenId': '1002385'},
{'albumId': 100513764, 'gId': 101044900, 'gName': '拉万达（LAVANDA）', 'gNum': '861', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7199.0, 'tokenId': '782288'},
{'albumId': 100513765, 'gId': 101047601, 'gName': '布兰卡（BRANCA）', 'gNum': '1506', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7597.0, 'tokenId': '891670'},
{'albumId': 100513766, 'gId': 101048280, 'gName': '紫月（MINGUANTE）', 'gNum': '129', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 8100.0, 'tokenId': '774774'},
{'albumId': 100513767, 'gId': 101050874, 'gName': '橙日（CRESCENTE）', 'gNum': '667', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7300.0, 'tokenId': '779795'},
{'albumId': 100513768, 'gId': 101052496, 'gName': '蓝日（NOVA）', 'gNum': '233', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7886.0, 'tokenId': '775768'},
{'albumId': 100513769, 'gId': 101056246, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1927', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 6980.0, 'tokenId': '1110022'},
{'albumId': 100513770, 'gId': 101056380, 'gName': '维洛（VELOZ）', 'gNum': '5', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 6980.0, 'tokenId': '773593'},
{'albumId': 100513771, 'gId': 101060426, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '1995', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7450.0, 'tokenId': '1242256'},
{'albumId': 100513712, 'gId': 100841402, 'gName': '林黛玉', 'gNum': '624', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 41666.0, 'tokenId': '742529'},
{'albumId': 100513713, 'gId': 100841658, 'gName': '薛宝钗', 'gNum': '180', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 17888.0, 'tokenId': '656484'},
{'albumId': 100513714, 'gId': 100842261, 'gName': '史湘云', 'gNum': '33', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18000.0, 'tokenId': '644846'},
{'albumId': 100513715, 'gId': 100844927, 'gName': '秦可卿', 'gNum': '1949', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10399.0, 'tokenId': '765563'},
{'albumId': 100513716, 'gId': 100845607, 'gName': '王熙凤', 'gNum': '574', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8200.0, 'tokenId': '657540'},
{'albumId': 100513717, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513718, 'gId': 100849300, 'gName': '贾探春', 'gNum': '157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8888.0, 'tokenId': '653221'},
{'albumId': 100513719, 'gId': 100851254, 'gName': '贾惜春', 'gNum': '56', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 11111.0, 'tokenId': '644083'},
{'albumId': 100513720, 'gId': 100853257, 'gName': '贾迎春', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8999.0, 'tokenId': '643686'},
{'albumId': 100513721, 'gId': 100856670, 'gName': '贾元春', 'gNum': '1360', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10099.0, 'tokenId': '723107'},
{'albumId': 100513722, 'gId': 100858246, 'gName': '李纨', 'gNum': '880', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 9887.0, 'tokenId': '660728'},
{'albumId': 100513723, 'gId': 100860147, 'gName': '妙玉', 'gNum': '725', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8888.0, 'tokenId': '658539'},
{'albumId': 100092612, 'gId': 100754384, 'gName': '经典熊', 'gNum': '132', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 43887.0, 'tokenId': '498029'},
{'albumId': 100092613, 'gId': 100755049, 'gName': '万圣熊', 'gNum': '441', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 16888.0, 'tokenId': '502528'},
{'albumId': 100092614, 'gId': 100755264, 'gName': '精灵熊', 'gNum': '54', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 16899.0, 'tokenId': '494468'},
{'albumId': 100092616, 'gId': 100756025, 'gName': '摇滚熊', 'gNum': '210', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7860.0, 'tokenId': '495801'},
{'albumId': 100092617, 'gId': 100757807, 'gName': '美女熊', 'gNum': '943', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7999.0, 'tokenId': '584502'},
{'albumId': 100092618, 'gId': 100758199, 'gName': '可可熊', 'gNum': '288', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 8000.0, 'tokenId': '496550'},
{'albumId': 100092619, 'gId': 100759054, 'gName': '迪奇克熊', 'gNum': '96', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7877.0, 'tokenId': '494479'},
{'albumId': 100092620, 'gId': 100760955, 'gName': '剑士熊', 'gNum': '947', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7999.0, 'tokenId': '584499'},
{'albumId': 100092622, 'gId': 100761269, 'gName': '全机甲熊', 'gNum': '215', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7899.0, 'tokenId': '495889'},
{'albumId': 100092624, 'gId': 100762221, 'gName': '斗士熊', 'gNum': '117', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7899.0, 'tokenId': '495530'},
{'albumId': 100092625, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092627, 'gId': 100764526, 'gName': '半机甲熊', 'gNum': '328', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7948.0, 'tokenId': '497583'},
{'albumId': 100092628, 'gId': 100766134, 'gName': '机器人熊', 'gNum': '888', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7900.0, 'tokenId': '553777'},
{'albumId': 100000317, 'gId': 100490278, 'gName': '同道大叔', 'gNum': '59', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 59999.0, 'tokenId': '255592'},
{'albumId': 100000316, 'gId': 100489824, 'gName': '大魔术师', 'gNum': '604', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 22699.0, 'tokenId': '349440'},
{'albumId': 100000315, 'gId': 100489013, 'gName': '奇幻马戏团', 'gNum': '792', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 22388.0, 'tokenId': '493015'},
{'albumId': 100000303, 'gId': 100468296, 'gName': '白羊座：加利斯', 'gNum': '400', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10000.0, 'tokenId': '257686'},
{'albumId': 100000318, 'gId': 100476143, 'gName': '金牛座：牛丢丢', 'gNum': '987', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 12888.0, 'tokenId': '352533'},
{'albumId': 100000319, 'gId': 100477862, 'gName': '双子座：猫院长', 'gNum': '1254', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 12588.0, 'tokenId': '584731'},
{'albumId': 100000306, 'gId': 100472795, 'gName': '巨蟹座：蛋丁', 'gNum': '543', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10000.0, 'tokenId': '260259'},
{'albumId': 100000307, 'gId': 100475028, 'gName': '狮子座：狮总裁', 'gNum': '1324', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10888.0, 'tokenId': '727354'},
{'albumId': 100000308, 'gId': 100478683, 'gName': '处女座：矮豆豆', 'gNum': '623', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10200.0, 'tokenId': '260867'},
{'albumId': 100000309, 'gId': 100480171, 'gName': '天秤座：窝窝鸡', 'gNum': '659', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11111.0, 'tokenId': '261891'},
{'albumId': 100000310, 'gId': 100482389, 'gName': '天蝎座：雷猴', 'gNum': '1425', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10222.0, 'tokenId': '986657'},
{'albumId': 100000311, 'gId': 100482952, 'gName': '射手座：格雷', 'gNum': '536', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9999.0, 'tokenId': '259833'},
{'albumId': 100000312, 'gId': 100483998, 'gName': '摩羯座：奋斗熊', 'gNum': '130', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11300.0, 'tokenId': '253847'},
{'albumId': 100000313, 'gId': 100486249, 'gName': '水瓶座：格白尼', 'gNum': '930', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10500.0, 'tokenId': '350487'},
{'albumId': 100000314, 'gId': 100487168, 'gName': '双鱼座：小超鱼', 'gNum': '398', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9887.0, 'tokenId': '257817'},
{'albumId': 100000233, 'gId': 100266889, 'gName': '斯派修姆光线', 'gNum': '19', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 73888.0, 'tokenId': '239350'},
{'albumId': 100000234, 'gId': 100267416, 'gName': '八分光轮', 'gNum': '197', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 26888.0, 'tokenId': '242526'},
{'albumId': 100000235, 'gId': 100268171, 'gName': '捕捉光环', 'gNum': '353', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 28567.0, 'tokenId': '250206'},
{'albumId': 100000236, 'gId': 100268427, 'gName': '奥特意念光线', 'gNum': '10', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 26666.0, 'tokenId': '238902'},
{'albumId': 100000237, 'gId': 100269501, 'gName': '奥特屏障', 'gNum': '485', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9500.0, 'tokenId': '252117'},
{'albumId': 100000238, 'gId': 100269977, 'gName': '空中撞击战法', 'gNum': '203', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9555.0, 'tokenId': '241460'},
{'albumId': 100000239, 'gId': 100270864, 'gName': '奥特念力', 'gNum': '332', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9777.0, 'tokenId': '243680'},
{'albumId': 100000240, 'gId': 100271479, 'gName': '奥特水流', 'gNum': '189', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9850.0, 'tokenId': '241602'},
{'albumId': 100000241, 'gId': 100272385, 'gName': '奥特瞬间移动', 'gNum': '337', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9666.0, 'tokenId': '244141'},
{'albumId': 100000242, 'gId': 100272875, 'gName': '奥特高速旋转', 'gNum': '69', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9580.0, 'tokenId': '239930'},
{'albumId': 100000243, 'gId': 100273573, 'gName': '巨大化能力', 'gNum': '9', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9755.0, 'tokenId': '238855'},
{'albumId': 100000244, 'gId': 100274484, 'gName': '碎裂光线', 'gNum': '162', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9644.0, 'tokenId': '240945'},
{'albumId': 100000245, 'gId': 100275251, 'gName': '奥特眼光线', 'gNum': '171', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9500.0, 'tokenId': '242119'},
{'albumId': 100000246, 'gId': 100276497, 'gName': '超级过肩摔', 'gNum': '659', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9696.0, 'tokenId': '554195'},
{'albumId': 100000247, 'gId': 100277267, 'gName': '防御能力', 'gNum': '671', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9888.0, 'tokenId': '665541'},
{'albumId': 100000248, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000249, 'gId': 100278307, 'gName': '奥特空中意念捕捉', 'gNum': '195', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 9550.0, 'tokenId': '241291'},
{'albumId': 100000180, 'gId': 100186969, 'gName': '木叶村众人', 'gNum': '58', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 94800.0, 'tokenId': '103716'},
{'albumId': 100000179, 'gId': 100186903, 'gName': '鸣人VS佐助', 'gNum': '392', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 22666.0, 'tokenId': '1414825'},
{'albumId': 100000178, 'gId': 100186434, 'gName': '奇拉比&鸣人', 'gNum': '323', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 22222.0, 'tokenId': '121489'},
{'albumId': 100000171, 'gId': 100179544, 'gName': '宇智波佐助', 'gNum': '398', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 9800.0, 'tokenId': '105606'},
{'albumId': 100000172, 'gId': 100180643, 'gName': '旗木卡卡西', 'gNum': '502', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 9666.0, 'tokenId': '106916'},
{'albumId': 100000173, 'gId': 100181816, 'gName': '自来也', 'gNum': '680', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 9866.0, 'tokenId': '109794'},
{'albumId': 100000174, 'gId': 100182891, 'gName': '波风水门', 'gNum': '760', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 9088.0, 'tokenId': '110615'},
{'albumId': 100000175, 'gId': 100183205, 'gName': '第七班', 'gNum': '79', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 9800.0, 'tokenId': '103169'},
{'albumId': 100000176, 'gId': 100184141, 'gName': '鸣人VS我爱罗', 'gNum': '20', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 9500.0, 'tokenId': '102762'},
{'albumId': 100000177, 'gId': 100185557, 'gName': '漩涡鸣人', 'gNum': '441', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 8988.0, 'tokenId': '105921'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143240, 'gName': '斯巴达（Sparta）', 'gNum': '34', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 60000.0, 'tokenId': '89760'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 86666.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 75000.0, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143646, 'gName': '麦克思（Max）', 'gNum': '140', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38888.0, 'tokenId': '90808'},
{'albumId': 100000158, 'gId': 100143757, 'gName': '萨德（Sade）', 'gNum': '69', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 34567.0, 'tokenId': '89851'},
{'albumId': 100000159, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000160, 'gId': 100144087, 'gName': '奇迹（Miracle）', 'gNum': '35', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38888.0, 'tokenId': '89540'},
{'albumId': 100000161, 'gId': 100144337, 'gName': '吉娜（Gina）', 'gNum': '103', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '90751'},
{'albumId': 100000162, 'gId': 100144544, 'gName': '桑迪（Sunday）', 'gNum': '128', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '90479'},
{'albumId': 100000163, 'gId': 100144724, 'gName': '格若瑞娅（Gloria）', 'gNum': '126', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26666.0, 'tokenId': '90474'},
{'albumId': 100000164, 'gId': 100144922, 'gName': '艾伯纳（Abner）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 29999.0, 'tokenId': '90882'},
{'albumId': 100000165, 'gId': 100145124, 'gName': '泡泡（Bubble）', 'gNum': '162', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 30000.0, 'tokenId': '102214'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101205034, 'gName': 'iBox-CyberMouse', 'gNum': '15936', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2685.0, 'tokenId': '890233'},
{'albumId': 100000323, 'gId': 100514829, 'gName': '张国荣公益数字藏品', 'gNum': '31', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 38888.0, 'tokenId': '665158'},
{'albumId': 100513824, 'gId': 101342244, 'gName': '五虎上将-黄忠', 'gNum': '202', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 58500.0, 'tokenId': '996058'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101726430, 'gName': 'Cece-plants', 'gNum': '1398', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 17666.0, 'tokenId': '1345728'},
{'albumId': 100513868, 'gId': 101831086, 'gName': 'Cece-cotton', 'gNum': '654', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 17777.0, 'tokenId': '1418116'},
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
