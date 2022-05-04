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
{'albumId': 100099582, 'gId': 100825233, 'gName': '《山海经》-呲铁', 'gNum': '82', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 58999.0, 'tokenId': '513717'},
{'albumId': 100099599, 'gId': 100825877, 'gName': '《山海经》-狡', 'gNum': '131', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 35000.0, 'tokenId': '513864'},
{'albumId': 100000395, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000378, 'gId': 100592749, 'gName': '《山海经》-混沌', 'gNum': '6014', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4400.0, 'tokenId': '367924'},
{'albumId': 100513734, 'gId': 101004446, 'gName': '《山海经》-何罗鱼', 'gNum': '212', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18550.0, 'tokenId': '736898'},
{'albumId': 100513733, 'gId': 101004137, 'gName': '《山海经》-雷神', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 84888.0, 'tokenId': '736469'},
{'albumId': 100513748, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513745, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133383, 'gName': '冥王-哈迪斯', 'gNum': '509', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 75558.58, 'tokenId': '986547'},
{'albumId': 100513779, 'gId': 101134623, 'gName': '智慧女神-雅典娜', 'gNum': '109', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 99800.0, 'tokenId': '836692'},
{'albumId': 100513780, 'gId': 101136424, 'gName': '狩猎女神-阿尔忒弥斯', 'gNum': '270', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 96666.0, 'tokenId': '896350'},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 99999.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513396, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513397, 'gId': 100838198, 'gName': '一見有喜 平安長樂', 'gNum': '673', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3660.0, 'tokenId': '523851'},
{'albumId': 100513731, 'gId': 101002555, 'gName': '未来太空之十二大事件', 'gNum': '1422', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 19999.99, 'tokenId': '737430'},
{'albumId': 100513736, 'gId': 101007564, 'gName': '月球探测器', 'gNum': '1350', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13665.0, 'tokenId': '738869'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010811, 'gName': '功夫小子', 'gNum': '464', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8588.0, 'tokenId': '743055'},
{'albumId': 100513744, 'gId': 101016921, 'gName': '悟道小子', 'gNum': '16', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10000.0, 'tokenId': '747424'},
{'albumId': 100513727, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000128, 'gId': 100117984, 'gName': '《找自己》快乐版', 'gNum': '56', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 12999.0, 'tokenId': '59871'},
{'albumId': 100513752, 'gId': 101037257, 'gName': '万国争霸-资源徽章', 'gNum': '108', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 25000.0, 'tokenId': '766683'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 101218629, 'gName': '金瓜满载', 'gNum': '93', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 14577.0, 'tokenId': '908458'},
{'albumId': 100513795, 'gId': 101216778, 'gName': '森林聚会', 'gNum': '92', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 8400.0, 'tokenId': '907784'},
{'albumId': 100513796, 'gId': 101217142, 'gName': '异世界·海之城', 'gNum': '156', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 7958.0, 'tokenId': '907921'},
{'albumId': 100099867, 'gId': 100830845, 'gName': '泰迪熊-空投版', 'gNum': '4627', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 2290.0, 'tokenId': '518951'},
{'albumId': 100000396, 'gId': 100715045, 'gName': 'iBox宣传小标兵', 'gNum': '938', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3600.0, 'tokenId': '491369'},
{'albumId': 100000190, 'gId': 100226324, 'gName': 'iBox-神牛降瑞', 'gNum': '1136', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1600.0, 'tokenId': '112185'},
{'albumId': 100000139, 'gId': 100131845, 'gName': 'iBox-金牛献福', 'gNum': '693', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1899.0, 'tokenId': '75489'},
{'albumId': 100000388, 'gId': 100599790, 'gName': 'iBox-战牛无双', 'gNum': '683', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1845.0, 'tokenId': '382399'},
{'albumId': 100000394, 'gId': 100711347, 'gName': 'iBox-翔牛摘星', 'gNum': '7740', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 950.0, 'tokenId': '487981'},
{'albumId': 100000383, 'gId': 100594799, 'gName': 'iBox-电牛放歌', 'gNum': '875', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1350.0, 'tokenId': '370809'},
{'albumId': 100000384, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100099573, 'gId': 100825013, 'gName': '集牛换虎-虎虎生威', 'gNum': '439', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7600.0, 'tokenId': '513485'},
{'albumId': 100513807, 'gId': 101274552, 'gName': '大鱼', 'gNum': '616', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 25368.88, 'tokenId': '974803'},
{'albumId': 100513800, 'gId': 101219929, 'gName': '爱丽丝梦游仙境', 'gNum': '793', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 25178.0, 'tokenId': '911772'},
{'albumId': 100513802, 'gId': 101224444, 'gName': '五虎上将-赵云', 'gNum': '108', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 82999.0, 'tokenId': '913221'},
{'albumId': 100513803, 'gId': 101224882, 'gName': '思情郎 ', 'gNum': '346', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 16888.0, 'tokenId': '976188'},
{'albumId': 100513806, 'gId': 101273549, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2613', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5299.0, 'tokenId': '974126'},
{'albumId': 100513822, 'gId': 101319537, 'gName': '五虎上将-马超', 'gNum': '435', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 42888.0, 'tokenId': '987474'},
{'albumId': 100513845, 'gId': 101440440, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '908', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 20222.0, 'tokenId': '1097268'},
{'albumId': 100000169, 'gId': 100167520, 'gName': '闪电（Flash）', 'gNum': '3384', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 1466.0, 'tokenId': '93817'},
{'albumId': 100000118, 'gId': 100044425, 'gName': 'iBox 002号空投版', 'gNum': '303', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 2550.0, 'tokenId': '57146'},
{'albumId': 100513844, 'gId': 101435738, 'gName': '魅紫萄萄', 'gNum': '11206', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2196.0, 'tokenId': '1088367'},
{'albumId': 100513843, 'gId': 101414765, 'gName': '蕃红李李', 'gNum': '5233', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2588.0, 'tokenId': '1069732'},
{'albumId': 100513842, 'gId': 101398227, 'gName': '大芒妖妖', 'gNum': '3695', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2508.0, 'tokenId': '1064044'},
{'albumId': 100513726, 'gId': 100957359, 'gName': 'iBox−赛博边牧', 'gNum': '22181', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 299.99, 'tokenId': '706117'},
{'albumId': 100000335, 'gId': 100537855, 'gName': 'iBox-潮牛逐浪', 'gNum': '7102', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 717.0, 'tokenId': '340568'},
{'albumId': 100000254, 'gId': 100386456, 'gName': 'iBox-玄牛遂意', 'gNum': '15586', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 388.0, 'tokenId': '214112'},
{'albumId': 100000253, 'gId': 100367097, 'gName': 'iBox-灵牛来喜', 'gNum': '16227', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 725.0, 'tokenId': '192272'},
{'albumId': 100513724, 'gId': 100881119, 'gName': 'iBox-CyberTiger', 'gNum': '19641', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 491.0, 'tokenId': '605298'},
{'albumId': 100513750, 'gId': 101031228, 'gName': 'iBox−赛博蓝猫', 'gNum': '9958', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 860.0, 'tokenId': '758164'},
{'albumId': 100513774, 'gId': 101112343, 'gName': 'iBox−赛博布偶', 'gNum': '31112', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 488.0, 'tokenId': '807478'},
{'albumId': 100000393, 'gId': 100631742, 'gName': 'I‘m Sorry', 'gNum': '28135', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 200.0, 'tokenId': '412625'},
{'albumId': 100513804, 'gId': 101248750, 'gName': 'iBox-赛博加菲', 'gNum': '23814', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 509.0, 'tokenId': '946875'},
{'albumId': 100513805, 'gId': 101262180, 'gName': 'iBox-赛博哈士奇', 'gNum': '3244', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1179.0, 'tokenId': '969581'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101287858, 'gName': '玫瑰玫瑰我爱你', 'gNum': '70', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 51886.0, 'tokenId': '991143'},
{'albumId': 100513814, 'gId': 101288908, 'gName': '夜上海', 'gNum': '520', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7999.0, 'tokenId': '1096055'},
{'albumId': 100513815, 'gId': 101290058, 'gName': '如果没有你', 'gNum': '770', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7999.0, 'tokenId': '1240300'},
{'albumId': 100513816, 'gId': 101291932, 'gName': '俏冤家', 'gNum': '1744', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2919.0, 'tokenId': '993599'},
{'albumId': 100513820, 'gId': 101316297, 'gName': '好春宵', 'gNum': '5589', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2888.0, 'tokenId': '1235823'},
{'albumId': 100513818, 'gId': 101304329, 'gName': '蔷薇处处开', 'gNum': '295', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2788.0, 'tokenId': '988676'},
{'albumId': 100513759, 'gId': 101040424, 'gName': '伊爱娃（IARA）', 'gNum': '661', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 37777.0, 'tokenId': '1235908'},
{'albumId': 100513761, 'gId': 101040683, 'gName': '佛里奥索（FURIOSA）', 'gNum': '200', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7538.88, 'tokenId': '778602'},
{'albumId': 100513762, 'gId': 101041514, 'gName': '贝贝（BEBE）', 'gNum': '281', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7698.0, 'tokenId': '781159'},
{'albumId': 100513763, 'gId': 101043861, 'gName': '普普拉（PURPURA）', 'gNum': '1878', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2548.0, 'tokenId': '1005206'},
{'albumId': 100513764, 'gId': 101044182, 'gName': '拉万达（LAVANDA）', 'gNum': '143', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2545.0, 'tokenId': '775376'},
{'albumId': 100513765, 'gId': 101046822, 'gName': '布兰卡（BRANCA）', 'gNum': '727', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2799.0, 'tokenId': '781284'},
{'albumId': 100513766, 'gId': 101050058, 'gName': '紫月（MINGUANTE）', 'gNum': '1907', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2548.0, 'tokenId': '1095705'},
{'albumId': 100513767, 'gId': 101051387, 'gName': '橙日（CRESCENTE）', 'gNum': '1180', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2599.0, 'tokenId': '833959'},
{'albumId': 100513768, 'gId': 101054150, 'gName': '蓝日（NOVA）', 'gNum': '1887', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2650.0, 'tokenId': '1001946'},
{'albumId': 100513769, 'gId': 101054373, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '54', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2600.0, 'tokenId': '774105'},
{'albumId': 100513770, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513771, 'gId': 101059007, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '576', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2600.0, 'tokenId': '779304'},
{'albumId': 100513712, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513713, 'gId': 100842219, 'gName': '薛宝钗', 'gNum': '741', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8000.0, 'tokenId': '912629'},
{'albumId': 100513714, 'gId': 100842698, 'gName': '史湘云', 'gNum': '470', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8399.0, 'tokenId': '664590'},
{'albumId': 100513715, 'gId': 100844982, 'gName': '秦可卿', 'gNum': '2004', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4688.0, 'tokenId': '770969'},
{'albumId': 100513716, 'gId': 100845116, 'gName': '王熙凤', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4598.99, 'tokenId': '644489'},
{'albumId': 100513717, 'gId': 100848867, 'gName': '贾巧姐', 'gNum': '1779', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5298.0, 'tokenId': '739893'},
{'albumId': 100513718, 'gId': 100850238, 'gName': '贾探春', 'gNum': '1095', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5200.0, 'tokenId': '662431'},
{'albumId': 100513719, 'gId': 100851636, 'gName': '贾惜春', 'gNum': '438', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5299.0, 'tokenId': '656789'},
{'albumId': 100513720, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513721, 'gId': 100855326, 'gName': '贾元春', 'gNum': '16', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4600.0, 'tokenId': '643800'},
{'albumId': 100513722, 'gId': 100857470, 'gName': '李纨', 'gNum': '104', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4800.0, 'tokenId': '644670'},
{'albumId': 100513723, 'gId': 100860382, 'gName': '妙玉', 'gNum': '960', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5279.0, 'tokenId': '661470'},
{'albumId': 100092612, 'gId': 100754414, 'gName': '经典熊', 'gNum': '162', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 32499.0, 'tokenId': '498910'},
{'albumId': 100092613, 'gId': 100755179, 'gName': '万圣熊', 'gNum': '571', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9488.58, 'tokenId': '769561'},
{'albumId': 100092614, 'gId': 100755779, 'gName': '精灵熊', 'gNum': '569', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9500.0, 'tokenId': '743737'},
{'albumId': 100092616, 'gId': 100756495, 'gName': '摇滚熊', 'gNum': '680', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3888.0, 'tokenId': '501764'},
{'albumId': 100092617, 'gId': 100756912, 'gName': '美女熊', 'gNum': '48', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3900.0, 'tokenId': '494166'},
{'albumId': 100092618, 'gId': 100758055, 'gName': '可可熊', 'gNum': '144', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3998.0, 'tokenId': '495723'},
{'albumId': 100092619, 'gId': 100759087, 'gName': '迪奇克熊', 'gNum': '129', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3850.0, 'tokenId': '494777'},
{'albumId': 100092620, 'gId': 100760875, 'gName': '剑士熊', 'gNum': '867', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3799.0, 'tokenId': '552860'},
{'albumId': 100092622, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092624, 'gId': 100762920, 'gName': '斗士熊', 'gNum': '816', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3950.0, 'tokenId': '531569'},
{'albumId': 100092625, 'gId': 100763646, 'gName': '军团熊', 'gNum': '493', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3888.0, 'tokenId': '499671'},
{'albumId': 100092627, 'gId': 100764538, 'gName': '半机甲熊', 'gNum': '340', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3888.0, 'tokenId': '497686'},
{'albumId': 100092628, 'gId': 100765603, 'gName': '机器人熊', 'gNum': '357', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3799.0, 'tokenId': '497889'},
{'albumId': 100000317, 'gId': 100490235, 'gName': '同道大叔', 'gNum': '16', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 41666.0, 'tokenId': '252986'},
{'albumId': 100000316, 'gId': 100489243, 'gName': '大魔术师', 'gNum': '23', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9098.0, 'tokenId': '252929'},
{'albumId': 100000315, 'gId': 100488914, 'gName': '奇幻马戏团', 'gNum': '693', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 8886.0, 'tokenId': '354073'},
{'albumId': 100000303, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000318, 'gId': 100475673, 'gName': '金牛座：牛丢丢', 'gNum': '517', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7250.0, 'tokenId': '259920'},
{'albumId': 100000319, 'gId': 100476848, 'gName': '双子座：猫院长', 'gNum': '240', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 4900.0, 'tokenId': '255549'},
{'albumId': 100000306, 'gId': 100473018, 'gName': '巨蟹座：蛋丁', 'gNum': '766', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7548.88, 'tokenId': '346691'},
{'albumId': 100000307, 'gId': 100473717, 'gName': '狮子座：狮总裁', 'gNum': '13', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5399.0, 'tokenId': '252680'},
{'albumId': 100000308, 'gId': 100479497, 'gName': '处女座：矮豆豆', 'gNum': '1437', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5618.0, 'tokenId': '1235528'},
{'albumId': 100000309, 'gId': 100480910, 'gName': '天秤座：窝窝鸡', 'gNum': '1398', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5995.0, 'tokenId': '747920'},
{'albumId': 100000310, 'gId': 100481957, 'gName': '天蝎座：雷猴', 'gNum': '993', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5999.0, 'tokenId': '353431'},
{'albumId': 100000311, 'gId': 100482952, 'gName': '射手座：格雷', 'gNum': '536', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5999.0, 'tokenId': '259833'},
{'albumId': 100000312, 'gId': 100483987, 'gName': '摩羯座：奋斗熊', 'gNum': '119', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5988.0, 'tokenId': '253758'},
{'albumId': 100000313, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000314, 'gId': 100487013, 'gName': '双鱼座：小超鱼', 'gNum': '243', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5888.0, 'tokenId': '255054'},
{'albumId': 100000233, 'gId': 100267103, 'gName': '斯派修姆光线', 'gNum': '233', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 68888.0, 'tokenId': '261723'},
{'albumId': 100000234, 'gId': 100267267, 'gName': '八分光轮', 'gNum': '48', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14999.0, 'tokenId': '239655'},
{'albumId': 100000235, 'gId': 100267916, 'gName': '捕捉光环', 'gNum': '98', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15200.0, 'tokenId': '240743'},
{'albumId': 100000236, 'gId': 100268719, 'gName': '奥特意念光线', 'gNum': '302', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15000.0, 'tokenId': '246196'},
{'albumId': 100000237, 'gId': 100269757, 'gName': '奥特屏障', 'gNum': '741', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4999.0, 'tokenId': '1423513'},
{'albumId': 100000238, 'gId': 100270208, 'gName': '空中撞击战法', 'gNum': '434', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4845.0, 'tokenId': '249188'},
{'albumId': 100000239, 'gId': 100271176, 'gName': '奥特念力', 'gNum': '644', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4888.0, 'tokenId': '493617'},
{'albumId': 100000240, 'gId': 100271654, 'gName': '奥特水流', 'gNum': '364', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5198.0, 'tokenId': '245040'},
{'albumId': 100000241, 'gId': 100272593, 'gName': '奥特瞬间移动', 'gNum': '545', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5099.0, 'tokenId': '349881'},
{'albumId': 100000242, 'gId': 100273273, 'gName': '奥特高速旋转', 'gNum': '467', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5100.0, 'tokenId': '250224'},
{'albumId': 100000243, 'gId': 100273716, 'gName': '巨大化能力', 'gNum': '152', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5300.0, 'tokenId': '241516'},
{'albumId': 100000244, 'gId': 100274967, 'gName': '碎裂光线', 'gNum': '645', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4800.0, 'tokenId': '493564'},
{'albumId': 100000245, 'gId': 100275824, 'gName': '奥特眼光线', 'gNum': '744', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4998.0, 'tokenId': '1104193'},
{'albumId': 100000246, 'gId': 100276287, 'gName': '超级过肩摔', 'gNum': '449', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5300.0, 'tokenId': '249720'},
{'albumId': 100000247, 'gId': 100276655, 'gName': '防御能力', 'gNum': '59', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4850.0, 'tokenId': '239756'},
{'albumId': 100000248, 'gId': 100277610, 'gName': '光线白刃取', 'gNum': '256', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5188.0, 'tokenId': '242839'},
{'albumId': 100000249, 'gId': 100278425, 'gName': '奥特空中意念捕捉', 'gNum': '313', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5166.0, 'tokenId': '243556'},
{'albumId': 100000180, 'gId': 100187074, 'gName': '木叶村众人', 'gNum': '163', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 88000.0, 'tokenId': '107794'},
{'albumId': 100000179, 'gId': 100186902, 'gName': '鸣人VS佐助', 'gNum': '391', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 11999.0, 'tokenId': '1345509'},
{'albumId': 100000178, 'gId': 100186302, 'gName': '奇拉比&鸣人', 'gNum': '191', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 12500.0, 'tokenId': '106388'},
{'albumId': 100000171, 'gId': 100179597, 'gName': '宇智波佐助', 'gNum': '451', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4650.0, 'tokenId': '106119'},
{'albumId': 100000172, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000173, 'gId': 100181443, 'gName': '自来也', 'gNum': '307', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5399.0, 'tokenId': '104850'},
{'albumId': 100000174, 'gId': 100182161, 'gName': '波风水门', 'gNum': '30', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4820.0, 'tokenId': '102900'},
{'albumId': 100000175, 'gId': 100184001, 'gName': '第七班', 'gNum': '875', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4888.0, 'tokenId': '262122'},
{'albumId': 100000176, 'gId': 100184643, 'gName': '鸣人VS我爱罗', 'gNum': '522', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4799.0, 'tokenId': '106972'},
{'albumId': 100000177, 'gId': 100185344, 'gName': '漩涡鸣人', 'gNum': '228', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4847.0, 'tokenId': '104050'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143210, 'gName': '斯巴达（Sparta）', 'gNum': '4', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.66, 'tokenId': '89257'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143423, 'gName': '迪赛尔（Diesel）', 'gNum': '17', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 99999.0, 'tokenId': '89506'},
{'albumId': 100000157, 'gId': 100143546, 'gName': '麦克思（Max）', 'gNum': '40', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38000.0, 'tokenId': '89550'},
{'albumId': 100000158, 'gId': 100143830, 'gName': '萨德（Sade）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 23333.33, 'tokenId': '90848'},
{'albumId': 100000159, 'gId': 100144003, 'gName': '露娜（Luna）', 'gNum': '133', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 30888.88, 'tokenId': '90657'},
{'albumId': 100000160, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000161, 'gId': 100144285, 'gName': '吉娜（Gina）', 'gNum': '51', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26666.0, 'tokenId': '89687'},
{'albumId': 100000162, 'gId': 100144466, 'gName': '桑迪（Sunday）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 27777.0, 'tokenId': '89621'},
{'albumId': 100000163, 'gId': 100144643, 'gName': '格若瑞娅（Gloria）', 'gNum': '45', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 58888.0, 'tokenId': '90789'},
{'albumId': 100000164, 'gId': 100144922, 'gName': '艾伯纳（Abner）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 28888.88, 'tokenId': '90882'},
{'albumId': 100000165, 'gId': 100144963, 'gName': '泡泡（Bubble）', 'gNum': '1', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '89175'},
{'albumId': 100513784, 'gId': 101198492, 'gName': 'iBox-CyberMouse', 'gNum': '9394', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 890.0, 'tokenId': '879666'},
{'albumId': 100000323, 'gId': 100514813, 'gName': '张国荣公益数字藏品', 'gNum': '15', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 26500.0, 'tokenId': '665147'},
{'albumId': 100513824, 'gId': 101342519, 'gName': '五虎上将-黄忠', 'gNum': '477', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 44779.0, 'tokenId': '996214'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101725315, 'gName': 'Cece-plants', 'gNum': '283', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 11111.11, 'tokenId': '1345746'},
{'albumId': 100513868, 'gId': 101830680, 'gName': 'Cece-cotton', 'gNum': '248', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 10999.0, 'tokenId': '1418175'},
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
