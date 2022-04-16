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
        "ib-trans-id": "53aa82c84439433289bc96b4b763599e",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=7013009a16500154380087867ec37b239bd9c30ef8a4e56a8e552a630f; acw_tc=3cd9f6d916500781447563144e2343f80675c10fcb05dd81c1de8bc6c6; acw_sc__v2=625a333e681325c8346e8dd530320f24403042a4; acw_sc__v3=625a336fe914424997a4a414ed8025c811256146; ssxmod_itna=Yq0xgDyD2DuQG=e40dD=fESxfxDT5h7qOA328dqGNpWDZDiqAPGhDC8bU+Ak8AkG54YWghrIY17c2qdPVWrA+RxQWcMYGIDeKG2DmeDyDi5GRD0Ipo+=sKD3Dm4i3DDgdDgDmKGgCqGfjfqDAtqGS9wtDtSU6DDt7RLdegio9iuU0S4DHIGxplC+z37+=7hxPt73KzA4sY7aEzYe3KDhi4gh8kPwz0ixxLAczPD=; ssxmod_itna2=Yq0xgDyD2DuQG=e40dD=fESxfxDT5h7qOA328qA6WutD/iKxFh2iUcPAPptgxOP3nhDAj=SYBTK4mPoAd7rIM/aZatbPy0Df4Og/OiHpXzqfMHN2g7l63uzZBKyAL=yFRcQ0H6kLBA5W8DI/TI5ChQX7bxklL4HenLwUujHfCoHKBUsBgoSt+Uvlf5B3wKZmEviN=cb1Ev1mrjA92LxtTFgSDbS8DFaLuHUnpKGMrhxttTOZ4riHIh3bxG2zxGcDijteD===",
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
