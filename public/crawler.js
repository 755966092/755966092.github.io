const Crawler = require("crawler"),
  path = require("path"),
  root_path = process.cwd(),
  config = require(path.join(root_path, "/config"));

const uuid = require("node-uuid");
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
        "ib-trans-id": "90bad0495c9b47e288e1a7d7cf947fa3",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=62564e5def0b73010920584f0207ac9652687ee2; acw_tc=7d25cea416498306399521801eb296baaa359562fd7fdbdc894ee82fa4; acw_sc__v2=62566aefdd8bce168f4d58d2e34c005d2eafd12b; ssxmod_itna=QqjxyDniDtiQGQD7DgDl4cf=48UKrCN=qOqY8DlcDWTPGzDAxn40iDta=wjeaoZGamPKboCGIobF=QR3itotYcq4Lf7xiTD4q07Db4GkDAqiOD7MbP2INqDPDbxYPDGlPGCDbq0CUxiaFcxDWvxi1Mr5D51yFDDHQgcP+eYW3jhI1hcPDUlq4Wh+NNjiPjlWqdQx4rWD3wF043704m44xkQ0qgSTKlfhGqGeX4D=; ssxmod_itna2=QqjxyDniDtiQGQD7DgDl4cf=48UKrCN=qOqYD6h9xWqDsdTYDLQjQySK=XNPEuLK01X9cAIxHD8gBwONbQWYuO5=lkyUPDN4OOy8Nm/DhnxCv2f7iAbkj97wXarSUjbvnY6UE7wcE8GvYD6yDREKIA069r05tk5e28Kqfh0Y22pUnLwg9oEjz3PDKM5DFqD2+iD=",
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
