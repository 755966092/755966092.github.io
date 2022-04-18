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
        "hb-nft-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "ib-device-id": uuid.v4().replace(/\-/g, ""),
        "ib-platform-type": "web",
        "ib-trans-id": uuid.v4().replace(/\-/g, ""),
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "JSESSIONID=QqjxnQDtqYqWqBKY0dqYIEpBD00bYQDgY82mpxx05u0eGzDAxn40iDt==km0=oRhmqdfSB8DiaGQAbWNaF32iP5faIDY=DiPq0kDCqiOTlxYYD01KDkhxD4Gwn4A3aAHMKibsxQKDHInG3=i9evWpNKnRxQ0GPCB+w+7Gxe0De+B+N/Gx54D; acw_sc__v2=625d507dd4032f5d575982135732f496dee29bd4; acw_sc__v3=625d570dd13d3c5017574cfba61a8e0b97f250ca; ssxmod_itna=mqmxc7D=DtqeqxBaRP1DkQD7YdIkg+ibRxGN5wYDZDiqAPGhDC3Sprd+GkkxBKTkDQwpddnGbuKWtCGnqb44=pMbeD=xYQDwxYoDUxGtDpxG6orDTUQDWDYPGWDDbHDRxY=Du2KDaHvqDWpxi1go5D5aHFDDHdy6phOGm8IryHkxGdrYebCKrt1ehxAYeYqmGK41r4SjGfzChNdjGt/YLj+BqLamTPtDYXFYD===; ssxmod_itna2=mqmxc7D=DtqeqxBaRP1DkQD7YdIkg+i+DA6bGObbDBu2rdx7PW5GkAHdxKTwP7=D+ErD; acw_tc=7d25ce9e16502848195792033e8114c3da9f5c7267a9ad82a8594313ec; SERVERID=4f6d15110eaebaad7f74f7936f354669|1650284820|1650284301",
        Referer: "https://www.ibox.art/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      // method: "POST",
      // http://api.shenlongip.com/ip?key=7cmfnoag&pattern=json&count=11&need=1000&protocol=2

      // proxy: proxy,
      // proxy: proxy,
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
