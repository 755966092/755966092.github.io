const Crawler = require("crawler"),
  path = require("path"),
  root_path = process.cwd(),
  config = require(path.join(root_path, "/config"));

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
        "ib-device-id": "%s" % uuid.uuid4().hex,
        accept: "*/*",
        "content-type": "application/json",
        "ib-app-version": "1.1.2",
        "ib-platform-type": "ios",
        "ib-trans-id": "%s_iOS" % uuid.uuid4().hex,
        "accept-language": "zh-Hans-CN;q=1",
        "accept-encoding": "gzip, deflate, br",
        "user-agent": "iBox/1.1.2 (iPhone; iOS 15.0; Scale/3.00),iBoxApp",
        wToken:
          "e%s_LgGATnYBc7JWl6ugBgXEL0NvTTSCbv+6U7nN8JlxrZan6z2fdooxWQvFvldVWzqmNE6ZNz3ZTAhvGPcv3Xhk+yGnajJ7ko6+ehunKdc/2Y7YLJqL9QKEvPcsu3MHqjm0Eq8KXSdBwML2pZ2S2OPgLKgKG4z2TmfkUnMZRv3d/5apjV1Vb2GIrVQAUPnD8cNUaPUadoF3hhijv1GjomuN9dFD9vqpmHOrYHBwseZBhM1XYiXnC+0VN+gAuHz2ObTRe5GhtVvAUjZpM0MgGW0wek3fSLAylkPK99l17T4H6OqbGNqgcANwGd6p0NVLl7i4kssxbhV0paWbM9/1GRyMCHx9DUp5Kv2mxjHBgZ7GOK6Ryld6dpjd4erVf1ZTbrAb6Ydm9ciswgeqHQ66bwCjrlu2g4tQ7NGc/q/Af67AtAgw6VTROncH1DhE/K8ONmHsEzWhPAv1ZJtRbYrbeTERTctDtNrrH5YPGcDex9JXxTME+MXp+xPPTu4frruWw+w3tX/xKc95dbr9Wbu5ui5XcIRKCtpDc2rcDbUBlLPvb5I=&b7ee_802FA88CDA450271D4A613BDC8E1FCED3744656D4B01AB2436" %
          random.randint(0, 500),
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
