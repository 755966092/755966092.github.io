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
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "_uab_collina=165121459464777614314658; JSESSIONID=165121459464777614314658; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2218074a69a63a6a-0b7a8d1d150e08-535b0614-2073600-18074a69a64d14%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218074a69a63a6a-0b7a8d1d150e08-535b0614-2073600-18074a69a64d14%22%7D; ssxmod_itna2=7qUxRDBDgD2A3xBPGKFm=Dc0IAx+GYkQR0nDA=nEoPD/7BDIx7pxQP8qphh1OHD82i682eRAIx8QDDqRQnI0mG0CKLtC8ttFpfMOiKYj2C+iRd2YCDTfYaRexbKUOmxOMpKt5mC1vAT5I0TjpWf0A8+IH4+D8FmhjI3RjREbhzQRxiqRyeuucD=RKLdblFmWhF3Rubatm46iTVCEh/jtiPcFDLSc2F=WtVpTiccHN=Aoq+6t++=bK4UahWeF2Dm0fq1t2YFY3ctA0x/9=h/6svMyOq=oH/ZEBrHbBg9/Pk2/GUOGCSr8n4xtDsniKDr=Q4Kh4YTr=BhaQhTCr5CfKS+OrC=g4ibMaK0wzSGURtQkrGbKRTmqdWIQWdq1NTQ3Y=mSGLuT=bqKnKYEog7o1LDniHhxx9335OCrOCQhOxOqeZNNpNe=Eh2D6xftPo9RYhooe13QBENSF3pEDSE86wdeWIA3nSPV3mSb8xg+fp=+poycjoZUmhsC6Ek=ikcrQrKADDwoqqY+IDm7Bnj9Hv705DwPhGQj54nqInmQAN3ygN5SPjO8mhIjA1mh+BeligFV8PeMdXSQGD53w51vxlMBF5zMM5xbthgjbK4nmVQxrlQTNh9iGoeEIQGvGgzNPsig7WhqK0SB1kDRS0qDjKDeTzCGIzG9N9m871rs73Aoe7125zTDrnx0GmQHwrFazbKl7DkDVxetYQizeA9xGw2CaD0DsG3CD5BxeBwxN7DEEC2iKYDD; ssxmod_itna=7qGxniitqYqCqqBpxeTmtDci=DCb1q15eHHDlrpPxA5D8D6DQeGTr0zpQeQOe1ttgq0QHerYPxsvKBY7AGQKzfn0trDneG0DQKGmDBKDSDWKD9IeoCOuDixGWDbxDYzxY5GnDQHkDWhptDGRQDfTXgDBYMn4DBCxNUtWqmFMjSDwdDCo+hifuYngfQbOY3/DhhK0GY7AwWM0GISBfFNGqqK+xojAedAiD===; acw_tc=3cdd17a116514903000102478e83a438e4df601f2d61d2512a9dd4fcca; SERVERID=a90c3e2c66038217a856f599553a3c6b|1651490302|1651489845"
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
      }
    });
  }
};
// curl
//  'Host: 100000552840.yuyue.n.weimob.com'
//  'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
//  'Upgrade-Insecure-Requests: 1'
//  'Cookie: rprm_cuid=6417981031hs56h4ipbs; saas.express.session=s%3AbCfLXXxx7pAgnAjV0B8DS_kabyFj0Nyt.6XaZiIwu%2Fs%2B8T0G6NNtQg3gmThvJViKFaGCnnNEH5FU'
//  'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) MicroMessenger/6.8.0(0x16080000) MacWechat/2.5(0x12050012) NetType/WIFI WindowsWechat'
//  'Accept-Language: zh-cn' --compressed 'http://100000552840.yuyue.n.weimob.com/saas/yuyue/100000552840/12556/calendar?pno='
