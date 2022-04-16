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
        "ib-trans-id": "25a1abb952a84b819057d7136efd45a5",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=6548cd9b16501178763832217ec238c448145a87b105eaf237a3279500; acw_sc__v3=625acd22df623399a528f53cace1e16133fd243f; ssxmod_itna2=Qqmx0D9GqGqCwhDl4iqYKEPxf276tDg7P2ior7P4n9SGKDsFPWDLir7T=B7xkWqAP40Dn+pGc4O7Gr4cibRBGmGQSAfwEO=Uhk2v4rBj9rAhQ+WBI6+THpxOyGLtUYah2ENNQW6PrAjA/d0gj0IMGRtb3MoL3+4eV0Nv4eiP=+xmtR2V9G3uYGY0SkAn0MjnlRr9Qu6vAwD6GpfWGxn8EDK7OW3zMlFxER372+BRQFL=5zQGAu+BinKd7qF5wudYh+6=w3UU2ngAKkO31z7nC9LqsdrAVEjEcROG1971aXIqmEjDEKzy=XR0QD4jRPq2ro8PtU7=u2PGBIYfNKnmezQhAQxhocio0Opt+0=/UoKwtRDqlKh73mBANimhxpIep6PjLxXxhu532mYLOapW+3FRPhfPhbthioKDPAeviAX88wlejCF3U2pi8nmGDsl2W8Ku733BNjGD3jhaDG2YiqiqwCD40RtjxkOGkwbx4et4mIbOX74iYD4DbxDOWDj/KjsYRsgh/9iGY0KUdW7bmhQWIxDFqD+gyiieqDypYqCYD===; ssxmod_itna=7qfxuDnD2jBDz6zf4DKp4CqY5GQa46EoD/WYzDnqD=GFDK40EvFeDCfz/SYfjuYcu0mxBQxf+oKeYOqrRtKYpuitD=xYQDwxYoDUxGtDpxG6YN/tIQDWDYPGWDD4HDRxY=Du6KDaFpqD3RDAtl+qGwAqdDGkPMnfidYo6RIud6D0p5f+mfzYvtjgxIW0DPjOwvQ7Den2Ka18GQjontRiFO5AFFa0urWiD===",
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
