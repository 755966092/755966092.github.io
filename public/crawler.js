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
        accept: "application/json, text/plain, */*",
        "accept-language": "zh-CN",
        "hb-nft-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "ib-device-id": "e141d54cf837418784b6c8fd68ae1e37",
        "ib-platform-type": "web",
        "ib-trans-id": "3096085f49fa4b7f8708e670bff6f30d",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=7d25ce9916501498758388728e9f6d51dadd5939ca99ec19fea0e3b808; acw_sc__v3=625b4a9c26a409a9368fdc564c15f0a2945cc91b; acw_sc__v2=625b4c11b8cc04ded4b0e260f7ccb1f56eec20c9; ssxmod_itna=YuiQ0KkGkt7KGHD83ieAKDQP6QsN3FjYjDBwq4iNDnD8x7YDvGCpD0oq8YkiMzho=rimqcvQAt7lI5TqC7by=YD84i7DKqibDCqD1D3qDkTGBal7DADi3DEDDm6Dmqi8DIT=DffK5DWwxi1yx5D5=yaDD5dcpPh5AhoArIC1pPDUDhqo6oeSQDaHG+qPCqDgBhq5Y2tyA8T5j0=W2GjRI04jFhtMSHxkjwI4D===; ssxmod_itna2=YuiQ0KkGkt7KGHD83ieAKDQP6QsN3FjYD8LeYv5D/D0oMD7PmhBPEp+aGFm+yHeMDNWV3BkxN5VUQTytOM3WM4XAPdmhvNG9BakyRFsVgklt0/Rbtj0aOQtqpwy25qH8jM9gaYKlZRMQVikK6RL0m0uXxVEIZGqp/CWXouTr/il2SenbVmeX8b4rV3Bo4ZqulK823uqitVCbBWp2SG6cD6Zc3kabzL=KigdHNM=TWNKyBI3FyYc=BFtbv2Cgl3GtEwEf6gB9wXelhEcORLQOLP9C05dg4CvBVCRgIZLl6q/lj5GQBY07VSzU8GSRdDL1u+zkMCxT41kzY7PqnxaCPQ7zqib5Ao=gkb051CPNWYCk+I3Kq7oqi4TQYIOPtGFaRx=EPu01/7oo25DfeD7jFlD6mPkYxOixZQnT8WmIfxDGcDG78oqGCxecxdiDD===",
        Referer: "https://www.ibox.art/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      // method: "POST",
      // http://api.shenlongip.com/ip?key=7cmfnoag&pattern=json&count=11&need=1000&protocol=2

      callback: function (error, res, done) {
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
