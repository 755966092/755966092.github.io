const Crawler = require("crawler"),
    path = require("path"),
    root_path = process.cwd(),
    config = require(path.join(root_path, "/config"));
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
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN",
                "ib-device-id": "f00bdb0f9ec14ba496ccb24c20c0e548",
                "ib-platform-type": "web",
                "ib-trans-id": "b5567118e384461c874891bda8979771",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "cookie": "acw_tc=65e21c1e16497786620334038ec393d0c81b1573f97ba4da2be4a8a38e; acw_sc__v2=62559fe6462774597a7e0bc651a3c968d466daf3; ssxmod_itna=YqRx2CDQYWqQq0dD=KAx7wmDUOsKPYFqFDlO0DxA5D8D6DQeGTiUbDBmD=mQ0mCkTEsrQBBRpbkUCLexK=XBLW4fi9Dx0aDbqGktYox4GGmxBYDQxAYDGDDPDocPD1D3qDkD7h6CMy1qGWDm4kDGeDe2IODY5DhxDCjjPDwx0Cjor48R9hk671Ttvq58GxjxG1a40HQA84jZBf6I0z5t8E4F+ODl9UDC91c2HHT4GdXc5z4UwepQG7SQ0=i00ot70=emgr+h4WQiDyM0GxZCDt7ahta7DDia3eLdD===; ssxmod_itna2=YqRx2CDQYWqQq0dD=KAx7wmDUOsKPYFqD6rSY6xGqDs1HDLY=DwUR4n+xC4jhTU1Z/PmvQGqZcbvroH39uxiIZA0Ri4K00EfI3qj7YOd=qk7=AkXxbYx7jejDjKD2bYD",
                "Referer": "https://www.ibox.art/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            // method: "POST",

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