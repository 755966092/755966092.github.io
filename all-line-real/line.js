// 所有首发 https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0
// 个人详情页      https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getCollectionListByUidV3?uid=10029480&page=1&pageSize=60&type=3
// 辛德勒  https://www.ibox.art/zh-cn/account/?type=0&sub=0&id=10146203
// 详情    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductDetail?albumId=100000118
// id查询  https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=50&albumId=100513745&onSale=0&order=0&u_atoken=854a1b9d-f244-4f53-b1b8-dbb1dbebda51&u_asession=01Jq2_yZG44PldPMUzpPK_64oKm1N0cm-Z9wYe1VpyKQXB58PNkN3wT2OIvtgtPgkuX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K9esXxZSz_eFXjsNK6ic5AZiuAafKdTYAKXPpDxh19QCGBkFo3NEHBv0PZUm6pbxQU&u_asig=05IBWrYtfymA_uDUcLVJ8xTf-WTNmxYW2pFG78yqcabg3FnzpbjAJKqGtU5hWcqzf2Y9nepblkCDkytjeqfdw7DEMGuE1YEBuVmRC9IPyW6A5dHmmwLBPX8pxxVshsdM8matyMPiFOPeRMzR1MuYUhz6UKm6uEk_3KLvNIBjFoZCf9JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzRs4Ssbd3UE93JcJ__4A6vT3ZFHYP02cpYq4ibng9y3Hm341ApPXXfn0ATZ7PzLRdO3h9VXwMyh6PgyDIVSG1W8qzXawpZZ4bVe-btTXRTswRtJjAoFPV1D1dp9iP-bWzt9XsRMLo9MAUW1mcFqykOVKTlpxd8_0jNZUkyAMMj2KmWspDxyAEEo4kbsryBKb9Q&u_aref=H%2BcDQ7zuj64tmtGLcCuOiekJIgg%3D
// 搜索    https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/searchGoodsV2?subType=0&sort=0&onSale=1&grade=-1&origin=0&type=0&page=1&pageSize=50&content=%E6%A0%87%E5%85%B5&u_atoken=9f8a20f4-3c61-4c09-bef0-d611ffb7e3ab&u_asession=011zSKYF_miNMdqX59R90EAnri63BWt3tLfecQt65cHrTPFiC3P3PYVmwtlwPs9bZGX0KNBwm7Lovlpxjd_P_q4JsKWYrT3W_NKPr8w6oU7K9UGqvZrZnx5dof9QQAI7QziuAafKdTYAKXPpDxh19QCGBkFo3NEHBv0PZUm6pbxQU&u_asig=057a-RdImaMhvFwQOLmETQHJzaBxM8uOheRyr5re3_0P8V2LhHXM8aZbbF4NcjCtjzivSSfbnoxoiY-VgwnxktRgiSp8LideI-3fio5q98xItylugM-qpR5S2e_PbjkjV_mSGRfpypomBgFpTaotfPCWe5X9v_xlXfvEm6-3byIK39JS7q8ZD7Xtz2Ly-b0kmuyAKRFSVJkkdwVUnyHAIJzYTNVIpflp6QaMD1KoiM1oyWrfAzkncYABtrpbuQa8V7m341ApPXXfn0ATZ7PzLRdO3h9VXwMyh6PgyDIVSG1W9vgbrDSUjiqZVZvDpOsi__LJ0CqtehMVLVIw0n4HVzWiR-kaq0dnbCqA59uOg0PEsur0BH9eY_ATWShouPlebSmWspDxyAEEo4kbsryBKb9Q&u_aref=zmxXoHsrIabfDw49ZznT27UMauE%3D

{/* <script>
$.ajax({
    type: "POST",
    url: "http://60.205.252.237:8080/Api/Token/verifyToken",
    data: {
        token: "uwjJoJKOv5bk7KAEN8ln"
    },
    // data: "name=John&location=Boston",
    success: function(msg) {

        alert("Data Saved: " + msg);

    }

});
</script> */}


// 实时价格,随时运行
const path = require("path"),
    root_path = process.cwd(),
    crawler = require(path.join(root_path, "/public/crawler")),
    fs = require("fs");
const xlsx = require("node-xlsx");
const moment = require("moment");
const name = require("../public/name-js");
const jsData = require("./data/js-data");

var num = 0;
// 每次如果有锁死的，id写入这里，多写一个不需要修改的id, 最后俩一样
const guding = [];
var resultData = [];

var url =
    "https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=199&order=0";

var data = {};
console.log("开始...");
crawler.initCrawler(async(res, err) => {
    if (err) {
        console.log("请求失败", err);
    }
    // 获取数据

    //   console.log("res: ", res);
    if (JSON.parse(res.body).data) {
        data = JSON.parse(res.body).data;
        if (JSON.parse(res.body).data.pageSize == 199) {
            // 所有列表
            await sleep(Math.floor(Math.random() * (12000 - 5000 + 1) + 5000));
            paramData(JSON.parse(res.body).data);

        } else {
            // 被锁仓的
            for (let i = 0; i < resultData.length; i++) {
                const element = resultData[i];
                if (element.id == guding[num]) {
                    for (let j = 0; j < JSON.parse(res.body).data.list.length; j++) {
                        const item = JSON.parse(res.body).data.list[j];
                        if (item.gStatus == 6) {
                            console.log(`item.priceCny: ${item.priceCny},id:${guding[num]} `)
                            element.priceCny = item.priceCny;
                            break;
                        }
                    }
                }
            }
            if (num < guding.length) {
                num++;
                await sleep(Math.floor(Math.random() * (12000 - 5000 + 1) + 5000));
                crawler.c.queue([{
                    uri: getUrl2(guding[num]),
                    jQuery: false,
                }, ]);
                if (num + 1 == guding.length) {
                    concatData()
                    await sleep(150000)
                }
            } else {

            }
        }
    }
});

crawler.c.queue([{
    uri: url,
    jQuery: false,
    // proxy: "60.185.141.54:22978"
    // proxy:"http://api.shenlongip.com/ip?key=7cmfnoag&pattern=json&count=11&need=1000&protocol=2",
}, ]);

async function paramData(data) {
    var handleData = data.list;

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
                    author: element.author,
                    authentication: element.authentication,
                    link: element.link,
                });
                break;
            }
        }
    });
    if (guding.length > 0) {
        crawler.c.queue([{
            uri: getUrl2(guding[num]),
            jQuery: false,
        }, ]);
    } else {
        concatData()
            // await sleep(100000);
            // process.exit(1);
    }

}

function concatData() {
    let shangyici = jsData.lineData;
    shangyici = shangyici.map((item) => {
        for (let i = 0; i < resultData.length; i++) {
            const ele = resultData[i];
            if (ele.id === item.id) {
                item.hisData.push(ele.priceCny);
                //   item.priceCny = ele.priceCny;
                //   item.pridateceCny = ele.priceCny;
                break;
            }
        }
        return item;
    });

    const date = moment().valueOf();

    jsData.time.push(date);

    var buffer = xlsx.build(formatData(resultData));

    fs.writeFile(
        `./xlsx/ibox实时价格${moment().format("(MM_DD_HH_mm)")}.xlsx`,
        buffer,
        (err) => {
            if (err) {
                throw err;
            }
        }
    );

    fs.writeFile(
        "./line-real-time/data/html-data.js",
        `var time = ${JSON.stringify(jsData.time)};var lineData = ${JSON.stringify(
          shangyici
        )}`,
        () => {}
    );

    fs.writeFile(
        "./line-real-time/data/js-data.js",
        `var time = ${JSON.stringify(
          jsData.time
        )}; module.exports = { time:time,lineData: ${JSON.stringify(shangyici)}}`,
        () => {}
    );
}

function formatData(params) {
    let data = [{
        name: "价格",
        data: [
            [
                "藏品名字",
                "最低价格",
                "总发行量",
                "所属系列",
                "作者名字",
                "认证",
                "地址",
            ],
        ],
    }, ];

    params.forEach((item) => {
        data[0].data.push([
            item.name,
            Number(item.priceCny),
            item.total,
            item.albumName,
            item.author,
            item.authentication,
            item.link,
        ]);
    });

    return data;
}

const sleep = (ms) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

function getUrl2(item) {
    return `https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=200&albumId=${item}&onSale=1&order=1`;
}