// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 牛      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 陶喆    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10013146&page=1&pageSize=60&type=3

// 每天12点运行一次

const xlsx = require("node-xlsx");
const fs = require("fs");
const moment = require("moment");
const name = require("../public/all-name-js");
const jsData = require("./data/js-data");

var data =  [{'albumId': 100513745, 'gId': 101017853, 'gName': '火与工匠之神-赫菲斯托斯', 'gNum': '474', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 16444.0, 'tokenId': '748689'},
{'albumId': 100513777, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513778, 'gId': 101133347, 'gName': '冥王-哈迪斯', 'gNum': '473', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 83990.0, 'tokenId': '986501'},
{'albumId': 100513779, 'gId': 101134990, 'gName': '智慧女神-雅典娜', 'gNum': '476', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 88888.0, 'tokenId': '986504'},
{'albumId': 100513780, 'gId': 101136424, 'gName': '狩猎女神-阿尔忒弥斯', 'gNum': '270', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 96666.0, 'tokenId': '896350'},
{'albumId': 100513781, 'gId': 101137115, 'gName': '太阳神-阿波罗', 'gNum': '161', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10125612, 'ownerName': '李延', 'priceCny': 100000.0, 'tokenId': '986530'},
{'albumId': 100100115, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513396, 'gId': 100835549, 'gName': '一見有喜 平安長樂', 'gNum': '24', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 5749.0, 'tokenId': '521557'},
{'albumId': 100513397, 'gId': 100837737, 'gName': '一見有喜 平安長樂', 'gNum': '212', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10156643, 'ownerName': '何宽', 'priceCny': 5799.0, 'tokenId': '523397'},
{'albumId': 100513731, 'gId': 101002539, 'gName': '未来太空之十二大事件', 'gNum': '1406', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10154300, 'ownerName': '王泽工作室', 'priceCny': 22899.0, 'tokenId': '737412'},
{'albumId': 100513736, 'gId': 101007317, 'gName': '月球探测器', 'gNum': '1103', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 15000.0, 'tokenId': '738358'},
{'albumId': 100513737, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513741, 'gId': 101010557, 'gName': '功夫小子', 'gNum': '210', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 9700.0, 'tokenId': '742918'},
{'albumId': 100513744, 'gId': 101016999, 'gName': '悟道小子', 'gNum': '94', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 13998.0, 'tokenId': '747762'},
{'albumId': 100513727, 'gId': 100992276, 'gName': 'iBox-虎头小子', 'gNum': '98', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 59990.0, 'tokenId': '727653'},
{'albumId': 100000128, 'gId': 100117975, 'gName': '《找自己》快乐版', 'gNum': '47', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 22222.0, 'tokenId': '59866'},
{'albumId': 100513752, 'gId': 101037523, 'gName': '万国争霸-资源徽章', 'gNum': '374', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 28999.0, 'tokenId': '766918'},
{'albumId': 100513756, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513758, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513790, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513799, 'gId': 101218953, 'gName': '金瓜满载', 'gNum': '417', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10526428, 'ownerName': '刘向东', 'priceCny': 17900.0, 'tokenId': '908663'},
{'albumId': 100513795, 'gId': 101216714, 'gName': '森林聚会', 'gNum': '28', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525665, 'ownerName': '喵小蛋', 'priceCny': 21000.0, 'tokenId': '907635'},
{'albumId': 100513796, 'gId': 101217203, 'gName': '异世界·海之城', 'gNum': '217', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10525915, 'ownerName': '爱豆', 'priceCny': 14888.0, 'tokenId': '908025'},
{'albumId': 100099867, 'gId': 100827824, 'gName': '泰迪熊-空投版', 'gNum': '1606', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 2497.0, 'tokenId': '515980'},
{'albumId': 100000396, 'gId': 100715517, 'gName': 'iBox宣传小标兵', 'gNum': '1410', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 6799.0, 'tokenId': '491987'},
{'albumId': 100000190, 'gId': 100228612, 'gName': 'iBox-神牛降瑞', 'gNum': '3424', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2748.0, 'tokenId': '114097'},
{'albumId': 100000139, 'gId': 100132335, 'gName': 'iBox-金牛献福', 'gNum': '1183', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2997.77, 'tokenId': '74381'},
{'albumId': 100000388, 'gId': 100600714, 'gName': 'iBox-战牛无双', 'gNum': '1607', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 2340.0, 'tokenId': '383287'},
{'albumId': 100000394, 'gId': 100712221, 'gName': 'iBox-翔牛摘星', 'gNum': '8614', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1048.99, 'tokenId': '488846'},
{'albumId': 100000383, 'gId': 100595151, 'gName': 'iBox-电牛放歌', 'gNum': '1227', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1798.88, 'tokenId': '371153'},
{'albumId': 100000384, 'gId': 100595995, 'gName': 'iBox-电牛放歌', 'gNum': '71', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 1807.0, 'tokenId': '372036'},
{'albumId': 100099573, 'gId': 100825120, 'gName': '集牛换虎-虎虎生威', 'gNum': '546', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 12795.81, 'tokenId': '513599'},
{'albumId': 100513807, 'gId': 101275792, 'gName': '大鱼', 'gNum': '1856', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 26000.0, 'tokenId': '976076'},
{'albumId': 100513800, 'gId': 101219324, 'gName': '爱丽丝梦游仙境', 'gNum': '188', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10537822, 'ownerName': '西图', 'priceCny': 27000.0, 'tokenId': '911222'},
{'albumId': 100513802, 'gId': 101224393, 'gName': '五虎上将-赵云', 'gNum': '57', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 79999.0, 'tokenId': '913254'},
{'albumId': 100513803, 'gId': 101224920, 'gName': '思情郎 ', 'gNum': '384', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10556513, 'ownerName': '邓海波', 'priceCny': 21222.0, 'tokenId': '1050037'},
{'albumId': 100513806, 'gId': 101273127, 'gName': 'iBox-赛博司芬克斯', 'gNum': '2191', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5850.0, 'tokenId': '973120'},
{'albumId': 100513822, 'gId': 101319472, 'gName': '五虎上将-马超', 'gNum': '370', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 47889.0, 'tokenId': '987661'},
{'albumId': 100513845, 'gId': 101439781, 'gName': '威尼斯双年艺术展纪念海报', 'gNum': '249', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10886326, 'ownerName': '杨嘎', 'priceCny': 31888.0, 'tokenId': '1096783'},
{'albumId': 100000169, 'gId': 100169333, 'gName': '闪电（Flash）', 'gNum': '5197', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 1629.0, 'tokenId': '95263'},
{'albumId': 100000118, 'gId': 100044885, 'gName': 'iBox 002号空投版', 'gNum': '763', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10013146, 'ownerName': 'iFans NFT', 'priceCny': 4333.0, 'tokenId': '57858'},
{'albumId': 100513844, 'gId': 101425869, 'gName': '魅紫萄萄', 'gNum': '1337', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2299.0, 'tokenId': '1081434'},
{'albumId': 100513843, 'gId': 101419869, 'gName': '蕃红李李', 'gNum': '10337', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2850.0, 'tokenId': '1074262'},
{'albumId': 100513842, 'gId': 101397444, 'gName': '大芒妖妖', 'gNum': '2912', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 2878.0, 'tokenId': '1059598'},
{'albumId': 100513726, 'gId': 100961110, 'gName': 'iBox−赛博边牧', 'gNum': '25932', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 439.98, 'tokenId': '682191'},
{'albumId': 100000335, 'gId': 100544666, 'gName': 'iBox-潮牛逐浪', 'gNum': '13913', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 648.88, 'tokenId': '336048'},
{'albumId': 100000254, 'gId': 100397775, 'gName': 'iBox-玄牛遂意', 'gNum': '26905', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 559.0, 'tokenId': '224556'},
{'albumId': 100000253, 'gId': 100360958, 'gName': 'iBox-灵牛来喜', 'gNum': '10088', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10029480, 'ownerName': 'mococo', 'priceCny': 740.0, 'tokenId': '185774'},
{'albumId': 100513724, 'gId': 100882863, 'gName': 'iBox-CyberTiger', 'gNum': '21385', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 519.0, 'tokenId': '605000'},
{'albumId': 100513750, 'gId': 101024744, 'gName': 'iBox−赛博蓝猫', 'gNum': '3474', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 879.0, 'tokenId': '752878'},
{'albumId': 100513774, 'gId': 101120864, 'gName': 'iBox−赛博布偶', 'gNum': '39633', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 500.0, 'tokenId': '824641'},
{'albumId': 100000393, 'gId': 100678567, 'gName': 'I‘m Sorry', 'gNum': '74960', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 378.0, 'tokenId': '458874'},
{'albumId': 100513804, 'gId': 101252109, 'gName': 'iBox-赛博加菲', 'gNum': '27173', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 499.0, 'tokenId': '950955'},
{'albumId': 100513805, 'gId': 101259320, 'gName': 'iBox-赛博哈士奇', 'gNum': '384', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1218.0, 'tokenId': '959625'},
{'albumId': 100513812, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513813, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513814, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513815, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513816, 'gId': 101291573, 'gName': '俏冤家', 'gNum': '1385', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2955.0, 'tokenId': '992315'},
{'albumId': 100513820, 'gId': 101316528, 'gName': '好春宵', 'gNum': '5820', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2959.0, 'tokenId': '1242013'},
{'albumId': 100513818, 'gId': 101308215, 'gName': '蔷薇处处开', 'gNum': '4181', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10520315, 'ownerName': '华韵传媒股份有限公司', 'priceCny': 2976.0, 'tokenId': '1104215'},
{'albumId': 100513759, 'gId': 101040435, 'gName': '伊爱娃（IARA）', 'gNum': '672', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 35777.0, 'tokenId': '1242140'},
{'albumId': 100513761, 'gId': 101040765, 'gName': '佛里奥索（FURIOSA）', 'gNum': '282', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 9099.0, 'tokenId': '781248'},
{'albumId': 100513762, 'gId': 101041907, 'gName': '贝贝（BEBE）', 'gNum': '674', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 9418.0, 'tokenId': '1002805'},
{'albumId': 100513763, 'gId': 101042104, 'gName': '普普拉（PURPURA）', 'gNum': '121', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2900.0, 'tokenId': '774716'},
{'albumId': 100513764, 'gId': 101044915, 'gName': '拉万达（LAVANDA）', 'gNum': '876', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2988.0, 'tokenId': '783386'},
{'albumId': 100513765, 'gId': 101048022, 'gName': '布兰卡（BRANCA）', 'gNum': '1927', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 3050.0, 'tokenId': '1110693'},
{'albumId': 100513766, 'gId': 101049769, 'gName': '紫月（MINGUANTE）', 'gNum': '1618', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 3110.0, 'tokenId': '892637'},
{'albumId': 100513767, 'gId': 101050874, 'gName': '橙日（CRESCENTE）', 'gNum': '667', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2998.0, 'tokenId': '779795'},
{'albumId': 100513768, 'gId': 101052342, 'gName': '蓝日（NOVA）', 'gNum': '79', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 3080.0, 'tokenId': '774475'},
{'albumId': 100513769, 'gId': 101054479, 'gName': '昂蒂娜（ONDINHA）', 'gNum': '160', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2998.99, 'tokenId': '775181'},
{'albumId': 100513770, 'gId': 101056904, 'gName': '维洛（VELOZ）', 'gNum': '529', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2985.0, 'tokenId': '778973'},
{'albumId': 100513771, 'gId': 101060267, 'gName': '艾斯波列塔（ESPOLETA）', 'gNum': '1836', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10453154, 'ownerName': 'Francisco Terra', 'priceCny': 2900.0, 'tokenId': '987160'},
{'albumId': 100513712, 'gId': 100840854, 'gName': '林黛玉', 'gNum': '76', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 33333.0, 'tokenId': '653658'},
{'albumId': 100513713, 'gId': 100841596, 'gName': '薛宝钗', 'gNum': '118', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 9887.0, 'tokenId': '655044'},
{'albumId': 100513714, 'gId': 100842337, 'gName': '史湘云', 'gNum': '109', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 10666.0, 'tokenId': '654662'},
{'albumId': 100513715, 'gId': 100844256, 'gName': '秦可卿', 'gNum': '1278', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4978.0, 'tokenId': '664551'},
{'albumId': 100513716, 'gId': 100846188, 'gName': '王熙凤', 'gNum': '1155', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4487.0, 'tokenId': '663311'},
{'albumId': 100513717, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513718, 'gId': 100850518, 'gName': '贾探春', 'gNum': '1375', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 6653.0, 'tokenId': '665627'},
{'albumId': 100513719, 'gId': 100851423, 'gName': '贾惜春', 'gNum': '225', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 5999.0, 'tokenId': '653698'},
{'albumId': 100513720, 'gId': 100855291, 'gName': '贾迎春', 'gNum': '2037', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4700.0, 'tokenId': '1108890'},
{'albumId': 100513721, 'gId': 100856558, 'gName': '贾元春', 'gNum': '1248', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4629.0, 'tokenId': '664429'},
{'albumId': 100513722, 'gId': 100858523, 'gName': '李纨', 'gNum': '1157', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4598.0, 'tokenId': '663776'},
{'albumId': 100513723, 'gId': 100860948, 'gName': '妙玉', 'gNum': '1526', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 4800.0, 'tokenId': '727412'},
{'albumId': 100092612, 'gId': 100754360, 'gName': '经典熊', 'gNum': '108', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 32000.0, 'tokenId': '496791'},
{'albumId': 100092613, 'gId': 100755062, 'gName': '万圣熊', 'gNum': '454', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 10555.66, 'tokenId': '512041'},
{'albumId': 100092614, 'gId': 100755488, 'gName': '精灵熊', 'gNum': '278', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 10800.0, 'tokenId': '499072'},
{'albumId': 100092616, 'gId': 100755879, 'gName': '摇滚熊', 'gNum': '64', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4000.0, 'tokenId': '494387'},
{'albumId': 100092617, 'gId': 100757151, 'gName': '美女熊', 'gNum': '287', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4159.0, 'tokenId': '496607'},
{'albumId': 100092618, 'gId': 100758645, 'gName': '可可熊', 'gNum': '734', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4050.0, 'tokenId': '502193'},
{'albumId': 100092619, 'gId': 100759113, 'gName': '迪奇克熊', 'gNum': '155', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4099.0, 'tokenId': '495862'},
{'albumId': 100092620, 'gId': 100760887, 'gName': '剑士熊', 'gNum': '879', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4099.0, 'tokenId': '553558'},
{'albumId': 100092622, 'gId': 100761304, 'gName': '全机甲熊', 'gNum': '250', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4160.0, 'tokenId': '497397'},
{'albumId': 100092624, 'gId': 100762489, 'gName': '斗士熊', 'gNum': '385', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4065.0, 'tokenId': '498008'},
{'albumId': 100092625, 'gId': 100763244, 'gName': '军团熊', 'gNum': '91', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4100.0, 'tokenId': '494363'},
{'albumId': 100092627, 'gId': 100764487, 'gName': '半机甲熊', 'gNum': '289', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4147.0, 'tokenId': '496703'},
{'albumId': 100092628, 'gId': 100766114, 'gName': '机器人熊', 'gNum': '868', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10152895, 'ownerName': '至深无下贸易（上海）有限公司', 'priceCny': 4110.0, 'tokenId': '552966'},
{'albumId': 100000317, 'gId': 100490223, 'gName': '同道大叔', 'gNum': '4', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 44666.0, 'tokenId': '253962'},
{'albumId': 100000316, 'gId': 100489604, 'gName': '大魔术师', 'gNum': '384', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10970.0, 'tokenId': '260226'},
{'albumId': 100000315, 'gId': 100488227, 'gName': '奇幻马戏团', 'gNum': '6', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 10999.0, 'tokenId': '252622'},
{'albumId': 100000303, 'gId': 100468438, 'gName': '白羊座：加利斯', 'gNum': '542', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6666.0, 'tokenId': '259879'},
{'albumId': 100000318, 'gId': 100475909, 'gName': '金牛座：牛丢丢', 'gNum': '753', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6666.0, 'tokenId': '346577'},
{'albumId': 100000319, 'gId': 100478024, 'gName': '双子座：猫院长', 'gNum': '1416', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5488.0, 'tokenId': '1110783'},
{'albumId': 100000306, 'gId': 100473302, 'gName': '巨蟹座：蛋丁', 'gNum': '1050', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6999.0, 'tokenId': '354413'},
{'albumId': 100000307, 'gId': 100474351, 'gName': '狮子座：狮总裁', 'gNum': '647', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5555.0, 'tokenId': '261730'},
{'albumId': 100000308, 'gId': 100479497, 'gName': '处女座：矮豆豆', 'gNum': '1437', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6618.0, 'tokenId': '1235528'},
{'albumId': 100000309, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000310, 'gId': 100481957, 'gName': '天蝎座：雷猴', 'gNum': '993', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5888.0, 'tokenId': '353431'},
{'albumId': 100000311, 'gId': 100482952, 'gName': '射手座：格雷', 'gNum': '536', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5799.0, 'tokenId': '259833'},
{'albumId': 100000312, 'gId': 100483999, 'gName': '摩羯座：奋斗熊', 'gNum': '131', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 5222.0, 'tokenId': '253865'},
{'albumId': 100000313, 'gId': 100486735, 'gName': '水瓶座：格白尼', 'gNum': '1416', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 7499.0, 'tokenId': '974167'},
{'albumId': 100000314, 'gId': 100487013, 'gName': '双鱼座：小超鱼', 'gNum': '243', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10105765, 'ownerName': '同道大叔', 'priceCny': 6288.0, 'tokenId': '255054'},
{'albumId': 100000233, 'gId': 100267147, 'gName': '斯派修姆光线', 'gNum': '277', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 69999.0, 'tokenId': '355188'},
{'albumId': 100000234, 'gId': 100267648, 'gName': '八分光轮', 'gNum': '429', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 16888.88, 'tokenId': '350217'},
{'albumId': 100000235, 'gId': 100268293, 'gName': '捕捉光环', 'gNum': '475', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 16500.0, 'tokenId': '493066'},
{'albumId': 100000236, 'gId': 100268924, 'gName': '奥特意念光线', 'gNum': '507', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 16500.0, 'tokenId': '493343'},
{'albumId': 100000237, 'gId': 100269238, 'gName': '奥特屏障', 'gNum': '222', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4949.0, 'tokenId': '241920'},
{'albumId': 100000238, 'gId': 100270376, 'gName': '空中撞击战法', 'gNum': '602', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5555.0, 'tokenId': '357967'},
{'albumId': 100000239, 'gId': 100271257, 'gName': '奥特念力', 'gNum': '725', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5200.0, 'tokenId': '771695'},
{'albumId': 100000240, 'gId': 100271815, 'gName': '奥特水流', 'gNum': '525', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5250.0, 'tokenId': '350090'},
{'albumId': 100000241, 'gId': 100272275, 'gName': '奥特瞬间移动', 'gNum': '227', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5300.0, 'tokenId': '242089'},
{'albumId': 100000242, 'gId': 100272962, 'gName': '奥特高速旋转', 'gNum': '156', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5099.0, 'tokenId': '242582'},
{'albumId': 100000243, 'gId': 100274301, 'gName': '巨大化能力', 'gNum': '737', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5188.88, 'tokenId': '1098002'},
{'albumId': 100000244, 'gId': 100274446, 'gName': '碎裂光线', 'gNum': '124', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5450.0, 'tokenId': '240465'},
{'albumId': 100000245, 'gId': 100275119, 'gName': '奥特眼光线', 'gNum': '39', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5100.0, 'tokenId': '239636'},
{'albumId': 100000246, 'gId': 100276287, 'gName': '超级过肩摔', 'gNum': '449', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5000.0, 'tokenId': '249720'},
{'albumId': 100000247, 'gId': 100277283, 'gName': '防御能力', 'gNum': '687', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 4950.0, 'tokenId': '740675'},
{'albumId': 100000248, 'gId': 100277650, 'gName': '光线白刃取', 'gNum': '296', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5199.0, 'tokenId': '243584'},
{'albumId': 100000249, 'gId': 100278185, 'gName': '奥特空中意念捕捉', 'gNum': '73', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10066598, 'ownerName': 'PG Gallery', 'priceCny': 5099.0, 'tokenId': '239851'},
{'albumId': 100000180, 'gId': 100186969, 'gName': '木叶村众人', 'gNum': '58', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 86600.0, 'tokenId': '103716'},
{'albumId': 100000179, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000178, 'gId': 100186302, 'gName': '奇拉比&鸣人', 'gNum': '191', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 12688.0, 'tokenId': '106388'},
{'albumId': 100000171, 'gId': 100179862, 'gName': '宇智波佐助', 'gNum': '716', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5299.0, 'tokenId': '110068'},
{'albumId': 100000172, 'gId': 100180345, 'gName': '旗木卡卡西', 'gNum': '204', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5386.0, 'tokenId': '104888'},
{'albumId': 100000173, 'gId': 100181290, 'gName': '自来也', 'gNum': '154', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5339.0, 'tokenId': '103740'},
{'albumId': 100000174, 'gId': 100182168, 'gName': '波风水门', 'gNum': '37', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5298.0, 'tokenId': '102957'},
{'albumId': 100000175, 'gId': 100184047, 'gName': '第七班', 'gNum': '921', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5811.0, 'tokenId': '552871'},
{'albumId': 100000176, 'gId': 100184132, 'gName': '鸣人VS我爱罗', 'gNum': '11', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5398.0, 'tokenId': '102704'},
{'albumId': 100000177, 'gId': 100185805, 'gName': '漩涡鸣人', 'gNum': '689', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10037662, 'ownerName': '果丽文化', 'priceCny': 5300.0, 'tokenId': '108699'},
{'albumId': 100000153, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100000154, 'gId': 100143262, 'gName': '斯巴达（Sparta）', 'gNum': '56', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 61000.88, 'tokenId': '90183'},
{'albumId': 100000155, 'gId': 100143389, 'gName': '雪莉（Sydney）', 'gNum': '83', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 58888.0, 'tokenId': '90957'},
{'albumId': 100000156, 'gId': 100143409, 'gName': '迪赛尔（Diesel）', 'gNum': '3', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 78880.11, 'tokenId': '89250'},
{'albumId': 100000157, 'gId': 100143646, 'gName': '麦克思（Max）', 'gNum': '140', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38888.0, 'tokenId': '90808'},
{'albumId': 100000158, 'gId': 100143827, 'gName': '萨德（Sade）', 'gNum': '139', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 17777.0, 'tokenId': '90550'},
{'albumId': 100000159, 'gId': 100144040, 'gName': '露娜（Luna）', 'gNum': '170', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 45000.0, 'tokenId': '355118'},
{'albumId': 100000160, 'gId': 100144196, 'gName': '奇迹（Miracle）', 'gNum': '144', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 40000.0, 'tokenId': '90801'},
{'albumId': 100000161, 'gId': 100144301, 'gName': '吉娜（Gina）', 'gNum': '67', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 26555.0, 'tokenId': '89899'},
{'albumId': 100000162, 'gId': 100144466, 'gName': '桑迪（Sunday）', 'gNum': '50', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 24999.0, 'tokenId': '89621'},
{'albumId': 100000163, 'gId': 100144724, 'gName': '格若瑞娅（Gloria）', 'gNum': '126', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 49999.0, 'tokenId': '90474'},
{'albumId': 100000164, 'gId': 100144914, 'gName': '艾伯纳（Abner）', 'gNum': '134', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 17880.0, 'tokenId': '90543'},
{'albumId': 100000165, 'gId': 100145005, 'gName': '泡泡（Bubble）', 'gNum': '43', 'gStatus': 6, 'isBuy': 0, 'ownerId': 10031408, 'ownerName': 'GfanX Inc.', 'priceCny': 38888.0, 'tokenId': '89595'},
{'albumId': 100513869, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513784, 'gId': 101197604, 'gName': 'iBox-CyberMouse', 'gNum': '8506', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10133453, 'ownerName': 'iBox', 'priceCny': 1343.0, 'tokenId': '883939'},
{'albumId': 100000323, 'gId': 100514812, 'gName': '张国荣公益数字藏品', 'gNum': '14', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10113583, 'ownerName': '厦门任星投资有限公司', 'priceCny': 36000.0, 'tokenId': '665157'},
{'albumId': 100513824, 'gId': 101342383, 'gName': '五虎上将-黄忠', 'gNum': '341', 'gStatus': 6, 'isBuy': 1, 'ownerId': 10860917, 'ownerName': '何宽', 'priceCny': 43333.0, 'tokenId': '995963'},
{'albumId': 100513854, 'gId': 1111111, 'gStatus': 6, 'priceCny': 0},
{'albumId': 100513865, 'gId': 101725311, 'gName': 'Cece-plants', 'gNum': '279', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 13066.0, 'tokenId': '1343608'},
{'albumId': 100513868, 'gId': 101830721, 'gName': 'Cece-cotton', 'gNum': '289', 'gStatus': 6, 'isBuy': 1, 'ownerId': 11056151, 'ownerName': '李炎', 'priceCny': 13088.0, 'tokenId': '1416699'},
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
