// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/all-name-js");
const jsData = require("./data/js-data");

var data =  [{'albumId': 100513745, 'gId': 101017424, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '45', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 21899.0, 'tokenId': '748258'},
{'albumId': 100513865, 'gId': 101727666, 'gName': 'Cece-plants', 'gNum': '2634', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 17989.0, 'tokenId': '1343103'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133000, 'gName': '冥王-哈迪斯', 'gNum': '126', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 86666.88, 'tokenId': '836749'},
{'albumId': 100513779, 'gId': 101134623, 'gName': '智慧女神-雅典娜', 'gNum': '109', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 99988.0, 'tokenId': '836692'},
{'albumId': 100513780, 'gId': 101136424, 'gName': '狩猎女神-阿尔忒弥斯', 'gNum': '270', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 96666.0, 'tokenId': '896350'},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 100000.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 100831678, 'gName': '金钱豹', 'gNum': '175', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 29999.0, 'tokenId': '519589'},
{'albumId': 100513396, 'gId': 100836300, 'gName': '一見有喜 平安長樂', 'gNum': '775', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 9288.0, 'tokenId': '522291'},
{'albumId': 100513397, 'gId': 100837590, 'gName': '一見有喜 平安長樂', 'gNum': '65', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 9285.0, 'tokenId': '523256'},
{'albumId': 100513731, 'gId': 101001924, 'gName': '未来太空之十二大事件', 'gNum': '791', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 28888.0, 'tokenId': '736206'},
{'albumId': 100513736, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010744, 'gName': '功夫小子', 'gNum': '397', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 15432.0, 'tokenId': '743029'},
{'albumId': 100513744, 'gId': 101017198, 'gName': '悟道小子', 'gNum': '293', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 15998.0, 'tokenId': '747806'},
{'albumId': 100513727, 'gId': 100992276, 'gName': 'iBox-虎头小子', 'gNum': '98', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 59990.0, 'tokenId': '727653'},
{'albumId': 100000128, 'gId': 100117974, 'gName': '《找自己》快乐版', 'gNum': '46', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 18888.0, 'tokenId': '59865'},
{'albumId': 100513752, 'gId': 101037260, 'gName': '万国争霸-资源徽章', 'gNum': '111', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 35000.0, 'tokenId': '766686'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 101218962, 'gName': '金瓜满载', 'gNum': '426', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 29588.0, 'tokenId': '908669'},
{'albumId': 100513795, 'gId': 101216948, 'gName': '森林聚会', 'gNum': '262', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 23399.0, 'tokenId': '907778'},
{'albumId': 100513796, 'gId': 101217231, 'gName': '异世界·海之城', 'gNum': '245', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 20888.88, 'tokenId': '908316'},
{'albumId': 100099867, 'gId': 100827446, 'gName': '泰迪熊-空投版', 'gNum': '1228', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 3620.0, 'tokenId': '515595'},
{'albumId': 100000396, 'gId': 100716517, 'gName': 'iBox宣传小标兵', 'gNum': '2410', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8100.0, 'tokenId': '491449'},
{'albumId': 100000190, 'gId': 100230454, 'gName': 'iBox-神牛降瑞', 'gNum': '5266', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 4773.0, 'tokenId': '116748'},
{'albumId': 100000139, 'gId': 100132039, 'gName': 'iBox-金牛献福', 'gNum': '887', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 5100.0, 'tokenId': '74147'},
{'albumId': 100000388, 'gId': 100599528, 'gName': 'iBox-战牛无双', 'gNum': '421', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 3888.0, 'tokenId': '382308'},
{'albumId': 100000394, 'gId': 100709517, 'gName': 'iBox-翔牛摘星', 'gNum': '5910', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1777.0, 'tokenId': '486194'},
{'albumId': 100000383, 'gId': 100594361, 'gName': 'iBox-电牛放歌', 'gNum': '437', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2999.0, 'tokenId': '370374'},
{'albumId': 100000384, 'gId': 100596158, 'gName': 'iBox-电牛放歌', 'gNum': '234', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2999.0, 'tokenId': '372198'},
{'albumId': 100099573, 'gId': 100825122, 'gName': '集牛换虎-虎虎生威', 'gNum': '548', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 21110.0, 'tokenId': '513601'},
{'albumId': 100513807, 'gId': 101275960, 'gName': '大鱼', 'gNum': '2024', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 36880.0, 'tokenId': '976319'},
{'albumId': 100513800, 'gId': 101220073, 'gName': '爱丽丝梦游仙境', 'gNum': '937', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 37000.0, 'tokenId': '911865'},
{'albumId': 100513802, 'gId': 101224425, 'gName': '五虎上将-赵云', 'gNum': '89', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 83210.0, 'tokenId': '913233'},
{'albumId': 100513803, 'gId': 101224625, 'gName': '思情郎 ', 'gNum': '89', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 30988.0, 'tokenId': '913589'},
{'albumId': 100513806, 'gId': 101273364, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2428', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 8888.0, 'tokenId': '972952'},
{'albumId': 100513822, 'gId': 101319327, 'gName': '五虎上将-马超', 'gNum': '225', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 49000.0, 'tokenId': '987274'},
{'albumId': 100513845, 'gId': 101441072, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '1540', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 29000.0, 'tokenId': '1109058'},
{'albumId': 100000169, 'gId': 100167833, 'gName': '闪电（Flash）', 'gNum': '3697', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 3199.0, 'tokenId': '94067'},
{'albumId': 100000118, 'gId': 100044973, 'gName': 'iBox 002号空投版', 'gNum': '851', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 7750.0, 'tokenId': '57973'},
{'albumId': 100513844, 'gId': 101434735, 'gName': '魅紫萄萄', 'gNum': '10203', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2543.0, 'tokenId': '1094967'},
{'albumId': 100513843, 'gId': 101415525, 'gName': '蕃红李李', 'gNum': '5993', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3359.0, 'tokenId': '1070383'},
{'albumId': 100513842, 'gId': 101398150, 'gName': '大芒妖妖', 'gNum': '3618', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 3348.0, 'tokenId': '1060388'},
{'albumId': 100513726, 'gId': 100981058, 'gName': 'iBox−赛博边牧', 'gNum': '45880', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 544.0, 'tokenId': '713451'},
{'albumId': 100000335, 'gId': 100537072, 'gName': 'iBox-潮牛逐浪', 'gNum': '6319', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 899.0, 'tokenId': '329128'},
{'albumId': 100000254, 'gId': 100377557, 'gName': 'iBox-玄牛遂意', 'gNum': '6687', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 685.0, 'tokenId': '206305'},
{'albumId': 100000253, 'gId': 100365774, 'gName': 'iBox-灵牛来喜', 'gNum': '14904', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 928.0, 'tokenId': '190916'},
{'albumId': 100513724, 'gId': 100867496, 'gName': 'iBox-CyberTiger', 'gNum': '6018', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 620.0, 'tokenId': '589872'},
{'albumId': 100513750, 'gId': 101024038, 'gName': 'iBox−赛博蓝猫', 'gNum': '2768', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1220.0, 'tokenId': '752431'},
{'albumId': 100513774, 'gId': 101109021, 'gName': 'iBox−赛博布偶', 'gNum': '27790', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 608.0, 'tokenId': '808204'},
{'albumId': 100000393, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513804, 'gId': 101250239, 'gName': 'iBox-赛博加菲', 'gNum': '25303', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 659.0, 'tokenId': '959305'},
{'albumId': 100513805, 'gId': 101260630, 'gName': 'iBox-赛博哈士奇', 'gNum': '1694', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1728.0, 'tokenId': '960604'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 101288344, 'gName': '玫瑰玫瑰我爱你', 'gNum': '556', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 51000.0, 'tokenId': '1776322'},
{'albumId': 100513814, 'gId': 101288600, 'gName': '夜上海', 'gNum': '212', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 18870.0, 'tokenId': '992938'},
{'albumId': 100513815, 'gId': 101289465, 'gName': '如果没有你', 'gNum': '177', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 18878.0, 'tokenId': '991974'},
{'albumId': 100513816, 'gId': 101292522, 'gName': '俏冤家', 'gNum': '2334', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 4200.0, 'tokenId': '995537'},
{'albumId': 100513820, 'gId': 101317011, 'gName': '好春宵', 'gNum': '6303', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 4200.0, 'tokenId': '1776187'},
{'albumId': 100513818, 'gId': 101307391, 'gName': '蔷薇处处开', 'gNum': '3357', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 4189.0, 'tokenId': '1009114'},
{'albumId': 100513759, 'gId': 101040441, 'gName': '伊爱娃（IARA）', 'gNum': '678', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 40000.0, 'tokenId': '1242364'},
{'albumId': 100513761, 'gId': 101041025, 'gName': '佛里奥索（FURIOSA）', 'gNum': '542', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 14440.0, 'tokenId': '891179'},
{'albumId': 100513762, 'gId': 101041916, 'gName': '贝贝（BEBE）', 'gNum': '683', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 14222.0, 'tokenId': '1004185'},
{'albumId': 100513763, 'gId': 101043130, 'gName': '普普拉（PURPURA）', 'gNum': '1147', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 5288.0, 'tokenId': '834088'},
{'albumId': 100513764, 'gId': 101044865, 'gName': '拉万达（LAVANDA）', 'gNum': '826', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 4885.0, 'tokenId': '781829'},
{'albumId': 100513765, 'gId': 101046703, 'gName': '布兰卡（BRANCA）', 'gNum': '608', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 4940.0, 'tokenId': '780663'},
{'albumId': 100513766, 'gId': 101049053, 'gName': '紫月（MINGUANTE）', 'gNum': '902', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 5085.0, 'tokenId': '791954'},
{'albumId': 100513767, 'gId': 101052052, 'gName': '橙日（CRESCENTE）', 'gNum': '1845', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 4997.0, 'tokenId': '986651'},
{'albumId': 100513768, 'gId': 101052660, 'gName': '蓝日（NOVA）', 'gNum': '397', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 4880.0, 'tokenId': '777453'},
{'albumId': 100513769, 'gId': 101055320, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '1001', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 4779.0, 'tokenId': '832631'},
{'albumId': 100513770, 'gId': 101056519, 'gName': '维洛（VELOZ）', 'gNum': '144', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 4769.0, 'tokenId': '774950'},
{'albumId': 100513771, 'gId': 101059951, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '1520', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 5200.0, 'tokenId': '891747'},
{'albumId': 100513712, 'gId': 100841467, 'gName': '林黛玉', 'gNum': '689', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 45000.0, 'tokenId': '913153'},
{'albumId': 100513713, 'gId': 100841799, 'gName': '薛宝钗', 'gNum': '321', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14588.0, 'tokenId': '660398'},
{'albumId': 100513714, 'gId': 100842972, 'gName': '史湘云', 'gNum': '744', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 14000.0, 'tokenId': '913856'},
{'albumId': 100513715, 'gId': 100844256, 'gName': '秦可卿', 'gNum': '1278', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7988.0, 'tokenId': '664551'},
{'albumId': 100513716, 'gId': 100845756, 'gName': '王熙凤', 'gNum': '723', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 6399.0, 'tokenId': '658753'},
{'albumId': 100513717, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513718, 'gId': 100849243, 'gName': '贾探春', 'gNum': '100', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 6200.0, 'tokenId': '644708'},
{'albumId': 100513719, 'gId': 100851480, 'gName': '贾惜春', 'gNum': '282', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5999.0, 'tokenId': '654397'},
{'albumId': 100513720, 'gId': 100855282, 'gName': '贾迎春', 'gNum': '2028', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 7700.0, 'tokenId': '912636'},
{'albumId': 100513721, 'gId': 100855977, 'gName': '贾元春', 'gNum': '667', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5899.0, 'tokenId': '658222'},
{'albumId': 100513722, 'gId': 100859244, 'gName': '李纨', 'gNum': '1878', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 6665.0, 'tokenId': '747243'},
{'albumId': 100513723, 'gId': 100860620, 'gName': '妙玉', 'gNum': '1198', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5999.0, 'tokenId': '663368'},
{'albumId': 100092612, 'gId': 100754594, 'gName': '经典熊', 'gNum': '342', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 39555.0, 'tokenId': '778138'},
{'albumId': 100092613, 'gId': 100754821, 'gName': '万圣熊', 'gNum': '213', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 14222.0, 'tokenId': '498265'},
{'albumId': 100092614, 'gId': 100755729, 'gName': '精灵熊', 'gNum': '519', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 14200.0, 'tokenId': '553893'},
{'albumId': 100092616, 'gId': 100756616, 'gName': '摇滚熊', 'gNum': '801', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6658.0, 'tokenId': '525290'},
{'albumId': 100092617, 'gId': 100757882, 'gName': '美女熊', 'gNum': '1018', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6666.0, 'tokenId': '892312'},
{'albumId': 100092618, 'gId': 100758068, 'gName': '可可熊', 'gNum': '157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6666.0, 'tokenId': '495803'},
{'albumId': 100092619, 'gId': 100759978, 'gName': '迪奇克熊', 'gNum': '1020', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6500.0, 'tokenId': '1240616'},
{'albumId': 100092620, 'gId': 100760958, 'gName': '剑士熊', 'gNum': '950', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6588.0, 'tokenId': '584557'},
{'albumId': 100092622, 'gId': 100761949, 'gName': '全机甲熊', 'gNum': '895', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6587.0, 'tokenId': '554038'},
{'albumId': 100092624, 'gId': 100762294, 'gName': '斗士熊', 'gNum': '190', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6589.0, 'tokenId': '495331'},
{'albumId': 100092625, 'gId': 100763554, 'gName': '军团熊', 'gNum': '401', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6599.0, 'tokenId': '498516'},
{'albumId': 100092627, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100092628, 'gId': 100765602, 'gName': '机器人熊', 'gNum': '356', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 6588.0, 'tokenId': '497883'},
{'albumId': 100000317, 'gId': 100490441, 'gName': '同道大叔', 'gNum': '222', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 57777.0, 'tokenId': '260769'},
{'albumId': 100000316, 'gId': 100490169, 'gName': '大魔术师', 'gNum': '949', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 20798.0, 'tokenId': '749624'},
{'albumId': 100000315, 'gId': 100488901, 'gName': '奇幻马戏团', 'gNum': '680', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 20798.0, 'tokenId': '353509'},
{'albumId': 100000303, 'gId': 100469324, 'gName': '白羊座：加利斯', 'gNum': '1428', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9500.0, 'tokenId': '1414786'},
{'albumId': 100000318, 'gId': 100475701, 'gName': '金牛座：牛丢丢', 'gNum': '545', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7666.0, 'tokenId': '260315'},
{'albumId': 100000319, 'gId': 100477330, 'gName': '双子座：猫院长', 'gNum': '722', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 8555.0, 'tokenId': '341694'},
{'albumId': 100000306, 'gId': 100473603, 'gName': '巨蟹座：蛋丁', 'gNum': '1351', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9478.0, 'tokenId': '739637'},
{'albumId': 100000307, 'gId': 100475134, 'gName': '狮子座：狮总裁', 'gNum': '1430', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9688.0, 'tokenId': '1106034'},
{'albumId': 100000308, 'gId': 100478244, 'gName': '处女座：矮豆豆', 'gNum': '184', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 11887.0, 'tokenId': '255918'},
{'albumId': 100000309, 'gId': 100480328, 'gName': '天秤座：窝窝鸡', 'gNum': '816', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7777.0, 'tokenId': '347783'},
{'albumId': 100000310, 'gId': 100482394, 'gName': '天蝎座：雷猴', 'gNum': '1430', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7699.0, 'tokenId': '1106099'},
{'albumId': 100000311, 'gId': 100483835, 'gName': '射手座：格雷', 'gNum': '1419', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 8499.0, 'tokenId': '974153'},
{'albumId': 100000312, 'gId': 100484696, 'gName': '摩羯座：奋斗熊', 'gNum': '828', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7777.77, 'tokenId': '348047'},
{'albumId': 100000313, 'gId': 100485489, 'gName': '水瓶座：格白尼', 'gNum': '170', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10300.0, 'tokenId': '256013'},
{'albumId': 100000314, 'gId': 100486987, 'gName': '双鱼座：小超鱼', 'gNum': '217', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 9995.0, 'tokenId': '256751'},
{'albumId': 100000233, 'gId': 100266968, 'gName': '斯派修姆光线', 'gNum': '98', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 74881.81, 'tokenId': '242642'},
{'albumId': 100000234, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000235, 'gId': 100268123, 'gName': '捕捉光环', 'gNum': '305', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 26000.0, 'tokenId': '248959'},
{'albumId': 100000236, 'gId': 100268574, 'gName': '奥特意念光线', 'gNum': '157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 25000.0, 'tokenId': '242644'},
{'albumId': 100000237, 'gId': 100269292, 'gName': '奥特屏障', 'gNum': '276', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7322.11, 'tokenId': '243150'},
{'albumId': 100000238, 'gId': 100270361, 'gName': '空中撞击战法', 'gNum': '587', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 6950.0, 'tokenId': '355047'},
{'albumId': 100000239, 'gId': 100270924, 'gName': '奥特念力', 'gNum': '392', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7160.0, 'tokenId': '244755'},
{'albumId': 100000240, 'gId': 100271484, 'gName': '奥特水流', 'gNum': '194', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7088.0, 'tokenId': '241684'},
{'albumId': 100000241, 'gId': 100272280, 'gName': '奥特瞬间移动', 'gNum': '232', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7200.0, 'tokenId': '242179'},
{'albumId': 100000242, 'gId': 100273081, 'gName': '奥特高速旋转', 'gNum': '275', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7111.0, 'tokenId': '242884'},
{'albumId': 100000243, 'gId': 100273920, 'gName': '巨大化能力', 'gNum': '356', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7050.0, 'tokenId': '244303'},
{'albumId': 100000244, 'gId': 100274481, 'gName': '碎裂光线', 'gNum': '159', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 6999.0, 'tokenId': '240888'},
{'albumId': 100000245, 'gId': 100275192, 'gName': '奥特眼光线', 'gNum': '112', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7500.0, 'tokenId': '241026'},
{'albumId': 100000246, 'gId': 100276219, 'gName': '超级过肩摔', 'gNum': '381', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7128.0, 'tokenId': '245016'},
{'albumId': 100000247, 'gId': 100276866, 'gName': '防御能力', 'gNum': '270', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 6948.0, 'tokenId': '243410'},
{'albumId': 100000248, 'gId': 100278034, 'gName': '光线白刃取', 'gNum': '680', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7199.0, 'tokenId': '723296'},
{'albumId': 100000249, 'gId': 100278764, 'gName': '奥特空中意念捕捉', 'gNum': '652', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 7170.0, 'tokenId': '554229'},
{'albumId': 100000180, 'gId': 100187105, 'gName': '木叶村众人', 'gNum': '194', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 94888.0, 'tokenId': '117859'},
{'albumId': 100000179, 'gId': 100186654, 'gName': '鸣人VS佐助', 'gNum': '143', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 20999.0, 'tokenId': '105100'},
{'albumId': 100000178, 'gId': 100186434, 'gName': '奇拉比&鸣人', 'gNum': '323', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 24444.0, 'tokenId': '121489'},
{'albumId': 100000171, 'gId': 100179348, 'gName': '宇智波佐助', 'gNum': '202', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 7200.0, 'tokenId': '106102'},
{'albumId': 100000172, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000173, 'gId': 100181418, 'gName': '自来也', 'gNum': '282', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 7266.0, 'tokenId': '104610'},
{'albumId': 100000174, 'gId': 100183066, 'gName': '波风水门', 'gNum': '935', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 7280.0, 'tokenId': '653136'},
{'albumId': 100000175, 'gId': 100183302, 'gName': '第七班', 'gNum': '176', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 7200.0, 'tokenId': '106336'},
{'albumId': 100000176, 'gId': 100184651, 'gName': '鸣人VS我爱罗', 'gNum': '530', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 7200.0, 'tokenId': '107071'},
{'albumId': 100000177, 'gId': 100185901, 'gName': '漩涡鸣人', 'gNum': '785', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 7250.0, 'tokenId': '118817'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143240, 'gName': '斯巴达（Sparta）', 'gNum': '34', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 60000.0, 'tokenId': '89760'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 86666.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 75000.0, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143646, 'gName': '麦克思（Max）', 'gNum': '140', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38888.0, 'tokenId': '90808'},
{'albumId': 100000158, 'gId': 100143757, 'gName': '萨德（Sade）', 'gNum': '69', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 24000.0, 'tokenId': '89851'},
{'albumId': 100000159, 'gId': 100144041, 'gName': '露娜（Luna）', 'gNum': '171', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 19888.0, 'tokenId': '358041'},
{'albumId': 100000160, 'gId': 100144087, 'gName': '奇迹（Miracle）', 'gNum': '35', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 19998.0, 'tokenId': '89540'},
{'albumId': 100000161, 'gId': 100144301, 'gName': '吉娜（Gina）', 'gNum': '67', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26555.0, 'tokenId': '89899'},
{'albumId': 100000162, 'gId': 100144466, 'gName': '桑迪（Sunday）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 28999.0, 'tokenId': '89621'},
{'albumId': 100000163, 'gId': 100144724, 'gName': '格若瑞娅（Gloria）', 'gNum': '126', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 22222.0, 'tokenId': '90474'},
{'albumId': 100000164, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000165, 'gId': 100144963, 'gName': '泡泡（Bubble）', 'gNum': '1', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 33333.0, 'tokenId': '89175'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101202604, 'gName': 'iBox-CyberMouse', 'gNum': '13506', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1719.0, 'tokenId': '878304'},
{'albumId': 100000323, 'gId': 100514823, 'gName': '张国荣公益数字藏品', 'gNum': '25', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 42888.0, 'tokenId': '665150'},
{'albumId': 100513824, 'gId': 101342438, 'gName': '五虎上将-黄忠', 'gNum': '396', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 49880.0, 'tokenId': '996239'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101726720, 'gName': 'Cece-plants', 'gNum': '1688', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 17988.0, 'tokenId': '1345580'},
{'albumId': 100513868, 'gId': 101834172, 'gName': 'Cece-cotton', 'gNum': '3740', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 17959.0, 'tokenId': '1417418'},
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
