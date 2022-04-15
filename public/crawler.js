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
        "ib-trans-id": "7f549bbb1b7f4681858a5b0882293311",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=3cd9f6db16500349640482567e7fae30521db2467f5a4a11061002860c; acw_sc__v3=6259891c168e7c41d1804988529fe94c46d0c766; ssxmod_itna=Yq0xyDgD9D00Krxl4iqYKEaxf2xIh4207G+oudqGNL=oDZDiqAPGhDCb8I+BCGOivqfSmbTNFQS0RRNaeQE8G5avCxAoDhx7QDox0=DnxAQDjar47RpxG4DEDm4DiS4itDEx7t9DASSCDGfQDfdNgDBASR4DB+gU6QmqKWr=uAML6D0Pol7Rtp054m7qFl044i0eNWG4o37aAWD4r57mq+A9F2BeQjD0ID=qxD==; ssxmod_itna2=Yq0xyDgD9D00Krxl4iqYKEaxf2xIh4207G+ouqA6WdedD/j79jDFxmAUPIrXFgaNNcielIUxK5WwRdD67OYP1z3IkA4GKt8Bc9Ekz1a5wHzSOOSGmEL6Pr3DwaK08DewhD==",
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
