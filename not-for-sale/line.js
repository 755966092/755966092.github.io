// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/all-name-js");
const jsData = require("./data/js-data");

var data =  [{'albumId': 100513745, 'gId': 101017485, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '106', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 33999.0, 'tokenId': '748298'},
{'albumId': 100513865, 'gId': 101726474, 'gName': 'Cece-plants', 'gNum': '1442', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 24860.0, 'tokenId': '1346403'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513779, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513780, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513781, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100100115, 'gId': 100831527, 'gName': '金钱豹', 'gNum': '24', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 49996.88, 'tokenId': '519449'},
{'albumId': 100513396, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513397, 'gId': 100838916, 'gName': '一見有喜 平安長樂', 'gNum': '1391', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 15499.0, 'tokenId': '524552'},
{'albumId': 100513731, 'gId': 101001537, 'gName': '未来太空之十二大事件', 'gNum': '404', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 44999.0, 'tokenId': '735809'},
{'albumId': 100513736, 'gId': 101007456, 'gName': '月球探测器', 'gNum': '1242', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 32500.0, 'tokenId': '738804'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010400, 'gName': '功夫小子', 'gNum': '53', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 31777.0, 'tokenId': '742604'},
{'albumId': 100513744, 'gId': 101017198, 'gName': '悟道小子', 'gNum': '293', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 33000.0, 'tokenId': '747806'},
{'albumId': 100513727, 'gId': 100992330, 'gName': 'iBox-虎头小子', 'gNum': '152', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 98999.0, 'tokenId': '727757'},
{'albumId': 100000128, 'gId': 100117990, 'gName': '《找自己》快乐版', 'gNum': '62', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 48886.0, 'tokenId': '59898'},
{'albumId': 100513752, 'gId': 101037225, 'gName': '万国争霸-资源徽章', 'gNum': '76', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 46666.0, 'tokenId': '766564'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 101218987, 'gName': '金瓜满载', 'gNum': '451', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 58460.0, 'tokenId': '908894'},
{'albumId': 100513795, 'gId': 101216983, 'gName': '森林聚会', 'gNum': '297', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 31900.0, 'tokenId': '907717'},
{'albumId': 100513796, 'gId': 101217315, 'gName': '异世界·海之城', 'gNum': '329', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 28799.0, 'tokenId': '907897'},
{'albumId': 100099867, 'gId': 100827422, 'gName': '泰迪熊-空投版', 'gNum': '1204', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 5700.0, 'tokenId': '515572'},
{'albumId': 100000396, 'gId': 100716339, 'gName': 'iBox宣传小标兵', 'gNum': '2232', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12662.0, 'tokenId': '492814'},
{'albumId': 100000190, 'gId': 100230679, 'gName': 'iBox-神牛降瑞', 'gNum': '5491', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 7080.0, 'tokenId': '115802'},
{'albumId': 100000139, 'gId': 100132022, 'gName': 'iBox-金牛献福', 'gNum': '870', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 7500.0, 'tokenId': '75588'},
{'albumId': 100000388, 'gId': 100599524, 'gName': 'iBox-战牛无双', 'gNum': '417', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 7150.0, 'tokenId': '382133'},
{'albumId': 100000394, 'gId': 100707999, 'gName': 'iBox-翔牛摘星', 'gNum': '4392', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 3250.0, 'tokenId': '484704'},
{'albumId': 100000383, 'gId': 100595865, 'gName': 'iBox-电牛放歌', 'gNum': '1941', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 5688.0, 'tokenId': '371855'},
{'albumId': 100000384, 'gId': 100596731, 'gName': 'iBox-电牛放歌', 'gNum': '807', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 5887.0, 'tokenId': '372759'},
{'albumId': 100099573, 'gId': 100824704, 'gName': '集牛换虎-虎虎生威', 'gNum': '130', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 31788.0, 'tokenId': '513183'},
{'albumId': 100513807, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513800, 'gId': 101219168, 'gName': '爱丽丝梦游仙境', 'gNum': '32', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 51200.0, 'tokenId': '911270'},
{'albumId': 100513802, 'gId': 101224464, 'gName': '五虎上将-赵云', 'gNum': '128', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 96666.0, 'tokenId': '913208'},
{'albumId': 100513803, 'gId': 101224665, 'gName': '思情郎 ', 'gNum': '129', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 41320.0, 'tokenId': '913841'},
{'albumId': 100513806, 'gId': 101273657, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2721', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10599.0, 'tokenId': '974093'},
{'albumId': 100513822, 'gId': 101319349, 'gName': '五虎上将-马超', 'gNum': '247', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 65666.0, 'tokenId': '987259'},
{'albumId': 100513845, 'gId': 101440938, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '1406', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 41999.0, 'tokenId': '1098098'},
{'albumId': 100000169, 'gId': 100170570, 'gName': '闪电（Flash）', 'gNum': '6434', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 4700.0, 'tokenId': '96200'},
{'albumId': 100000118, 'gId': 100045239, 'gName': 'iBox 002号空投版', 'gNum': '1117', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 12500.0, 'tokenId': '58400'},
{'albumId': 100513844, 'gId': 101427499, 'gName': '魅紫萄萄', 'gNum': '2967', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3848.0, 'tokenId': '1083661'},
{'albumId': 100513843, 'gId': 101413988, 'gName': '蕃红李李', 'gNum': '4456', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4588.0, 'tokenId': '1069056'},
{'albumId': 100513842, 'gId': 101405173, 'gName': '大芒妖妖', 'gNum': '10641', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4648.0, 'tokenId': '1062557'},
{'albumId': 100513726, 'gId': 100990197, 'gName': 'iBox−赛博边牧', 'gNum': '55019', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 887.0, 'tokenId': '721240'},
{'albumId': 100000335, 'gId': 100539120, 'gName': 'iBox-潮牛逐浪', 'gNum': '8367', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2399.0, 'tokenId': '330975'},
{'albumId': 100000254, 'gId': 100376778, 'gName': 'iBox-玄牛遂意', 'gNum': '5908', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1279.0, 'tokenId': '205602'},
{'albumId': 100000253, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513724, 'gId': 100884745, 'gName': 'iBox-CyberTiger', 'gNum': '23267', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 880.0, 'tokenId': '606750'},
{'albumId': 100513750, 'gId': 101032456, 'gName': 'iBox−赛博蓝猫', 'gNum': '11186', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2380.0, 'tokenId': '760631'},
{'albumId': 100513774, 'gId': 101086824, 'gName': 'iBox−赛博布偶', 'gNum': '5593', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1239.0, 'tokenId': '786588'},
{'albumId': 100000393, 'gId': 100661124, 'gName': 'I‘m Sorry', 'gNum': '57517', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 698.0, 'tokenId': '441660'},
{'albumId': 100513804, 'gId': 101238949, 'gName': 'iBox-赛博加菲', 'gNum': '14013', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1290.0, 'tokenId': '937884'},
{'albumId': 100513805, 'gId': 101264989, 'gName': 'iBox-赛博哈士奇', 'gNum': '6053', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2900.0, 'tokenId': '963642'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101288265, 'gName': '玫瑰玫瑰我爱你', 'gNum': '477', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 55111.0, 'tokenId': '1178862'},
{'albumId': 100513814, 'gId': 101288913, 'gName': '夜上海', 'gNum': '525', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 28880.0, 'tokenId': '1096179'},
{'albumId': 100513815, 'gId': 101289513, 'gName': '如果没有你', 'gNum': '225', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 28000.0, 'tokenId': '993380'},
{'albumId': 100513816, 'gId': 101290267, 'gName': '俏冤家', 'gNum': '79', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7050.0, 'tokenId': '987940'},
{'albumId': 100513820, 'gId': 101310745, 'gName': '好春宵', 'gNum': '37', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7080.0, 'tokenId': '987855'},
{'albumId': 100513818, 'gId': 101305906, 'gName': '蔷薇处处开', 'gNum': '1872', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 7029.0, 'tokenId': '994054'},
{'albumId': 100513772, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513759, 'gId': 101040408, 'gName': '伊爱娃（IARA）', 'gNum': '645', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 49999.0, 'tokenId': '1104283'},
{'albumId': 100513761, 'gId': 101041140, 'gName': '佛里奥索（FURIOSA）', 'gNum': '657', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 19550.0, 'tokenId': '909633'},
{'albumId': 100513762, 'gId': 101041477, 'gName': '贝贝（BEBE）', 'gNum': '244', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 19555.0, 'tokenId': '780243'},
{'albumId': 100513763, 'gId': 101043530, 'gName': '普普拉（PURPURA）', 'gNum': '1547', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7920.0, 'tokenId': '891961'},
{'albumId': 100513764, 'gId': 101044108, 'gName': '拉万达（LAVANDA）', 'gNum': '69', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7850.0, 'tokenId': '774253'},
{'albumId': 100513765, 'gId': 101047150, 'gName': '布兰卡（BRANCA）', 'gNum': '1055', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7950.0, 'tokenId': '833329'},
{'albumId': 100513766, 'gId': 101049388, 'gName': '紫月（MINGUANTE）', 'gNum': '1237', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 8199.0, 'tokenId': '835545'},
{'albumId': 100513767, 'gId': 101052158, 'gName': '橙日（CRESCENTE）', 'gNum': '1951', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 8200.0, 'tokenId': '1240474'},
{'albumId': 100513768, 'gId': 101053198, 'gName': '蓝日（NOVA）', 'gNum': '935', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 8222.0, 'tokenId': '789323'},
{'albumId': 100513769, 'gId': 101056165, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1846', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7878.0, 'tokenId': '995671'},
{'albumId': 100513770, 'gId': 101058383, 'gName': '维洛（VELOZ）', 'gNum': '2008', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 7886.0, 'tokenId': '1242427'},
{'albumId': 100513771, 'gId': 101058973, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '542', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 8268.0, 'tokenId': '778945'},
{'albumId': 100513712, 'gId': 100841466, 'gName': '林黛玉', 'gNum': '688', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 49999.0, 'tokenId': '912654'},
{'albumId': 100513713, 'gId': 100841996, 'gName': '薛宝钗', 'gNum': '518', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 21800.0, 'tokenId': '723830'},
{'albumId': 100513714, 'gId': 100842928, 'gName': '史湘云', 'gNum': '700', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 22000.0, 'tokenId': '747197'},
{'albumId': 100513715, 'gId': 100843684, 'gName': '秦可卿', 'gNum': '706', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 11988.0, 'tokenId': '658757'},
{'albumId': 100513716, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513717, 'gId': 100848247, 'gName': '贾巧姐', 'gNum': '1159', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 11888.0, 'tokenId': '663408'},
{'albumId': 100513718, 'gId': 100851163, 'gName': '贾探春', 'gNum': '2020', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12599.0, 'tokenId': '897781'},
{'albumId': 100513719, 'gId': 100851423, 'gName': '贾惜春', 'gNum': '225', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12983.0, 'tokenId': '653698'},
{'albumId': 100513720, 'gId': 100853967, 'gName': '贾迎春', 'gNum': '713', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 11499.0, 'tokenId': '658555'},
{'albumId': 100513721, 'gId': 100855556, 'gName': '贾元春', 'gNum': '246', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 11000.0, 'tokenId': '654701'},
{'albumId': 100513722, 'gId': 100858601, 'gName': '李纨', 'gNum': '1235', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 18000.0, 'tokenId': '664484'},
{'albumId': 100513723, 'gId': 100860558, 'gName': '妙玉', 'gNum': '1136', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 19997.0, 'tokenId': '662829'},
{'albumId': 100092612, 'gId': 100754281, 'gName': '经典熊', 'gNum': '29', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 52518.0, 'tokenId': '494448'},
{'albumId': 100092613, 'gId': 100754938, 'gName': '万圣熊', 'gNum': '330', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 22888.0, 'tokenId': '500456'},
{'albumId': 100092614, 'gId': 100755376, 'gName': '精灵熊', 'gNum': '166', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 23000.0, 'tokenId': '496689'},
{'albumId': 100092616, 'gId': 100756174, 'gName': '摇滚熊', 'gNum': '359', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6888.0, 'tokenId': '498103'},
{'albumId': 100092617, 'gId': 100757885, 'gName': '美女熊', 'gNum': '1021', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6758.0, 'tokenId': '910846'},
{'albumId': 100092618, 'gId': 100758048, 'gName': '可可熊', 'gNum': '137', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7000.0, 'tokenId': '495677'},
{'albumId': 100092619, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092620, 'gId': 100760669, 'gName': '剑士熊', 'gNum': '661', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7000.0, 'tokenId': '501582'},
{'albumId': 100092622, 'gId': 100761455, 'gName': '全机甲熊', 'gNum': '401', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6999.0, 'tokenId': '498572'},
{'albumId': 100092624, 'gId': 100762992, 'gName': '斗士熊', 'gNum': '888', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6888.0, 'tokenId': '553909'},
{'albumId': 100092625, 'gId': 100763183, 'gName': '军团熊', 'gNum': '30', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7000.0, 'tokenId': '496939'},
{'albumId': 100092627, 'gId': 100764438, 'gName': '半机甲熊', 'gNum': '240', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 7000.0, 'tokenId': '495969'},
{'albumId': 100092628, 'gId': 100765690, 'gName': '机器人熊', 'gNum': '444', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6400.0, 'tokenId': '499045'},
{'albumId': 100000317, 'gId': 100490586, 'gName': '同道大叔', 'gNum': '367', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 66666.0, 'tokenId': '352401'},
{'albumId': 100000316, 'gId': 100490168, 'gName': '大魔术师', 'gNum': '948', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 32000.0, 'tokenId': '748791'},
{'albumId': 100000315, 'gId': 100488639, 'gName': '奇幻马戏团', 'gNum': '418', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 31300.0, 'tokenId': '261128'},
{'albumId': 100000303, 'gId': 100468245, 'gName': '白羊座：加利斯', 'gNum': '349', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 12800.0, 'tokenId': '256730'},
{'albumId': 100000318, 'gId': 100475909, 'gName': '金牛座：牛丢丢', 'gNum': '753', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11999.0, 'tokenId': '346577'},
{'albumId': 100000319, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000306, 'gId': 100472755, 'gName': '巨蟹座：蛋丁', 'gNum': '503', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11999.0, 'tokenId': '259532'},
{'albumId': 100000307, 'gId': 100474299, 'gName': '狮子座：狮总裁', 'gNum': '595', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11799.0, 'tokenId': '260782'},
{'albumId': 100000308, 'gId': 100478998, 'gName': '处女座：矮豆豆', 'gNum': '938', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 12588.0, 'tokenId': '350473'},
{'albumId': 100000309, 'gId': 100480952, 'gName': '天秤座：窝窝鸡', 'gNum': '1440', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 13599.0, 'tokenId': '1740963'},
{'albumId': 100000310, 'gId': 100481837, 'gName': '天蝎座：雷猴', 'gNum': '873', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 12000.0, 'tokenId': '349279'},
{'albumId': 100000311, 'gId': 100482493, 'gName': '射手座：格雷', 'gNum': '77', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11500.0, 'tokenId': '253132'},
{'albumId': 100000312, 'gId': 100484379, 'gName': '摩羯座：奋斗熊', 'gNum': '511', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11300.0, 'tokenId': '259276'},
{'albumId': 100000313, 'gId': 100485547, 'gName': '水瓶座：格白尼', 'gNum': '228', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11800.0, 'tokenId': '256972'},
{'albumId': 100000314, 'gId': 100487976, 'gName': '双鱼座：小超鱼', 'gNum': '1206', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11199.0, 'tokenId': '554255'},
{'albumId': 100000233, 'gId': 100266942, 'gName': '斯派修姆光线', 'gNum': '72', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 86768.0, 'tokenId': '241059'},
{'albumId': 100000234, 'gId': 100267671, 'gName': '八分光轮', 'gNum': '452', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 34666.0, 'tokenId': '354442'},
{'albumId': 100000235, 'gId': 100268168, 'gName': '捕捉光环', 'gNum': '350', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 34888.0, 'tokenId': '250115'},
{'albumId': 100000236, 'gId': 100268643, 'gName': '奥特意念光线', 'gNum': '226', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 33999.0, 'tokenId': '243518'},
{'albumId': 100000237, 'gId': 100269402, 'gName': '奥特屏障', 'gNum': '386', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14444.0, 'tokenId': '244875'},
{'albumId': 100000238, 'gId': 100270391, 'gName': '空中撞击战法', 'gNum': '617', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13388.0, 'tokenId': '384738'},
{'albumId': 100000239, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000240, 'gId': 100271618, 'gName': '奥特水流', 'gNum': '328', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13799.0, 'tokenId': '244359'},
{'albumId': 100000241, 'gId': 100272215, 'gName': '奥特瞬间移动', 'gNum': '167', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14430.0, 'tokenId': '242045'},
{'albumId': 100000242, 'gId': 100273299, 'gName': '奥特高速旋转', 'gNum': '493', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14388.0, 'tokenId': '261210'},
{'albumId': 100000243, 'gId': 100273567, 'gName': '巨大化能力', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13998.0, 'tokenId': '239273'},
{'albumId': 100000244, 'gId': 100274879, 'gName': '碎裂光线', 'gNum': '557', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13499.0, 'tokenId': '350334'},
{'albumId': 100000245, 'gId': 100275087, 'gName': '奥特眼光线', 'gNum': '7', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14500.0, 'tokenId': '238916'},
{'albumId': 100000246, 'gId': 100276221, 'gName': '超级过肩摔', 'gNum': '383', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13507.0, 'tokenId': '245037'},
{'albumId': 100000247, 'gId': 100276859, 'gName': '防御能力', 'gNum': '263', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13888.0, 'tokenId': '243309'},
{'albumId': 100000248, 'gId': 100277708, 'gName': '光线白刃取', 'gNum': '354', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 13888.0, 'tokenId': '244354'},
{'albumId': 100000249, 'gId': 100278846, 'gName': '奥特空中意念捕捉', 'gNum': '734', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 14499.0, 'tokenId': '913408'},
{'albumId': 100000179, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000178, 'gId': 100186492, 'gName': '奇拉比&鸣人', 'gNum': '381', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 38880.0, 'tokenId': '770414'},
{'albumId': 100000171, 'gId': 100179249, 'gName': '宇智波佐助', 'gNum': '103', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14888.0, 'tokenId': '103308'},
{'albumId': 100000172, 'gId': 100180968, 'gName': '旗木卡卡西', 'gNum': '827', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 13980.0, 'tokenId': '161785'},
{'albumId': 100000173, 'gId': 100182115, 'gName': '自来也', 'gNum': '979', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 13990.0, 'tokenId': '1676002'},
{'albumId': 100000174, 'gId': 100182393, 'gName': '波风水门', 'gNum': '262', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 15888.0, 'tokenId': '104436'},
{'albumId': 100000175, 'gId': 100183850, 'gName': '第七班', 'gNum': '724', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14860.0, 'tokenId': '110576'},
{'albumId': 100000176, 'gId': 100184516, 'gName': '鸣人VS我爱罗', 'gNum': '395', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14800.0, 'tokenId': '105445'},
{'albumId': 100000177, 'gId': 100185152, 'gName': '漩涡鸣人', 'gNum': '36', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 14000.0, 'tokenId': '106660'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143240, 'gName': '斯巴达（Sparta）', 'gNum': '34', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 60000.0, 'tokenId': '89760'},
{'albumId': 100000155, 'gId': 100143374, 'gName': '雪莉（Sydney）', 'gNum': '68', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 88888.0, 'tokenId': '90408'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 75000.0, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000158, 'gId': 100143792, 'gName': '萨德（Sade）', 'gNum': '104', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 35555.0, 'tokenId': '90202'},
{'albumId': 100000159, 'gId': 100144048, 'gName': '露娜（Luna）', 'gNum': '178', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 33666.0, 'tokenId': '1235537'},
{'albumId': 100000160, 'gId': 100144118, 'gName': '奇迹（Miracle）', 'gNum': '66', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 36666.0, 'tokenId': '89856'},
{'albumId': 100000161, 'gId': 100144337, 'gName': '吉娜（Gina）', 'gNum': '103', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '90751'},
{'albumId': 100000162, 'gId': 100144544, 'gName': '桑迪（Sunday）', 'gNum': '128', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '90479'},
{'albumId': 100000163, 'gId': 100144600, 'gName': '格若瑞娅（Gloria）', 'gNum': '2', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 39999.0, 'tokenId': '90785'},
{'albumId': 100000164, 'gId': 100144782, 'gName': '艾伯纳（Abner）', 'gNum': '2', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38880.0, 'tokenId': '89267'},
{'albumId': 100000165, 'gId': 100145124, 'gName': '泡泡（Bubble）', 'gNum': '162', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 30000.0, 'tokenId': '102214'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101203623, 'gName': 'iBox-CyberMouse', 'gNum': '14525', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2580.0, 'tokenId': '884771'},
{'albumId': 100000323, 'gId': 100514823, 'gName': '张国荣公益数字藏品', 'gNum': '25', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 38666.0, 'tokenId': '665150'},
{'albumId': 100513824, 'gId': 101342212, 'gName': '五虎上将-黄忠', 'gNum': '170', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 72000.0, 'tokenId': '996307'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101725268, 'gName': 'Cece-plants', 'gNum': '236', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 24555.0, 'tokenId': '1341635'},
{'albumId': 100513868, 'gId': 101832269, 'gName': 'Cece-cotton', 'gNum': '1837', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 24500.0, 'tokenId': '1417036'},
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
