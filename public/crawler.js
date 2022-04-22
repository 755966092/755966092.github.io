const Crawler = require("crawler"),
    path = require("path"),
    root_path = process.cwd(),
    config = require(path.join(root_path, "/config"));

const uuid = require("node-uuid");

var proxy = "http://117.26.222.83:45776";
module.exports = {
    c: "",
    num: "",
    initCrawler(cb) {
        console.log("init crawler");
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
                "ib-device-id": "f00bdb0f9ec14ba496ccb24c20c0e548",
                "ib-platform-type": "web",
                "ib-trans-id": "0a365f7642564c839cbc55bb51bb0c97",
                "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                cookie: "_uab_collina=164865229955951961884756; JSESSIONID=6261291eb2cdbb5824ea85fb44bf1c9245ed4e2a; acw_tc=7ca5d59716505901867681719e018aa32ff944adccf228eade056c4e75; acw_sc__v2=626201eaef02ba7bfc479d5d003f197f19aa3059; acw_sc__v3=62620304d0aacfd227a2894e040aa58c48456151; SERVERID=a4bcc7c3b0f107c82701c502eddc64da|1650590469|1650590187; ssxmod_itna=Yq0EYv4UgY0dD=G7CbG=G8D0GN8Ac0hPpmmbPDsb7tDSxGKidDqxBmwQehIuG9G=eWm8qGOf7n+pW3ji7ai=PN7QcWo8zQ0xGLDmKDyQRP+qDxOq0rD74irDDxD3Db3QDSDWKD9D04CMnkNgDi3DbxtDi4D+GT=DmqG0DDt7/4G2D7tBGiqNhk2XzQXdXuAP=xtDjdTD/4wFcDUo1PF=/k2T=20WWqGylPGu9dNDqMbDCOUDguisGYpxQLv4CDwaQb44tATpQwPQYAqXZOGxWD4Y0YZbCAvyxDfjA0QweD==; ssxmod_itna2=Yq0EYv4UgY0dD=G7CbG=G8D0GN8Ac0hPpmm4ikAbee7DlhxrDj+Y0Q9G8X8nbnUxu50dXKilv4P56iwYQo8CSqqhw3AxAPGyBE70uGbzoWlDdXmQwITokz1ByXLXPq5w7oy3LN=isUhNsYfGHBbjqYqr+tB00Y3=6RxrrtWteNgR63+EoglvnRfdd7+i8W0+nlxrYWD4cD6pz93QxNeikF4Hip7GqhDWmtQ5AtQd64T45T9XquwYNd9KopLAsc3X+U+LDVxKU4TgfvTYCLEYo5iOkBok2UaLGw/2uGpr8IGFGKGXIqn1g3z4nsg8DGTG0+aDhDQdH84s3YGuOKl+zBkOFj=d3HF7+Kqsq7riRKGwmzrwXx7SxhDxrAWdWro5uz5bIfWzS2T7fYydQORTgoTfMQmgm7AGSgKCwmOlsh8T/BGB8hV0s5CdgD=N4Tg0Youp147VQ7spDh6YIdkxM1q0Tg4EydjgMwxEU1YpCMKtrxzP4iBHvbsYfOyGoucqHx8ViqQhmkPotTeZSD7DPD7QnAoEiqOWqrm5=sB+AxMBp0e452gOnPDyIkAYcDeF5eHd4DjKDew5TOX0ReyiDD==",
                Referer: "https://www.ibox.art/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            // method: "POST",
            // http://api.shenlongip.com/ip?key=7cmfnoag&pattern=json&count=11&need=1000&protocol=2

            // proxy: proxy,
            // proxy: proxy,
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