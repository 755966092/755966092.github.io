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
        "ib-device-id": "e141d54cf837418784b6c8fd68ae1e37",
        "ib-platform-type": "web",
        "ib-trans-id": "eb0825c4e5f4463b8ea33dca2de28d5f",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=74759e2016503732593461737e9817a60009f34f1fbc84c656a59f2c6d; acw_sc__v2=625eb28b8f880035ab8e86bfacd3cebcf92f97ba; acw_sc__v3=625eb6d6190bb544eb11f0dcff25c9a0af5c546d; ssxmod_itna2=QqUxg7iQqiqGuqBPdPTDkDcDGE0KOOo+FqtD61RimD05r9D03QKDRYX7un4nb+j=gUBqA0et81WI6=/01ni2CgRlQ7cE56/w84z4NIjMr+hpobEH4fx8uFdKRIZUPZCopwMkLZgGqWGUYyQo0IrOPBCtpxFojxNoGAhZ1hwb=0mjx+wFOwpkcRPvrovrOvsl1GQtYqxqnbw5g4xzoawx8pC+Ovwe=EvtzA0fcPpDcuzIouNiRnYqRjCeoHNFtbdK0l4qc5tZWit5F1I1v0y9n3bXj167HMNUuFcfXouRykNRhrsQHYksLiex1BotbTCZqCOOKSLG=f5B+YQWOgw+adijxWtjT6Aalbk3l74Eh+mOHMHwl8ogh4WWQw+New28k1kKlRIcnHgTIsdiqnroEv1TAW+Aqu7VlYjOm/jP8b=4g4jhQuoTipaHabT27TPO=1obSK6xLG1ELO3==OQxh3WOvDDwOA=Bm5gfdGqtA=gbHxaUQne8BDkDGcDG7lZT3g4vqi7iDD==; ssxmod_itna=eqIxBi0=oxRDcDl4iuYtD9lD0AIejE5jILdD/KmDnqD=GFDK40EAyow6AI=A=wevBiB4ICE90oaI=vbGBWq4vn2d4GIDeKG2DmeDyDi5GRD0KpYGoHKD3Dm4i3DDEdDgDmKGg7qGfLuxDfRDAUlmqGwfddDGLpM9Ri=8b=uAML6D0pYYAotwA3q+BhWY7DqDYvoSYm1i0Ao0BEik7xGQGmeI0e1j7DxD; SERVERID=ab63b7441dfaa639f0fc54e0f0a0b8d8|1650374366|1650374358",
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
