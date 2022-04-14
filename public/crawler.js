const Crawler = require("crawler"),
    path = require("path"),
    root_path = process.cwd(),
    config = require(path.join(root_path, "/config"));

const uuid = require("node-uuid");
module.exports = {
    c: "",
    num: "",
    initCrawler(cb) {
        // initCrawler(params, cb) {
        //   initCrawler(headers = {}, body = {}, type = "GET", cb) {
        this.c = new Crawler({
            // 超时时间
            timeout: config.crawler.timeout,
            // jQuery: false,
            // 失败重试次数
            retries: config.crawler.retries,
            // 失败重试等待时间
            retryTimeout: config.crawler.retryTimeout,
            // 最大并发数默认为10
            // maxConnections: config.crawler.maxConnections,
            // rateLimit: config.crawler.rateLimit,
            // 在每个请求处理完毕后将调用此回调函数
            headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "zh-CN",
                "hb-nft-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
                "ib-device-id": "e141d54cf837418784b6c8fd68ae1e37",
                "ib-platform-type": "web",
                "ib-trans-id": "03e5a8a9bece40928a352cdebe91e3db",
                "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
                "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                cookie: "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=74759e2016499143366008903e23c95fd67a879bd0e95ed0838de07e56; acw_sc__v2=6257b1e023be68624dcca66499a8a51d8346ba83; acw_sc__v3=6257b2f0add7802711f728a3ddf2925d81aa3838; ssxmod_itna2=mqAx9DRDcG0=iQ3GHmvlOYw2MDGrOAhi4hDD5G9bNxIhDGXvpTGai86s0YlGx8Er=4cIxCy08qtSEFL+Nt8wA2s73FnvaqcjFexQUNUgxCuI3tFLExG3FVZBGUwyxerus+w/LckLW254Cx7CVGG=FZI1VA0753ewanP4cxIzYnadN27de/0CYCEKWUAGNOPk5Zvi6OPfI4erzooCQtFTahdWyOMpM/GFDVL6lxj2PLFUIpjHgKcOlK6rTuQ6/mHI9pvp0m6nW4/hGXjyhX1RNF5n99+Q9+=C+4TIzp9U=iN1lzjgNVt6Du0l5VmHk+F/IKMRa4pybRWTi0DeAxoAx+5q1v4awHtYCbunC50+56F7C971R+/35vBPaBp7Bc++w=nFW+eXCi=e4tmrI4eZRmt+bpWbrR5xFWAbws3+=bu434a8qxzRG9oZFerzApRgCzGtegiaEo3bj+i=nrQziLbk3D07BAqRAov0DuoEerULcby1Y3iY30Dro7MWxeE53Ex=BeR7Q=B0qgOeDDLxD209+2wwOLDD; ssxmod_itna=mqAx9DRDcG0=iQ3GHmvlOYw2MDGrOAhi4rM4GXYoDZDiqAPGhDCb4IDD5XbXPXC=iE0qGOUQDh5aDH/YgRGPrgDPNebDneG0DQKGmDBKDSDWKD9AYrjguDixGWDbxDYsxY5GnDQvkDWpa1DDcODWyznx0ry6PD0gbz1hAxeh4kAOH71xGdpiDamCatbAG3PZitP7WKpmTrKmux=muAPghx7We4SRwPZ3h54/G5Fibr4D",
                Referer: "https://www.ibox.art/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            // method: "POST",
            // http://api.shenlongip.com/ip?key=7cmfnoag&pattern=json&count=11&need=1000&protocol=2

            callback: function(error, res, done) {
                if (error) {
                    console.log(error);
                } else {
                    cb(res);
                }
                done();
            },
        });
    },
};
// curl
//  'Host: 100000552840.yuyue.n.weimob.com'
//  'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
//  'Upgrade-Insecure-Requests: 1'
//  'Cookie: rprm_cuid=6417981031hs56h4ipbs; saas.express.session=s%3AbCfLXXxx7pAgnAjV0B8DS_kabyFj0Nyt.6XaZiIwu%2Fs%2B8T0G6NNtQg3gmThvJViKFaGCnnNEH5FU'
//  'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/2.5(0x12050012) NetType/WIFI WindowsWechat'
//  'Accept-Language: zh-cn' --compressed 'http://100000552840.yuyue.n.weimob.com/saas/yuyue/100000552840/12556/calendar?pno='