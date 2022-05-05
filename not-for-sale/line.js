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
{'albumId': 100099582, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100099599, 'gId': 100825921, 'gName': '《山海经》-狡', 'gNum': '175', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 32000.0, 'tokenId': '513908'},
{'albumId': 100000395, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000378, 'gId': 100590549, 'gName': '《山海经》-混沌', 'gNum': '3814', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4158.0, 'tokenId': '366344'},
{'albumId': 100513734, 'gId': 101004371, 'gName': '《山海经》-何罗鱼', 'gNum': '137', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 17999.0, 'tokenId': '737078'},
{'albumId': 100513733, 'gId': 101004142, 'gName': '《山海经》-雷神', 'gNum': '8', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 73888.0, 'tokenId': '736474'},
{'albumId': 100513748, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513745, 'gId': 101017643, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '264', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10299.0, 'tokenId': '748394'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133334, 'gName': '冥王-哈迪斯', 'gNum': '460', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 78888.88, 'tokenId': '986412'},
{'albumId': 100513779, 'gId': 101134992, 'gName': '智慧女神-雅典娜', 'gNum': '478', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 88000.0, 'tokenId': '986484'},
{'albumId': 100513780, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 100000.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 100831678, 'gName': '金钱豹', 'gNum': '175', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 28888.0, 'tokenId': '519589'},
{'albumId': 100513396, 'gId': 100836095, 'gName': '一見有喜 平安長樂', 'gNum': '570', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3500.0, 'tokenId': '522089'},
{'albumId': 100513397, 'gId': 100837835, 'gName': '一見有喜 平安長樂', 'gNum': '310', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 3511.0, 'tokenId': '523495'},
{'albumId': 100513731, 'gId': 101001290, 'gName': '未来太空之十二大事件', 'gNum': '157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 21000.0, 'tokenId': '735576'},
{'albumId': 100513736, 'gId': 101007109, 'gName': '月球探测器', 'gNum': '895', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12765.0, 'tokenId': '738212'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010849, 'gName': '功夫小子', 'gNum': '502', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7999.0, 'tokenId': '743108'},
{'albumId': 100513744, 'gId': 101017363, 'gName': '悟道小子', 'gNum': '458', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10001.11, 'tokenId': '747714'},
{'albumId': 100513727, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000128, 'gId': 100117984, 'gName': '《找自己》快乐版', 'gNum': '56', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 15866.0, 'tokenId': '59871'},
{'albumId': 100513752, 'gId': 101037484, 'gName': '万国争霸-资源徽章', 'gNum': '335', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 28588.0, 'tokenId': '766877'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513795, 'gId': 101216788, 'gName': '森林聚会', 'gNum': '102', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 8500.0, 'tokenId': '907684'},
{'albumId': 100513796, 'gId': 101217133, 'gName': '异世界·海之城', 'gNum': '147', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 7999.0, 'tokenId': '908308'},
{'albumId': 100099867, 'gId': 100830286, 'gName': '泰迪熊-空投版', 'gNum': '4068', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 2180.0, 'tokenId': '518408'},
{'albumId': 100000396, 'gId': 100715690, 'gName': 'iBox宣传小标兵', 'gNum': '1583', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3550.0, 'tokenId': '492162'},
{'albumId': 100000190, 'gId': 100225689, 'gName': 'iBox-神牛降瑞', 'gNum': '501', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1777.0, 'tokenId': '115889'},
{'albumId': 100000139, 'gId': 100132745, 'gName': 'iBox-金牛献福', 'gNum': '1593', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2000.0, 'tokenId': '75733'},
{'albumId': 100000388, 'gId': 100600024, 'gName': 'iBox-战牛无双', 'gNum': '917', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1800.0, 'tokenId': '382618'},
{'albumId': 100000394, 'gId': 100703920, 'gName': 'iBox-翔牛摘星', 'gNum': '313', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 974.0, 'tokenId': '480692'},
{'albumId': 100000383, 'gId': 100593975, 'gName': 'iBox-电牛放歌', 'gNum': '51', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1399.0, 'tokenId': '369994'},
{'albumId': 100000384, 'gId': 100596002, 'gName': 'iBox-电牛放歌', 'gNum': '78', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1280.0, 'tokenId': '372043'},
{'albumId': 100099573, 'gId': 100824586, 'gName': '集牛换虎-虎虎生威', 'gNum': '12', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7298.0, 'tokenId': '513068'},
{'albumId': 100513807, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513800, 'gId': 101220139, 'gName': '爱丽丝梦游仙境', 'gNum': '1003', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 24567.0, 'tokenId': '911815'},
{'albumId': 100513802, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513803, 'gId': 101224882, 'gName': '思情郎 ', 'gNum': '346', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 16888.0, 'tokenId': '976188'},
{'albumId': 100513806, 'gId': 101271577, 'gName': 'iBox-赛博司芬克斯', 'gNum': '641', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5044.0, 'tokenId': '971947'},
{'albumId': 100513822, 'gId': 101319332, 'gName': '五虎上将-马超', 'gNum': '230', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 39999.0, 'tokenId': '987271'},
{'albumId': 100513845, 'gId': 101439595, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '63', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 19500.0, 'tokenId': '1096468'},
{'albumId': 100000169, 'gId': 100165794, 'gName': '闪电（Flash）', 'gNum': '1658', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 1499.0, 'tokenId': '92441'},
{'albumId': 100000118, 'gId': 100045552, 'gName': 'iBox 002号空投版', 'gNum': '1430', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 2777.0, 'tokenId': '58860'},
{'albumId': 100513844, 'gId': 101435564, 'gName': '魅紫萄萄', 'gNum': '11032', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2078.88, 'tokenId': '1088271'},
{'albumId': 100513843, 'gId': 101416377, 'gName': '蕃红李李', 'gNum': '6845', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2600.0, 'tokenId': '1072402'},
{'albumId': 100513842, 'gId': 101398227, 'gName': '大芒妖妖', 'gNum': '3695', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2508.0, 'tokenId': '1064044'},
{'albumId': 100513726, 'gId': 100957359, 'gName': 'iBox−赛博边牧', 'gNum': '22181', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 299.99, 'tokenId': '706117'},
{'albumId': 100000335, 'gId': 100544926, 'gName': 'iBox-潮牛逐浪', 'gNum': '14173', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 620.0, 'tokenId': '336283'},
{'albumId': 100000254, 'gId': 100386456, 'gName': 'iBox-玄牛遂意', 'gNum': '15586', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 388.0, 'tokenId': '214112'},
{'albumId': 100000253, 'gId': 100353675, 'gName': 'iBox-灵牛来喜', 'gNum': '2805', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 700.0, 'tokenId': '178589'},
{'albumId': 100513724, 'gId': 100881001, 'gName': 'iBox-CyberTiger', 'gNum': '19523', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 519.0, 'tokenId': '603274'},
{'albumId': 100513750, 'gId': 101023442, 'gName': 'iBox−赛博蓝猫', 'gNum': '2172', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 836.0, 'tokenId': '760610'},
{'albumId': 100513774, 'gId': 101090699, 'gName': 'iBox−赛博布偶', 'gNum': '9468', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 513.0, 'tokenId': '790041'},
{'albumId': 100000393, 'gId': 100631742, 'gName': 'I‘m Sorry', 'gNum': '28135', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 200.0, 'tokenId': '412625'},
{'albumId': 100513804, 'gId': 101235173, 'gName': 'iBox-赛博加菲', 'gNum': '10237', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 514.99, 'tokenId': '934400'},
{'albumId': 100513805, 'gId': 101264984, 'gName': 'iBox-赛博哈士奇', 'gNum': '6048', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1150.0, 'tokenId': '964423'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101287896, 'gName': '玫瑰玫瑰我爱你', 'gNum': '108', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 53666.0, 'tokenId': '992393'},
{'albumId': 100513814, 'gId': 101289083, 'gName': '夜上海', 'gNum': '695', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 8900.0, 'tokenId': '1110731'},
{'albumId': 100513815, 'gId': 101289339, 'gName': '如果没有你', 'gNum': '51', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 8999.0, 'tokenId': '988877'},
{'albumId': 100513816, 'gId': 101294557, 'gName': '俏冤家', 'gNum': '4369', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2848.0, 'tokenId': '1104742'},
{'albumId': 100513820, 'gId': 101312724, 'gName': '好春宵', 'gNum': '2016', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2855.0, 'tokenId': '994506'},
{'albumId': 100513818, 'gId': 101304329, 'gName': '蔷薇处处开', 'gNum': '295', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2788.0, 'tokenId': '988676'},
{'albumId': 100513759, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513761, 'gId': 101040587, 'gName': '佛里奥索（FURIOSA）', 'gNum': '104', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7277.0, 'tokenId': '776410'},
{'albumId': 100513762, 'gId': 101041800, 'gName': '贝贝（BEBE）', 'gNum': '567', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7300.0, 'tokenId': '892247'},
{'albumId': 100513763, 'gId': 101042956, 'gName': '普普拉（PURPURA）', 'gNum': '973', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2680.0, 'tokenId': '830915'},
{'albumId': 100513764, 'gId': 101044915, 'gName': '拉万达（LAVANDA）', 'gNum': '876', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2748.0, 'tokenId': '783386'},
{'albumId': 100513765, 'gId': 101047103, 'gName': '布兰卡（BRANCA）', 'gNum': '1008', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2760.0, 'tokenId': '832834'},
{'albumId': 100513766, 'gId': 101050069, 'gName': '紫月（MINGUANTE）', 'gNum': '1918', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2649.0, 'tokenId': '1096034'},
{'albumId': 100513767, 'gId': 101050949, 'gName': '橙日（CRESCENTE）', 'gNum': '742', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2649.0, 'tokenId': '780561'},
{'albumId': 100513768, 'gId': 101054268, 'gName': '蓝日（NOVA）', 'gNum': '2005', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2699.0, 'tokenId': '1340100'},
{'albumId': 100513769, 'gId': 101056122, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1803', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2745.0, 'tokenId': '912799'},
{'albumId': 100513770, 'gId': 101057307, 'gName': '维洛（VELOZ）', 'gNum': '932', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2650.0, 'tokenId': '815615'},
{'albumId': 100513771, 'gId': 101059712, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '1281', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2748.0, 'tokenId': '835729'},
{'albumId': 100513712, 'gId': 100841030, 'gName': '林黛玉', 'gNum': '252', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 29000.0, 'tokenId': '658790'},
{'albumId': 100513713, 'gId': 100841596, 'gName': '薛宝钗', 'gNum': '118', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8266.0, 'tokenId': '655044'},
{'albumId': 100513714, 'gId': 100842972, 'gName': '史湘云', 'gNum': '744', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7800.0, 'tokenId': '913856'},
{'albumId': 100513715, 'gId': 100844388, 'gName': '秦可卿', 'gNum': '1410', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4508.0, 'tokenId': '723376'},
{'albumId': 100513716, 'gId': 100845677, 'gName': '王熙凤', 'gNum': '644', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4260.0, 'tokenId': '657747'},
{'albumId': 100513717, 'gId': 100848221, 'gName': '贾巧姐', 'gNum': '1133', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5499.0, 'tokenId': '663155'},
{'albumId': 100513718, 'gId': 100850598, 'gName': '贾探春', 'gNum': '1455', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4700.0, 'tokenId': '723691'},
{'albumId': 100513719, 'gId': 100851480, 'gName': '贾惜春', 'gNum': '282', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5300.0, 'tokenId': '654397'},
{'albumId': 100513720, 'gId': 100854392, 'gName': '贾迎春', 'gNum': '1138', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4499.0, 'tokenId': '663003'},
{'albumId': 100513721, 'gId': 100855556, 'gName': '贾元春', 'gNum': '246', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4260.0, 'tokenId': '654701'},
{'albumId': 100513722, 'gId': 100858470, 'gName': '李纨', 'gNum': '1104', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4798.0, 'tokenId': '663131'},
{'albumId': 100513723, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092612, 'gId': 100754414, 'gName': '经典熊', 'gNum': '162', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 30000.0, 'tokenId': '498910'},
{'albumId': 100092613, 'gId': 100754649, 'gName': '万圣熊', 'gNum': '41', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9600.0, 'tokenId': '494303'},
{'albumId': 100092614, 'gId': 100755256, 'gName': '精灵熊', 'gNum': '46', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 9288.0, 'tokenId': '497040'},
{'albumId': 100092616, 'gId': 100755995, 'gName': '摇滚熊', 'gNum': '180', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3743.99, 'tokenId': '497292'},
{'albumId': 100092617, 'gId': 100757728, 'gName': '美女熊', 'gNum': '864', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3700.0, 'tokenId': '553661'},
{'albumId': 100092618, 'gId': 100758645, 'gName': '可可熊', 'gNum': '734', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3700.0, 'tokenId': '502193'},
{'albumId': 100092619, 'gId': 100759387, 'gName': '迪奇克熊', 'gNum': '429', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3680.0, 'tokenId': '498415'},
{'albumId': 100092620, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092622, 'gId': 100761495, 'gName': '全机甲熊', 'gNum': '441', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3680.0, 'tokenId': '499083'},
{'albumId': 100092624, 'gId': 100762476, 'gName': '斗士熊', 'gNum': '372', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3699.0, 'tokenId': '497912'},
{'albumId': 100092625, 'gId': 100764004, 'gName': '军团熊', 'gNum': '851', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3688.0, 'tokenId': '553495'},
{'albumId': 100092627, 'gId': 100764841, 'gName': '半机甲熊', 'gNum': '643', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3732.88, 'tokenId': '501376'},
{'albumId': 100092628, 'gId': 100766051, 'gName': '机器人熊', 'gNum': '805', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3730.0, 'tokenId': '525279'},
{'albumId': 100000317, 'gId': 100490504, 'gName': '同道大叔', 'gNum': '285', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 45000.0, 'tokenId': '323230'},
{'albumId': 100000316, 'gId': 100489986, 'gName': '大魔术师', 'gNum': '766', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9777.0, 'tokenId': '369696'},
{'albumId': 100000315, 'gId': 100489058, 'gName': '奇幻马戏团', 'gNum': '837', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9400.0, 'tokenId': '554234'},
{'albumId': 100000303, 'gId': 100469166, 'gName': '白羊座：加利斯', 'gNum': '1270', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5799.0, 'tokenId': '648692'},
{'albumId': 100000318, 'gId': 100476119, 'gName': '金牛座：牛丢丢', 'gNum': '963', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7200.0, 'tokenId': '352199'},
{'albumId': 100000319, 'gId': 100477812, 'gName': '双子座：猫院长', 'gNum': '1204', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5300.0, 'tokenId': '582609'},
{'albumId': 100000306, 'gId': 100473018, 'gName': '巨蟹座：蛋丁', 'gNum': '766', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7548.88, 'tokenId': '346691'},
{'albumId': 100000307, 'gId': 100475140, 'gName': '狮子座：狮总裁', 'gNum': '1436', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5200.0, 'tokenId': '1111325'},
{'albumId': 100000308, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000309, 'gId': 100480910, 'gName': '天秤座：窝窝鸡', 'gNum': '1398', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5550.0, 'tokenId': '747920'},
{'albumId': 100000310, 'gId': 100481957, 'gName': '天蝎座：雷猴', 'gNum': '993', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5399.0, 'tokenId': '353431'},
{'albumId': 100000311, 'gId': 100482952, 'gName': '射手座：格雷', 'gNum': '536', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5688.0, 'tokenId': '259833'},
{'albumId': 100000312, 'gId': 100483987, 'gName': '摩羯座：奋斗熊', 'gNum': '119', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6088.0, 'tokenId': '253758'},
{'albumId': 100000313, 'gId': 100485540, 'gName': '水瓶座：格白尼', 'gNum': '221', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6488.0, 'tokenId': '255370'},
{'albumId': 100000314, 'gId': 100487167, 'gName': '双鱼座：小超鱼', 'gNum': '397', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5699.0, 'tokenId': '257776'},
{'albumId': 100000233, 'gId': 100267027, 'gName': '斯派修姆光线', 'gNum': '157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 59999.0, 'tokenId': '244726'},
{'albumId': 100000234, 'gId': 100267700, 'gName': '八分光轮', 'gNum': '481', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15188.0, 'tokenId': '374013'},
{'albumId': 100000235, 'gId': 100268325, 'gName': '捕捉光环', 'gNum': '507', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14999.0, 'tokenId': '583421'},
{'albumId': 100000236, 'gId': 100268442, 'gName': '奥特意念光线', 'gNum': '25', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 15000.0, 'tokenId': '239186'},
{'albumId': 100000237, 'gId': 100269137, 'gName': '奥特屏障', 'gNum': '121', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4980.0, 'tokenId': '240469'},
{'albumId': 100000238, 'gId': 100269780, 'gName': '空中撞击战法', 'gNum': '6', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4588.0, 'tokenId': '238840'},
{'albumId': 100000239, 'gId': 100271257, 'gName': '奥特念力', 'gNum': '725', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4698.0, 'tokenId': '771695'},
{'albumId': 100000240, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000241, 'gId': 100272289, 'gName': '奥特瞬间移动', 'gNum': '241', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4800.0, 'tokenId': '242410'},
{'albumId': 100000242, 'gId': 100273159, 'gName': '奥特高速旋转', 'gNum': '353', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4650.0, 'tokenId': '244456'},
{'albumId': 100000243, 'gId': 100273979, 'gName': '巨大化能力', 'gNum': '415', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4888.0, 'tokenId': '248902'},
{'albumId': 100000244, 'gId': 100274860, 'gName': '碎裂光线', 'gNum': '538', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4700.0, 'tokenId': '347788'},
{'albumId': 100000245, 'gId': 100275388, 'gName': '奥特眼光线', 'gNum': '308', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4888.0, 'tokenId': '243633'},
{'albumId': 100000246, 'gId': 100276393, 'gName': '超级过肩摔', 'gNum': '555', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4500.0, 'tokenId': '353574'},
{'albumId': 100000247, 'gId': 100277101, 'gName': '防御能力', 'gNum': '505', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4899.0, 'tokenId': '341658'},
{'albumId': 100000248, 'gId': 100277450, 'gName': '光线白刃取', 'gNum': '96', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5099.0, 'tokenId': '240152'},
{'albumId': 100000249, 'gId': 100278113, 'gName': '奥特空中意念捕捉', 'gNum': '1', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4776.0, 'tokenId': '239014'},
{'albumId': 100000180, 'gId': 100186936, 'gName': '木叶村众人', 'gNum': '25', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 86666.66, 'tokenId': '103181'},
{'albumId': 100000179, 'gId': 100186534, 'gName': '鸣人VS佐助', 'gNum': '23', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 11111.0, 'tokenId': '105996'},
{'albumId': 100000178, 'gId': 100186302, 'gName': '奇拉比&鸣人', 'gNum': '191', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 12500.0, 'tokenId': '106388'},
{'albumId': 100000171, 'gId': 100179802, 'gName': '宇智波佐助', 'gNum': '656', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4595.0, 'tokenId': '108446'},
{'albumId': 100000172, 'gId': 100180341, 'gName': '旗木卡卡西', 'gNum': '200', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4593.99, 'tokenId': '104087'},
{'albumId': 100000173, 'gId': 100181228, 'gName': '自来也', 'gNum': '92', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5200.0, 'tokenId': '103380'},
{'albumId': 100000174, 'gId': 100183065, 'gName': '波风水门', 'gNum': '934', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4597.0, 'tokenId': '584573'},
{'albumId': 100000175, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000176, 'gId': 100185096, 'gName': '鸣人VS我爱罗', 'gNum': '975', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4680.0, 'tokenId': '1240519'},
{'albumId': 100000177, 'gId': 100185811, 'gName': '漩涡鸣人', 'gNum': '695', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 4600.0, 'tokenId': '108825'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143262, 'gName': '斯巴达（Sparta）', 'gNum': '56', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 63211.11, 'tokenId': '90183'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 66666.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 99001.11, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143546, 'gName': '麦克思（Max）', 'gNum': '40', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38000.0, 'tokenId': '89550'},
{'albumId': 100000158, 'gId': 100143757, 'gName': '萨德（Sade）', 'gNum': '69', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 24000.0, 'tokenId': '89851'},
{'albumId': 100000159, 'gId': 100144003, 'gName': '露娜（Luna）', 'gNum': '133', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 25666.0, 'tokenId': '90657'},
{'albumId': 100000160, 'gId': 100144194, 'gName': '奇迹（Miracle）', 'gNum': '142', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 42888.0, 'tokenId': '90555'},
{'albumId': 100000161, 'gId': 100144285, 'gName': '吉娜（Gina）', 'gNum': '51', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26666.0, 'tokenId': '89687'},
{'albumId': 100000162, 'gId': 100144466, 'gName': '桑迪（Sunday）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 29999.0, 'tokenId': '89621'},
{'albumId': 100000163, 'gId': 100144643, 'gName': '格若瑞娅（Gloria）', 'gNum': '45', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 58888.0, 'tokenId': '90789'},
{'albumId': 100000164, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000165, 'gId': 100144963, 'gName': '泡泡（Bubble）', 'gNum': '1', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '89175'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101198492, 'gName': 'iBox-CyberMouse', 'gNum': '9394', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 890.0, 'tokenId': '879666'},
{'albumId': 100000323, 'gId': 100514809, 'gName': '张国荣公益数字藏品', 'gNum': '11', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 23000.0, 'tokenId': '584647'},
{'albumId': 100513824, 'gId': 101342461, 'gName': '五虎上将-黄忠', 'gNum': '419', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 39999.0, 'tokenId': '996356'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101725778, 'gName': 'Cece-plants', 'gNum': '746', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 10998.0, 'tokenId': '1340932'},
{'albumId': 100513868, 'gId': 101831955, 'gName': 'Cece-cotton', 'gNum': '1523', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 10948.0, 'tokenId': '1415374'},
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
