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
        "ib-trans-id": "8d558fc15a0047308f8fc8c0ed899e0f",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_sc__v2=625ab398a8bcbe7343881ddcff134ace0d03be29; acw_tc=7d25ce9e16501146911997013e44a9fce60f6443ae42263b199940f24b; acw_sc__v3=625ac087c50ccd4f3e9e6411e264712567506ec4; ssxmod_itna=eqGxnDBiBQ0QGCDzOKRx0Ki=mIxCqGQsq+W7HDl=AoxA5D8D6DQeGTbRoebhehCiloP55H0A7PxtLK7iT3eKYm3mwWlC0qiTD4q07Db4GkDAqiOD7w+eRATqDPDbxYPDGeKGCDbq0C0xGf6UqDAbqGSSutDt3XUDDt79MdPyG3yWqX2/4DHmiLWnb4z4xxoGShxiD+ECDqqSxxHp4wNi0nrjcFQKxFdB2+xYnDw4g4xD; ssxmod_itna2=eqGxnDBiBQ0QGCDzOKRx0Ki=mIxCqGQsq+W7D6h/riD0yyvq03hKKujXD6laTvYmL1hRpkY6xP=QjANIMKQTuQQ=v=G8whNpfxRcxB9K139Hefhc8O8tCpKYCjv536ABgPcQNUZOEP4sb15eGaWrFhBQ5+i=iQwxXlcWBGD4UQ98ZPgdnmIx8l9vuBGaEp9ED+pibx3vfIfdUF3sAz9kytD7EgPvs0EqQrkzSIMfk1d0y3Q3DQKdDHitRWu=giGnbPq=9GwKDjKD+rGDD===",
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
