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
{'albumId': 100513847, 'gId': 101443853, 'gName': 'COSMOS-太空龙', 'gNum': '321', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10154081, 'ownerName': 'Pancya', 'priceCny': 19050.0, 'tokenId': '1103508'},
{'albumId': 100513848, 'gId': 101448050, 'gName': '鱼化寨由来', 'gNum': '1518', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10516687, 'ownerName': '张肉丸', 'priceCny': 13599.0, 'tokenId': '1101437'},
{'albumId': 100513850, 'gId': 101448838, 'gName': '迷幻梦境', 'gNum': '6', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 66666.0, 'tokenId': '1101877'},
{'albumId': 100513851, 'gId': 101449463, 'gName': 'Love-003', 'gNum': '331', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 29990.0, 'tokenId': '1493365'},
{'albumId': 100513852, 'gId': 101451741, 'gName': '蝴蝶精灵', 'gNum': '2009', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 27111.0, 'tokenId': '1109110'},
{'albumId': 100513853, 'gId': 101452756, 'gName': '情愫', 'gNum': '24', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 30999.0, 'tokenId': '1109560'},
{'albumId': 100099582, 'gId': 100825169, 'gName': '《山海经》-呲铁', 'gNum': '18', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 61666.0, 'tokenId': '513655'},
{'albumId': 100099599, 'gId': 100825785, 'gName': '《山海经》-狡', 'gNum': '39', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 32388.0, 'tokenId': '513775'},
{'albumId': 100000395, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000378, 'gId': 100589741, 'gName': '《山海经》-混沌', 'gNum': '3006', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4333.0, 'tokenId': '368529'},
{'albumId': 100513734, 'gId': 101004478, 'gName': '《山海经》-何罗鱼', 'gNum': '244', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 17500.0, 'tokenId': '736915'},
{'albumId': 100513733, 'gId': 101004137, 'gName': '《山海经》-雷神', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 83000.0, 'tokenId': '736469'},
{'albumId': 100513748, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513745, 'gId': 101017497, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '118', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10999.0, 'tokenId': '748598'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133334, 'gName': '冥王-哈迪斯', 'gNum': '460', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 78888.88, 'tokenId': '986412'},
{'albumId': 100513779, 'gId': 101134988, 'gName': '智慧女神-雅典娜', 'gNum': '474', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 87000.0, 'tokenId': '986453'},
{'albumId': 100513780, 'gId': 101136424, 'gName': '狩猎女神-阿尔忒弥斯', 'gNum': '270', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 96666.0, 'tokenId': '896350'},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 100000.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 100831514, 'gName': '金钱豹', 'gNum': '11', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 27777.0, 'tokenId': '519437'},
{'albumId': 100513396, 'gId': 100836621, 'gName': '一見有喜 平安長樂', 'gNum': '1096', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3870.0, 'tokenId': '522603'},
{'albumId': 100513397, 'gId': 100838258, 'gName': '一見有喜 平安長樂', 'gNum': '733', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3880.0, 'tokenId': '523908'},
{'albumId': 100513731, 'gId': 101002046, 'gName': '未来太空之十二大事件', 'gNum': '913', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 19400.0, 'tokenId': '736339'},
{'albumId': 100513736, 'gId': 101006818, 'gName': '月球探测器', 'gNum': '604', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12999.0, 'tokenId': '738003'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010811, 'gName': '功夫小子', 'gNum': '464', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8188.0, 'tokenId': '743055'},
{'albumId': 100513744, 'gId': 101017054, 'gName': '悟道小子', 'gNum': '149', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10666.0, 'tokenId': '747511'},
{'albumId': 100513727, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000128, 'gId': 100117974, 'gName': '《找自己》快乐版', 'gNum': '46', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 13777.0, 'tokenId': '59865'},
{'albumId': 100513752, 'gId': 101037741, 'gName': '万国争霸-资源徽章', 'gNum': '592', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 28800.0, 'tokenId': '767148'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 101218852, 'gName': '金瓜满载', 'gNum': '316', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 14999.0, 'tokenId': '908848'},
{'albumId': 100513795, 'gId': 101216884, 'gName': '森林聚会', 'gNum': '198', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 9400.0, 'tokenId': '907853'},
{'albumId': 100513796, 'gId': 101217114, 'gName': '异世界·海之城', 'gNum': '128', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 8888.0, 'tokenId': '907935'},
{'albumId': 100099867, 'gId': 100831052, 'gName': '泰迪熊-空投版', 'gNum': '4834', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 2096.0, 'tokenId': '519148'},
{'albumId': 100000396, 'gId': 100715491, 'gName': 'iBox宣传小标兵', 'gNum': '1384', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3720.0, 'tokenId': '491963'},
{'albumId': 100000190, 'gId': 100230019, 'gName': 'iBox-神牛降瑞', 'gNum': '4831', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1700.0, 'tokenId': '116572'},
{'albumId': 100000139, 'gId': 100132377, 'gName': 'iBox-金牛献福', 'gNum': '1225', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1880.0, 'tokenId': '74417'},
{'albumId': 100000388, 'gId': 100601295, 'gName': 'iBox-战牛无双', 'gNum': '2188', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1797.0, 'tokenId': '383874'},
{'albumId': 100000394, 'gId': 100710206, 'gName': 'iBox-翔牛摘星', 'gNum': '6599', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 900.0, 'tokenId': '486867'},
{'albumId': 100000383, 'gId': 100594033, 'gName': 'iBox-电牛放歌', 'gNum': '109', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1399.0, 'tokenId': '370051'},
{'albumId': 100000384, 'gId': 100596175, 'gName': 'iBox-电牛放歌', 'gNum': '251', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1333.33, 'tokenId': '372215'},
{'albumId': 100099573, 'gId': 100825053, 'gName': '集牛换虎-虎虎生威', 'gNum': '479', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 9998.0, 'tokenId': '513532'},
{'albumId': 100513807, 'gId': 101274931, 'gName': '大鱼', 'gNum': '995', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 24887.0, 'tokenId': '974990'},
{'albumId': 100513800, 'gId': 101219919, 'gName': '爱丽丝梦游仙境', 'gNum': '783', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 26123.0, 'tokenId': '911698'},
{'albumId': 100513802, 'gId': 101224445, 'gName': '五虎上将-赵云', 'gNum': '109', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 75555.0, 'tokenId': '913220'},
{'albumId': 100513803, 'gId': 101224776, 'gName': '思情郎 ', 'gNum': '240', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 18600.0, 'tokenId': '913682'},
{'albumId': 100513806, 'gId': 101272251, 'gName': 'iBox-赛博司芬克斯', 'gNum': '1315', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5275.0, 'tokenId': '973490'},
{'albumId': 100513822, 'gId': 101319332, 'gName': '五虎上将-马超', 'gNum': '230', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 44444.0, 'tokenId': '987271'},
{'albumId': 100513845, 'gId': 101441246, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '1714', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 19198.0, 'tokenId': '1495540'},
{'albumId': 100000169, 'gId': 100164472, 'gName': '闪电（Flash）', 'gNum': '336', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 1560.0, 'tokenId': '97734'},
{'albumId': 100000118, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513844, 'gId': 101434344, 'gName': '魅紫萄萄', 'gNum': '9812', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2098.99, 'tokenId': '1087516'},
{'albumId': 100513843, 'gId': 101423130, 'gName': '蕃红李李', 'gNum': '13598', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2687.0, 'tokenId': '1077193'},
{'albumId': 100513842, 'gId': 101400528, 'gName': '大芒妖妖', 'gNum': '5996', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2688.0, 'tokenId': '1054110'},
{'albumId': 100513726, 'gId': 100972238, 'gName': 'iBox−赛博边牧', 'gNum': '37060', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 405.0, 'tokenId': '688937'},
{'albumId': 100000335, 'gId': 100537280, 'gName': 'iBox-潮牛逐浪', 'gNum': '6527', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 610.0, 'tokenId': '329318'},
{'albumId': 100000254, 'gId': 100380744, 'gName': 'iBox-玄牛遂意', 'gNum': '9874', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 526.0, 'tokenId': '209071'},
{'albumId': 100000253, 'gId': 100353019, 'gName': 'iBox-灵牛来喜', 'gNum': '2149', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 665.0, 'tokenId': '177965'},
{'albumId': 100513724, 'gId': 100892041, 'gName': 'iBox-CyberTiger', 'gNum': '30563', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 519.0, 'tokenId': '610923'},
{'albumId': 100513750, 'gId': 101024748, 'gName': 'iBox−赛博蓝猫', 'gNum': '3478', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 825.0, 'tokenId': '763437'},
{'albumId': 100513774, 'gId': 101129576, 'gName': 'iBox−赛博布偶', 'gNum': '48345', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 480.0, 'tokenId': '831357'},
{'albumId': 100000393, 'gId': 100619943, 'gName': 'I‘m Sorry', 'gNum': '16336', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 366.0, 'tokenId': '400925'},
{'albumId': 100513804, 'gId': 101230486, 'gName': 'iBox-赛博加菲', 'gNum': '5550', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 468.88, 'tokenId': '930014'},
{'albumId': 100513805, 'gId': 101269384, 'gName': 'iBox-赛博哈士奇', 'gNum': '10448', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1109.0, 'tokenId': '967483'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101288232, 'gName': '玫瑰玫瑰我爱你', 'gNum': '444', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 54777.0, 'tokenId': '1110428'},
{'albumId': 100513814, 'gId': 101288484, 'gName': '夜上海', 'gNum': '96', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 8500.0, 'tokenId': '990118'},
{'albumId': 100513815, 'gId': 101290100, 'gName': '如果没有你', 'gNum': '812', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 8576.0, 'tokenId': '1338061'},
{'albumId': 100513816, 'gId': 101292429, 'gName': '俏冤家', 'gNum': '2241', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2715.0, 'tokenId': '995229'},
{'albumId': 100513820, 'gId': 101313719, 'gName': '好春宵', 'gNum': '3011', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2720.0, 'tokenId': '1003066'},
{'albumId': 100513818, 'gId': 101304948, 'gName': '蔷薇处处开', 'gNum': '914', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2700.0, 'tokenId': '990829'},
{'albumId': 100513759, 'gId': 101040445, 'gName': '伊爱娃（IARA）', 'gNum': '682', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 37000.0, 'tokenId': '1419220'},
{'albumId': 100513761, 'gId': 101040854, 'gName': '佛里奥索（FURIOSA）', 'gNum': '371', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 6999.0, 'tokenId': '832447'},
{'albumId': 100513762, 'gId': 101041819, 'gName': '贝贝（BEBE）', 'gNum': '586', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7600.0, 'tokenId': '892794'},
{'albumId': 100513763, 'gId': 101042719, 'gName': '普普拉（PURPURA）', 'gNum': '736', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2580.0, 'tokenId': '780856'},
{'albumId': 100513764, 'gId': 101045035, 'gName': '拉万达（LAVANDA）', 'gNum': '996', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2650.0, 'tokenId': '832595'},
{'albumId': 100513765, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513766, 'gId': 101050102, 'gName': '紫月（MINGUANTE）', 'gNum': '1951', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2600.0, 'tokenId': '1235459'},
{'albumId': 100513767, 'gId': 101050897, 'gName': '橙日（CRESCENTE）', 'gNum': '690', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2680.0, 'tokenId': '780011'},
{'albumId': 100513768, 'gId': 101053817, 'gName': '蓝日（NOVA）', 'gNum': '1554', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2628.0, 'tokenId': '891929'},
{'albumId': 100513769, 'gId': 101056085, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1766', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2665.0, 'tokenId': '910537'},
{'albumId': 100513770, 'gId': 101057612, 'gName': '维洛（VELOZ）', 'gNum': '1237', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2500.0, 'tokenId': '835196'},
{'albumId': 100513771, 'gId': 101059277, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '846', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2490.0, 'tokenId': '782061'},
{'albumId': 100513712, 'gId': 100840951, 'gName': '林黛玉', 'gNum': '173', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 29456.0, 'tokenId': '656335'},
{'albumId': 100513713, 'gId': 100842206, 'gName': '薛宝钗', 'gNum': '728', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7700.0, 'tokenId': '771053'},
{'albumId': 100513714, 'gId': 100842894, 'gName': '史湘云', 'gNum': '666', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7800.0, 'tokenId': '741084'},
{'albumId': 100513715, 'gId': 100844388, 'gName': '秦可卿', 'gNum': '1410', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4500.0, 'tokenId': '723376'},
{'albumId': 100513716, 'gId': 100845453, 'gName': '王熙凤', 'gNum': '420', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4188.0, 'tokenId': '655561'},
{'albumId': 100513717, 'gId': 100847727, 'gName': '贾巧姐', 'gNum': '639', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5180.0, 'tokenId': '657535'},
{'albumId': 100513718, 'gId': 100850238, 'gName': '贾探春', 'gNum': '1095', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4500.0, 'tokenId': '662431'},
{'albumId': 100513719, 'gId': 100851423, 'gName': '贾惜春', 'gNum': '225', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5100.0, 'tokenId': '653698'},
{'albumId': 100513720, 'gId': 100855123, 'gName': '贾迎春', 'gNum': '1869', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4200.0, 'tokenId': '747222'},
{'albumId': 100513721, 'gId': 100855942, 'gName': '贾元春', 'gNum': '632', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4200.0, 'tokenId': '657382'},
{'albumId': 100513722, 'gId': 100858478, 'gName': '李纨', 'gNum': '1112', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4311.0, 'tokenId': '663254'},
{'albumId': 100513723, 'gId': 100860040, 'gName': '妙玉', 'gNum': '618', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4200.0, 'tokenId': '657741'},
{'albumId': 100092612, 'gId': 100754425, 'gName': '经典熊', 'gNum': '173', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 31488.0, 'tokenId': '499234'},
{'albumId': 100092613, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092614, 'gId': 100755427, 'gName': '精灵熊', 'gNum': '217', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9000.0, 'tokenId': '498034'},
{'albumId': 100092616, 'gId': 100756655, 'gName': '摇滚熊', 'gNum': '840', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3599.0, 'tokenId': '531658'},
{'albumId': 100092617, 'gId': 100757843, 'gName': '美女熊', 'gNum': '979', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3700.0, 'tokenId': '742547'},
{'albumId': 100092618, 'gId': 100758212, 'gName': '可可熊', 'gNum': '301', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3649.0, 'tokenId': '496727'},
{'albumId': 100092619, 'gId': 100759191, 'gName': '迪奇克熊', 'gNum': '233', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3560.0, 'tokenId': '495764'},
{'albumId': 100092620, 'gId': 100760788, 'gName': '剑士熊', 'gNum': '780', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3599.0, 'tokenId': '512277'},
{'albumId': 100092622, 'gId': 100761951, 'gName': '全机甲熊', 'gNum': '897', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3590.0, 'tokenId': '554178'},
{'albumId': 100092624, 'gId': 100762194, 'gName': '斗士熊', 'gNum': '90', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3600.0, 'tokenId': '494472'},
{'albumId': 100092625, 'gId': 100763403, 'gName': '军团熊', 'gNum': '250', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3598.0, 'tokenId': '496231'},
{'albumId': 100092627, 'gId': 100764582, 'gName': '半机甲熊', 'gNum': '384', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3600.0, 'tokenId': '498404'},
{'albumId': 100092628, 'gId': 100766129, 'gName': '机器人熊', 'gNum': '883', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3595.0, 'tokenId': '553727'},
{'albumId': 100000317, 'gId': 100490670, 'gName': '同道大叔', 'gNum': '451', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 42800.0, 'tokenId': '374080'},
{'albumId': 100000316, 'gId': 100489300, 'gName': '大魔术师', 'gNum': '80', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9600.0, 'tokenId': '253842'},
{'albumId': 100000315, 'gId': 100488964, 'gName': '奇幻马戏团', 'gNum': '743', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9900.0, 'tokenId': '358110'},
{'albumId': 100000303, 'gId': 100469166, 'gName': '白羊座：加利斯', 'gNum': '1270', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5689.0, 'tokenId': '648692'},
{'albumId': 100000318, 'gId': 100475673, 'gName': '金牛座：牛丢丢', 'gNum': '517', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6800.0, 'tokenId': '259920'},
{'albumId': 100000319, 'gId': 100477533, 'gName': '双子座：猫院长', 'gNum': '925', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5665.0, 'tokenId': '352201'},
{'albumId': 100000306, 'gId': 100472254, 'gName': '巨蟹座：蛋丁', 'gNum': '2', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6999.0, 'tokenId': '252538'},
{'albumId': 100000307, 'gId': 100473717, 'gName': '狮子座：狮总裁', 'gNum': '13', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5399.0, 'tokenId': '252680'},
{'albumId': 100000308, 'gId': 100479497, 'gName': '处女座：矮豆豆', 'gNum': '1437', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6888.0, 'tokenId': '1235528'},
{'albumId': 100000309, 'gId': 100480910, 'gName': '天秤座：窝窝鸡', 'gNum': '1398', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5550.0, 'tokenId': '747920'},
{'albumId': 100000310, 'gId': 100482391, 'gName': '天蝎座：雷猴', 'gNum': '1427', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5286.0, 'tokenId': '1098773'},
{'albumId': 100000311, 'gId': 100482952, 'gName': '射手座：格雷', 'gNum': '536', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5799.0, 'tokenId': '259833'},
{'albumId': 100000312, 'gId': 100483917, 'gName': '摩羯座：奋斗熊', 'gNum': '49', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5799.0, 'tokenId': '253070'},
{'albumId': 100000313, 'gId': 100486735, 'gName': '水瓶座：格白尼', 'gNum': '1416', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7499.0, 'tokenId': '974167'},
{'albumId': 100000314, 'gId': 100487167, 'gName': '双鱼座：小超鱼', 'gNum': '397', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5199.0, 'tokenId': '257776'},
{'albumId': 100000233, 'gId': 100267080, 'gName': '斯派修姆光线', 'gNum': '210', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 65000.0, 'tokenId': '249607'},
{'albumId': 100000234, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000235, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000236, 'gId': 100268713, 'gName': '奥特意念光线', 'gNum': '296', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14288.0, 'tokenId': '246114'},
{'albumId': 100000237, 'gId': 100269361, 'gName': '奥特屏障', 'gNum': '345', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4666.0, 'tokenId': '244244'},
{'albumId': 100000238, 'gId': 100269780, 'gName': '空中撞击战法', 'gNum': '6', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4588.0, 'tokenId': '238840'},
{'albumId': 100000239, 'gId': 100270819, 'gName': '奥特念力', 'gNum': '287', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4700.0, 'tokenId': '242872'},
{'albumId': 100000240, 'gId': 100271536, 'gName': '奥特水流', 'gNum': '246', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4333.0, 'tokenId': '243005'},
{'albumId': 100000241, 'gId': 100272325, 'gName': '奥特瞬间移动', 'gNum': '277', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4599.0, 'tokenId': '243107'},
{'albumId': 100000242, 'gId': 100273156, 'gName': '奥特高速旋转', 'gNum': '350', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4350.0, 'tokenId': '244489'},
{'albumId': 100000243, 'gId': 100273988, 'gName': '巨大化能力', 'gNum': '424', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4700.0, 'tokenId': '249556'},
{'albumId': 100000244, 'gId': 100274446, 'gName': '碎裂光线', 'gNum': '124', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4599.0, 'tokenId': '240465'},
{'albumId': 100000245, 'gId': 100275388, 'gName': '奥特眼光线', 'gNum': '308', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4888.0, 'tokenId': '243633'},
{'albumId': 100000246, 'gId': 100276214, 'gName': '超级过肩摔', 'gNum': '376', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4500.0, 'tokenId': '244916'},
{'albumId': 100000247, 'gId': 100276606, 'gName': '防御能力', 'gNum': '10', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4500.0, 'tokenId': '239063'},
{'albumId': 100000248, 'gId': 100277789, 'gName': '光线白刃取', 'gNum': '435', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4598.0, 'tokenId': '248956'},
{'albumId': 100000249, 'gId': 100278622, 'gName': '奥特空中意念捕捉', 'gNum': '510', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4800.0, 'tokenId': '348371'},
{'albumId': 100000180, 'gId': 100186936, 'gName': '木叶村众人', 'gNum': '25', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 86666.66, 'tokenId': '103181'},
{'albumId': 100000179, 'gId': 100186630, 'gName': '鸣人VS佐助', 'gNum': '119', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 11799.0, 'tokenId': '104658'},
{'albumId': 100000178, 'gId': 100186486, 'gName': '奇拉比&鸣人', 'gNum': '375', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 10999.0, 'tokenId': '582593'},
{'albumId': 100000171, 'gId': 100179767, 'gName': '宇智波佐助', 'gNum': '621', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4350.0, 'tokenId': '107875'},
{'albumId': 100000172, 'gId': 100180935, 'gName': '旗木卡卡西', 'gNum': '794', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4480.0, 'tokenId': '126241'},
{'albumId': 100000173, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000174, 'gId': 100183104, 'gName': '波风水门', 'gNum': '973', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4597.0, 'tokenId': '1495503'},
{'albumId': 100000175, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000176, 'gId': 100184576, 'gName': '鸣人VS我爱罗', 'gNum': '455', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4600.0, 'tokenId': '105974'},
{'albumId': 100000177, 'gId': 100185379, 'gName': '漩涡鸣人', 'gNum': '263', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4450.0, 'tokenId': '104346'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143240, 'gName': '斯巴达（Sparta）', 'gNum': '34', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 61001.1, 'tokenId': '89760'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 58888.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 78880.11, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143546, 'gName': '麦克思（Max）', 'gNum': '40', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38000.0, 'tokenId': '89550'},
{'albumId': 100000158, 'gId': 100143827, 'gName': '萨德（Sade）', 'gNum': '139', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 18888.0, 'tokenId': '90550'},
{'albumId': 100000159, 'gId': 100144003, 'gName': '露娜（Luna）', 'gNum': '133', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 18888.0, 'tokenId': '90657'},
{'albumId': 100000160, 'gId': 100144196, 'gName': '奇迹（Miracle）', 'gNum': '144', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 40000.0, 'tokenId': '90801'},
{'albumId': 100000161, 'gId': 100144301, 'gName': '吉娜（Gina）', 'gNum': '67', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26555.0, 'tokenId': '89899'},
{'albumId': 100000162, 'gId': 100144466, 'gName': '桑迪（Sunday）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 29999.0, 'tokenId': '89621'},
{'albumId': 100000163, 'gId': 100144724, 'gName': '格若瑞娅（Gloria）', 'gNum': '126', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 49999.0, 'tokenId': '90474'},
{'albumId': 100000164, 'gId': 100144914, 'gName': '艾伯纳（Abner）', 'gNum': '134', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 20999.99, 'tokenId': '90543'},
{'albumId': 100000165, 'gId': 100145055, 'gName': '泡泡（Bubble）', 'gNum': '93', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38888.0, 'tokenId': '90148'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101192060, 'gName': 'iBox-CyberMouse', 'gNum': '2962', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1250.0, 'tokenId': '878828'},
{'albumId': 100000323, 'gId': 100514809, 'gName': '张国荣公益数字藏品', 'gNum': '11', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 24999.0, 'tokenId': '584647'},
{'albumId': 100513824, 'gId': 101342383, 'gName': '五虎上将-黄忠', 'gNum': '341', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 43333.0, 'tokenId': '995963'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101727128, 'gName': 'Cece-plants', 'gNum': '2096', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 11288.0, 'tokenId': '1343388'},
{'albumId': 100513868, 'gId': 101832933, 'gName': 'Cece-cotton', 'gNum': '2501', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 11278.0, 'tokenId': '1416354'},
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
