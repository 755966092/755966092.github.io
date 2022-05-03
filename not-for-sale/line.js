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
{'albumId': 100099582, 'gId': 100825233, 'gName': '《山海经》-呲铁', 'gNum': '82', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 58888.0, 'tokenId': '513717'},
{'albumId': 100099599, 'gId': 100825932, 'gName': '《山海经》-狡', 'gNum': '186', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 32222.0, 'tokenId': '513920'},
{'albumId': 100000395, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000378, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513734, 'gId': 101004725, 'gName': '《山海经》-何罗鱼', 'gNum': '491', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 17488.0, 'tokenId': '737360'},
{'albumId': 100513733, 'gId': 101004139, 'gName': '《山海经》-雷神', 'gNum': '5', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 86666.0, 'tokenId': '736471'},
{'albumId': 100513748, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513745, 'gId': 101017746, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '367', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12887.0, 'tokenId': '748568'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133334, 'gName': '冥王-哈迪斯', 'gNum': '460', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 78888.88, 'tokenId': '986412'},
{'albumId': 100513779, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513780, 'gId': 101136424, 'gName': '狩猎女神-阿尔忒弥斯', 'gNum': '270', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 96666.0, 'tokenId': '896350'},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 99999.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 100831600, 'gName': '金钱豹', 'gNum': '97', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 24988.0, 'tokenId': '519511'},
{'albumId': 100513396, 'gId': 100836651, 'gName': '一見有喜 平安長樂', 'gNum': '1126', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3580.0, 'tokenId': '522632'},
{'albumId': 100513397, 'gId': 100838652, 'gName': '一見有喜 平安長樂', 'gNum': '1127', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3500.0, 'tokenId': '524293'},
{'albumId': 100513731, 'gId': 101001998, 'gName': '未来太空之十二大事件', 'gNum': '865', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 18000.0, 'tokenId': '736289'},
{'albumId': 100513736, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010892, 'gName': '功夫小子', 'gNum': '545', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7650.0, 'tokenId': '742909'},
{'albumId': 100513744, 'gId': 101017254, 'gName': '悟道小子', 'gNum': '349', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10666.0, 'tokenId': '747645'},
{'albumId': 100513727, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000128, 'gId': 100117984, 'gName': '《找自己》快乐版', 'gNum': '56', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 12999.0, 'tokenId': '59871'},
{'albumId': 100513752, 'gId': 101037317, 'gName': '万国争霸-资源徽章', 'gNum': '168', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 22999.0, 'tokenId': '766729'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513798, 'gId': 101218438, 'gName': '秋色斑斓', 'gNum': '402', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 14777.0, 'tokenId': '909268'},
{'albumId': 100513799, 'gId': 101218805, 'gName': '金瓜满载', 'gNum': '269', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 13456.0, 'tokenId': '908571'},
{'albumId': 100513795, 'gId': 101216775, 'gName': '森林聚会', 'gNum': '89', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 8000.0, 'tokenId': '907767'},
{'albumId': 100513796, 'gId': 101217378, 'gName': '异世界·海之城', 'gNum': '392', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 7999.0, 'tokenId': '908123'},
{'albumId': 100099867, 'gId': 100829771, 'gName': '泰迪熊-空投版', 'gNum': '3553', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 2300.0, 'tokenId': '517904'},
{'albumId': 100000396, 'gId': 100715000, 'gName': 'iBox宣传小标兵', 'gNum': '893', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3555.0, 'tokenId': '491326'},
{'albumId': 100000190, 'gId': 100225267, 'gName': 'iBox-神牛降瑞', 'gNum': '79', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1688.0, 'tokenId': '111298'},
{'albumId': 100000139, 'gId': 100131787, 'gName': 'iBox-金牛献福', 'gNum': '635', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1888.0, 'tokenId': '75443'},
{'albumId': 100000388, 'gId': 100600547, 'gName': 'iBox-战牛无双', 'gNum': '1440', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1816.0, 'tokenId': '383128'},
{'albumId': 100000394, 'gId': 100709125, 'gName': 'iBox-翔牛摘星', 'gNum': '5518', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 880.0, 'tokenId': '485809'},
{'albumId': 100000383, 'gId': 100595309, 'gName': 'iBox-电牛放歌', 'gNum': '1385', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1487.0, 'tokenId': '371314'},
{'albumId': 100000384, 'gId': 100596892, 'gName': 'iBox-电牛放歌', 'gNum': '968', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1499.0, 'tokenId': '372917'},
{'albumId': 100099573, 'gId': 100824602, 'gName': '集牛换虎-虎虎生威', 'gNum': '28', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7500.0, 'tokenId': '513083'},
{'albumId': 100513807, 'gId': 101274404, 'gName': '大鱼', 'gNum': '468', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 24400.0, 'tokenId': '974911'},
{'albumId': 100513800, 'gId': 101220355, 'gName': '爱丽丝梦游仙境', 'gNum': '1219', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 25000.0, 'tokenId': '912113'},
{'albumId': 100513802, 'gId': 101224417, 'gName': '五虎上将-赵云', 'gNum': '81', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 80000.0, 'tokenId': '913303'},
{'albumId': 100513803, 'gId': 101224595, 'gName': '思情郎 ', 'gNum': '59', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 17288.0, 'tokenId': '913571'},
{'albumId': 100513806, 'gId': 101273446, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2510', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5288.0, 'tokenId': '973749'},
{'albumId': 100513822, 'gId': 101319413, 'gName': '五虎上将-马超', 'gNum': '311', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 42888.0, 'tokenId': '987210'},
{'albumId': 100513845, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000169, 'gId': 100166351, 'gName': '闪电（Flash）', 'gNum': '2215', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 1450.0, 'tokenId': '92882'},
{'albumId': 100000118, 'gId': 100045961, 'gName': 'iBox 002号空投版', 'gNum': '1839', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 2499.0, 'tokenId': '59720'},
{'albumId': 100513844, 'gId': 101431926, 'gName': '魅紫萄萄', 'gNum': '7394', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2158.0, 'tokenId': '1085970'},
{'albumId': 100513843, 'gId': 101410882, 'gName': '蕃红李李', 'gNum': '1350', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2423.0, 'tokenId': '1066804'},
{'albumId': 100513842, 'gId': 101406171, 'gName': '大芒妖妖', 'gNum': '11639', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2400.0, 'tokenId': '1057610'},
{'albumId': 100513726, 'gId': 100957359, 'gName': 'iBox−赛博边牧', 'gNum': '22181', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 299.99, 'tokenId': '706117'},
{'albumId': 100000335, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000254, 'gId': 100386456, 'gName': 'iBox-玄牛遂意', 'gNum': '15586', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 388.0, 'tokenId': '214112'},
{'albumId': 100000253, 'gId': 100364043, 'gName': 'iBox-灵牛来喜', 'gNum': '13173', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 674.0, 'tokenId': '188646'},
{'albumId': 100513724, 'gId': 100906349, 'gName': 'iBox-CyberTiger', 'gNum': '44871', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 418.0, 'tokenId': '632013'},
{'albumId': 100513750, 'gId': 101027778, 'gName': 'iBox−赛博蓝猫', 'gNum': '6508', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 770.0, 'tokenId': '755267'},
{'albumId': 100513774, 'gId': 101105666, 'gName': 'iBox−赛博布偶', 'gNum': '24435', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 420.0, 'tokenId': '812279'},
{'albumId': 100000393, 'gId': 100631742, 'gName': 'I‘m Sorry', 'gNum': '28135', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 200.0, 'tokenId': '412625'},
{'albumId': 100513804, 'gId': 101233153, 'gName': 'iBox-赛博加菲', 'gNum': '8217', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 450.0, 'tokenId': '932504'},
{'albumId': 100513805, 'gId': 101260329, 'gName': 'iBox-赛博哈士奇', 'gNum': '1393', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1040.0, 'tokenId': '968866'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101288118, 'gName': '玫瑰玫瑰我爱你', 'gNum': '330', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 48999.0, 'tokenId': '1096303'},
{'albumId': 100513814, 'gId': 101288914, 'gName': '夜上海', 'gNum': '526', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7046.0, 'tokenId': '1096215'},
{'albumId': 100513815, 'gId': 101289656, 'gName': '如果没有你', 'gNum': '368', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 6900.0, 'tokenId': '1000575'},
{'albumId': 100513816, 'gId': 101295074, 'gName': '俏冤家', 'gNum': '4886', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2563.0, 'tokenId': '1109074'},
{'albumId': 100513820, 'gId': 101315106, 'gName': '好春宵', 'gNum': '4398', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2575.0, 'tokenId': '1104961'},
{'albumId': 100513818, 'gId': 101305223, 'gName': '蔷薇处处开', 'gNum': '1189', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2598.0, 'tokenId': '991777'},
{'albumId': 100513759, 'gId': 101040433, 'gName': '伊爱娃（IARA）', 'gNum': '670', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 29999.0, 'tokenId': '1242050'},
{'albumId': 100513761, 'gId': 101041208, 'gName': '佛里奥索（FURIOSA）', 'gNum': '725', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 6888.0, 'tokenId': '1240108'},
{'albumId': 100513762, 'gId': 101041773, 'gName': '贝贝（BEBE）', 'gNum': '540', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7199.0, 'tokenId': '891281'},
{'albumId': 100513763, 'gId': 101043863, 'gName': '普普拉（PURPURA）', 'gNum': '1880', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2699.99, 'tokenId': '1005218'},
{'albumId': 100513764, 'gId': 101044183, 'gName': '拉万达（LAVANDA）', 'gNum': '144', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2458.0, 'tokenId': '774954'},
{'albumId': 100513765, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513766, 'gId': 101048464, 'gName': '紫月（MINGUANTE）', 'gNum': '313', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2499.0, 'tokenId': '776837'},
{'albumId': 100513767, 'gId': 101051733, 'gName': '橙日（CRESCENTE）', 'gNum': '1526', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2500.0, 'tokenId': '891570'},
{'albumId': 100513768, 'gId': 101053713, 'gName': '蓝日（NOVA）', 'gNum': '1450', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2484.88, 'tokenId': '890526'},
{'albumId': 100513769, 'gId': 101056019, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1700', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2500.0, 'tokenId': '898090'},
{'albumId': 100513770, 'gId': 101058311, 'gName': '维洛（VELOZ）', 'gNum': '1936', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2480.0, 'tokenId': '1105261'},
{'albumId': 100513771, 'gId': 101059751, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '1320', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2599.0, 'tokenId': '836109'},
{'albumId': 100513712, 'gId': 100841156, 'gName': '林黛玉', 'gNum': '378', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 30777.0, 'tokenId': '662717'},
{'albumId': 100513713, 'gId': 100842219, 'gName': '薛宝钗', 'gNum': '741', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7699.0, 'tokenId': '912629'},
{'albumId': 100513714, 'gId': 100842698, 'gName': '史湘云', 'gNum': '470', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7888.0, 'tokenId': '664590'},
{'albumId': 100513715, 'gId': 100844658, 'gName': '秦可卿', 'gNum': '1680', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4000.0, 'tokenId': '735112'},
{'albumId': 100513716, 'gId': 100845457, 'gName': '王熙凤', 'gNum': '424', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3500.0, 'tokenId': '655684'},
{'albumId': 100513717, 'gId': 100848731, 'gName': '贾巧姐', 'gNum': '1643', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4444.0, 'tokenId': '734447'},
{'albumId': 100513718, 'gId': 100849904, 'gName': '贾探春', 'gNum': '761', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4444.0, 'tokenId': '659107'},
{'albumId': 100513719, 'gId': 100851458, 'gName': '贾惜春', 'gNum': '260', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4558.0, 'tokenId': '654133'},
{'albumId': 100513720, 'gId': 100853528, 'gName': '贾迎春', 'gNum': '274', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4188.0, 'tokenId': '653871'},
{'albumId': 100513721, 'gId': 100856171, 'gName': '贾元春', 'gNum': '861', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4500.0, 'tokenId': '660337'},
{'albumId': 100513722, 'gId': 100858523, 'gName': '李纨', 'gNum': '1157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4557.0, 'tokenId': '663776'},
{'albumId': 100513723, 'gId': 100859796, 'gName': '妙玉', 'gNum': '374', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4470.0, 'tokenId': '654967'},
{'albumId': 100092612, 'gId': 100754451, 'gName': '经典熊', 'gNum': '199', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 34000.0, 'tokenId': '500006'},
{'albumId': 100092613, 'gId': 100755139, 'gName': '万圣熊', 'gNum': '531', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9399.0, 'tokenId': '554279'},
{'albumId': 100092614, 'gId': 100755256, 'gName': '精灵熊', 'gNum': '46', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9288.0, 'tokenId': '497040'},
{'albumId': 100092616, 'gId': 100756099, 'gName': '摇滚熊', 'gNum': '284', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3466.0, 'tokenId': '496829'},
{'albumId': 100092617, 'gId': 100757463, 'gName': '美女熊', 'gNum': '599', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3698.0, 'tokenId': '500696'},
{'albumId': 100092618, 'gId': 100758450, 'gName': '可可熊', 'gNum': '539', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3400.0, 'tokenId': '500048'},
{'albumId': 100092619, 'gId': 100759157, 'gName': '迪奇克熊', 'gNum': '199', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3500.0, 'tokenId': '495421'},
{'albumId': 100092620, 'gId': 100760786, 'gName': '剑士熊', 'gNum': '778', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3599.0, 'tokenId': '512261'},
{'albumId': 100092622, 'gId': 100761099, 'gName': '全机甲熊', 'gNum': '45', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3430.0, 'tokenId': '497000'},
{'albumId': 100092624, 'gId': 100762702, 'gName': '斗士熊', 'gNum': '598', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3555.0, 'tokenId': '500613'},
{'albumId': 100092625, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092627, 'gId': 100764602, 'gName': '半机甲熊', 'gNum': '404', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3666.0, 'tokenId': '498541'},
{'albumId': 100092628, 'gId': 100765931, 'gName': '机器人熊', 'gNum': '685', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3450.0, 'tokenId': '501732'},
{'albumId': 100000317, 'gId': 100490525, 'gName': '同道大叔', 'gNum': '306', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 41888.0, 'tokenId': '347264'},
{'albumId': 100000316, 'gId': 100489655, 'gName': '大魔术师', 'gNum': '435', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 8990.0, 'tokenId': '261134'},
{'albumId': 100000315, 'gId': 100488376, 'gName': '奇幻马戏团', 'gNum': '155', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 8877.0, 'tokenId': '255559'},
{'albumId': 100000303, 'gId': 100468660, 'gName': '白羊座：加利斯', 'gNum': '764', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6000.0, 'tokenId': '346529'},
{'albumId': 100000318, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000319, 'gId': 100477803, 'gName': '双子座：猫院长', 'gNum': '1195', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5300.0, 'tokenId': '554259'},
{'albumId': 100000306, 'gId': 100473693, 'gName': '巨蟹座：蛋丁', 'gNum': '1441', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7666.0, 'tokenId': '1242181'},
{'albumId': 100000307, 'gId': 100473717, 'gName': '狮子座：狮总裁', 'gNum': '13', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5399.0, 'tokenId': '252680'},
{'albumId': 100000308, 'gId': 100479129, 'gName': '处女座：矮豆豆', 'gNum': '1069', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5999.0, 'tokenId': '354167'},
{'albumId': 100000309, 'gId': 100480910, 'gName': '天秤座：窝窝鸡', 'gNum': '1398', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6100.0, 'tokenId': '747920'},
{'albumId': 100000310, 'gId': 100481625, 'gName': '天蝎座：雷猴', 'gNum': '661', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5500.0, 'tokenId': '262003'},
{'albumId': 100000311, 'gId': 100483591, 'gName': '射手座：格雷', 'gNum': '1175', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5399.0, 'tokenId': '497536'},
{'albumId': 100000312, 'gId': 100483987, 'gName': '摩羯座：奋斗熊', 'gNum': '119', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6100.0, 'tokenId': '253758'},
{'albumId': 100000313, 'gId': 100485540, 'gName': '水瓶座：格白尼', 'gNum': '221', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6488.0, 'tokenId': '255370'},
{'albumId': 100000314, 'gId': 100488110, 'gName': '双鱼座：小超鱼', 'gNum': '1340', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 4499.0, 'tokenId': '742060'},
{'albumId': 100000233, 'gId': 100266880, 'gName': '斯派修姆光线', 'gNum': '10', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 66338.0, 'tokenId': '239034'},
{'albumId': 100000234, 'gId': 100267226, 'gName': '八分光轮', 'gNum': '7', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15088.0, 'tokenId': '238872'},
{'albumId': 100000235, 'gId': 100268215, 'gName': '捕捉光环', 'gNum': '397', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15388.0, 'tokenId': '349926'},
{'albumId': 100000236, 'gId': 100268913, 'gName': '奥特意念光线', 'gNum': '496', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15555.0, 'tokenId': '489905'},
{'albumId': 100000237, 'gId': 100269735, 'gName': '奥特屏障', 'gNum': '719', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5195.0, 'tokenId': '767216'},
{'albumId': 100000238, 'gId': 100269787, 'gName': '空中撞击战法', 'gNum': '13', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4999.0, 'tokenId': '238947'},
{'albumId': 100000239, 'gId': 100271046, 'gName': '奥特念力', 'gNum': '514', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4899.0, 'tokenId': '348148'},
{'albumId': 100000240, 'gId': 100271638, 'gName': '奥特水流', 'gNum': '348', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4998.99, 'tokenId': '244649'},
{'albumId': 100000241, 'gId': 100272363, 'gName': '奥特瞬间移动', 'gNum': '315', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4899.0, 'tokenId': '243698'},
{'albumId': 100000242, 'gId': 100273545, 'gName': '奥特高速旋转', 'gNum': '739', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5400.0, 'tokenId': '913459'},
{'albumId': 100000243, 'gId': 100274287, 'gName': '巨大化能力', 'gNum': '723', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4666.0, 'tokenId': '771012'},
{'albumId': 100000244, 'gId': 100274739, 'gName': '碎裂光线', 'gNum': '417', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4888.8, 'tokenId': '246194'},
{'albumId': 100000245, 'gId': 100275313, 'gName': '奥特眼光线', 'gNum': '233', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5000.0, 'tokenId': '242372'},
{'albumId': 100000246, 'gId': 100275940, 'gName': '超级过肩摔', 'gNum': '102', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4650.0, 'tokenId': '240714'},
{'albumId': 100000247, 'gId': 100276959, 'gName': '防御能力', 'gNum': '363', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4788.0, 'tokenId': '244581'},
{'albumId': 100000248, 'gId': 100277382, 'gName': '光线白刃取', 'gNum': '28', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5000.0, 'tokenId': '239394'},
{'albumId': 100000249, 'gId': 100278516, 'gName': '奥特空中意念捕捉', 'gNum': '404', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4899.0, 'tokenId': '246443'},
{'albumId': 100000180, 'gId': 100187074, 'gName': '木叶村众人', 'gNum': '163', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 88000.0, 'tokenId': '107794'},
{'albumId': 100000179, 'gId': 100186678, 'gName': '鸣人VS佐助', 'gNum': '167', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 11111.0, 'tokenId': '105763'},
{'albumId': 100000178, 'gId': 100186486, 'gName': '奇拉比&鸣人', 'gNum': '375', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14666.0, 'tokenId': '582593'},
{'albumId': 100000171, 'gId': 100179160, 'gName': '宇智波佐助', 'gNum': '14', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4350.0, 'tokenId': '102706'},
{'albumId': 100000172, 'gId': 100180385, 'gName': '旗木卡卡西', 'gNum': '244', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4688.0, 'tokenId': '104427'},
{'albumId': 100000173, 'gId': 100181827, 'gName': '自来也', 'gNum': '691', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4888.0, 'tokenId': '110112'},
{'albumId': 100000174, 'gId': 100182690, 'gName': '波风水门', 'gNum': '559', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4300.0, 'tokenId': '107343'},
{'albumId': 100000175, 'gId': 100183646, 'gName': '第七班', 'gNum': '520', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4800.0, 'tokenId': '107106'},
{'albumId': 100000176, 'gId': 100185092, 'gName': '鸣人VS我爱罗', 'gNum': '971', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4600.0, 'tokenId': '1111454'},
{'albumId': 100000177, 'gId': 100185820, 'gName': '漩涡鸣人', 'gNum': '704', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4699.0, 'tokenId': '108876'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143210, 'gName': '斯巴达（Sparta）', 'gNum': '4', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.66, 'tokenId': '89257'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143423, 'gName': '迪赛尔（Diesel）', 'gNum': '17', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 99999.0, 'tokenId': '89506'},
{'albumId': 100000157, 'gId': 100143546, 'gName': '麦克思（Max）', 'gNum': '40', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38000.0, 'tokenId': '89550'},
{'albumId': 100000158, 'gId': 100143757, 'gName': '萨德（Sade）', 'gNum': '69', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 25000.0, 'tokenId': '89851'},
{'albumId': 100000159, 'gId': 100143886, 'gName': '露娜（Luna）', 'gNum': '16', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 15888.0, 'tokenId': '89339'},
{'albumId': 100000160, 'gId': 100144134, 'gName': '奇迹（Miracle）', 'gNum': '82', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 45000.0, 'tokenId': '89994'},
{'albumId': 100000161, 'gId': 100144285, 'gName': '吉娜（Gina）', 'gNum': '51', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26666.0, 'tokenId': '89687'},
{'albumId': 100000162, 'gId': 100144466, 'gName': '桑迪（Sunday）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 27777.0, 'tokenId': '89621'},
{'albumId': 100000163, 'gId': 100144643, 'gName': '格若瑞娅（Gloria）', 'gNum': '45', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 48888.0, 'tokenId': '90789'},
{'albumId': 100000164, 'gId': 100144922, 'gName': '艾伯纳（Abner）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 31888.0, 'tokenId': '90882'},
{'albumId': 100000165, 'gId': 100144963, 'gName': '泡泡（Bubble）', 'gNum': '1', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '89175'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101198492, 'gName': 'iBox-CyberMouse', 'gNum': '9394', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 890.0, 'tokenId': '879666'},
{'albumId': 100000323, 'gId': 100514813, 'gName': '张国荣公益数字藏品', 'gNum': '15', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 26500.0, 'tokenId': '665147'},
{'albumId': 100513824, 'gId': 101342420, 'gName': '五虎上将-黄忠', 'gNum': '378', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 43000.0, 'tokenId': '996243'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101726706, 'gName': 'Cece-plants', 'gNum': '1674', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 10444.0, 'tokenId': '1346667'},
{'albumId': 100513868, 'gId': 101831030, 'gName': 'Cece-cotton', 'gNum': '598', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 10400.0, 'tokenId': '1415796'},
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
