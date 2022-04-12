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
                "ib-trans-id": "dac024ee9da240e985a7678bf4bfa317",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "cookie": "_uab_collina=164865229955951961884756; JSESSIONID=164865229955951961884756; acw_sc__v2=625582b8a30f2d733b57294b56ee0aac435849f5; acw_tc=3cd9f6d316497733953546439e41bd743b00341ec05413edc68573bc41; acw_sc__v3=62558b5677fa66ac3b8354ce659f1bb62be365cd; ssxmod_itna=iq+xuDgD970=3AKDtDX3W+8G8=qCihxDK3Y4QD/YGADnqD=GFDK40o3gxEbDOKMxOmmKEe8DwxrEzYopmsEWeQcAfIADB3DEx0=qZjixii9DCeDIDWeDiDG4GmS4GtDpxG=Dj0FUZMUxi3Dbh=Di4D+7uQDmqG0DDt794G2D7t9K7e=OM06FjUovuGqoGD9D0U3xBdYW1e9zCcF5OXq56WxT2QDzkHDtMUSBLLox0pySqNxEAvxbEO3lE4YF2D4mDhQa8DQG74Yi7kINxYeY7vK0Y8coDDAe814eD===; ssxmod_itna2=iq+xuDgD970=3AKDtDX3W+8G8=qCihxDK3Y4G9iaDmhDGNw2xGaYFAkhoAx8hv0GHwl2q20+nmYlIRCK7ZRP6KnKepacfKmlbh=fXGiwaBXpoQRd740tvMacRiFHUh7RnAVpHyyE2kUcSMp83LdqEgYojRIUKuDkefQMzxYPp4jM/SL4Re=PjQXMUlAdM+bQghYTxLLTsg58Y8DhmPYq+6QFw1akWLv1afyO6+7+UTF+7ox1T3Y+XcFzm6d+49K7UI066ofUkkDWD7QcD7=DekexD===",
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