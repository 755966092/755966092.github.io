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
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN",
            "hb-nft-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
            "ib-device-id": "e141d54cf837418784b6c8fd68ae1e37",
            "ib-platform-type": "web",
            "ib-trans-id": "2b1d0fffe37a43569f9bbba86d16d085",
            "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "cookie": "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_sc__v3=625d82c859a28a7103b5f2533fee4b92c711186a; ssxmod_itna2=mqmxc7D=DtqeqxBaRP1DkQD7YdIkg+iR77xA6TGObbDBTrq7P4GkQm1nU7WaXCri9jxUbQQ5x7Y1B0cDItk3qidtRgeSQYUCGu39UHxyjdU63xaZ3H1LuEEk6f4kNwjnXfb9Z4Z0ira1f7FaMEuTVaKe33c75SnC4K94KRyHcEnrT+B7cgn141GdG=qxfWqEH=u4UQq81hnEKPaH46pWxRIbHj5aBi0dVWapPO07U2c4y=P+KBMCtiYafYmahYqf3OcKRCnYdjizgDaOaMZrp189ISmNzspx1agYRWnxnmUWs4v67pqh02r3RrtW8RrtzxkmrLzPs3a7ARIRmflqalu+/RaYGqz2r9bC9uFYnztWCeW=jYxnDWehYWGdfmq3vl7W0mxi0YP2xwimiBohIrStEA4wqpILi75xRr147AFV7Ks88byYht+/bmn4TRBO8lqx0AW94N1+=RFgW45Erg4EibDKon3OkVFv39aHteKwuF2i41hsITrlwHHRi1hYx7i7bCtSx2Tbowbm3+C7=Bd=7YG6v+10CYigC0oD07q0DcAPOAdIbqIS4H2nAKUcCw6IKXtkDrPuiPqD3fixOLy3CKkiWqDmHiCc0rYrAcDnD7=DYIKeD===; ssxmod_itna=eqmxciG=eCuQDXDne5oqDK4YvnkkDGuKWPDsqKiDSxGKidDqxBenLWYKehFFYwEQDIEW+CA0mxcqQI4oEoxhIn2D4GIDeKG2DmeDyDi5GRD09eYGoHKD3Dm4i3DDEdDgDmKGg7qGfLuxDfRDAUlmqGwfddDGLpM9R0d8b=uAML6D0PYefothi544x4qirAxKx3hbi+14rcvbGhie6xOp1xK7=41fiD==; acw_tc=1bdd1e1716502961204687644ee5fee367af1ae549357296262988c4de; SERVERID=ab63b7441dfaa639f0fc54e0f0a0b8d8|1650296120|1650295496",
            "Referer": "https://www.ibox.art/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
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
