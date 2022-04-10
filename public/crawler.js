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
        "ib-trans-id": "32dfe5bec2b44e0d9598ffa0fba34bf7",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=7ca5d59516494794022865390e3c535b75649854b3dabd2e9bd7b62951; acw_sc__v2=62510eeac19f29c4d7ba8540c81a8bdc65b9a172; acw_sc__v3=62511220496efdaa418488dda015242ef8a4fff7; ssxmod_itna2=eqjxyDcDgDn0wrxlSodjKD5DQDOSiekbseD6ObnED0y0DRD03DuY3ujOj2UoMNYTXsRS0u50xqxnRjGUmcWKeAdE=pDTvKfzpfXp10Fa2BOduQpMc0zu3UoqcjGq8t7qwHIXEHUdpkoeUwAQR3jAl4xIeqKI3MoxwfGg8+GeTLDFmQU3NTt=pbRYqQN5re03OuX=vxAVtuEq113hi8f=RS9FUpKKn8jkEb3Gj1REFWnKgb7INFThyApxZOxFUeAj4+Y=50L8OoI+KuYUsqk06ggybdkHeL7F3qAPZIkUAKll1e/gAZLM=ey1PsBdSiewY0EiqPbqK4KvjxpY3OE0hZN12=eli+0DwajtA0QlLzE4P+GSZQvaiKbjEQGizLPxmGPie6pF=PZYvK1A/Pfd2fkFElQAh1oixd27fqaIm93gCEw+q+FqZYIzUELjjCSteZ368T4fKTDG2SD=zhdlr4KeqC7rbLbz2d2DtFxtYiZbRKRe=bu5jhdCRDSM4Tq4nKijhT/LQY0D8x1ZKmNlWSDqD08DijwAHZS48jxxD===; ssxmod_itna=Yqfx0QKCuD2nDXDnekDkmGCmDCiGOFYWGfDBLhD4iNDnD8x7YDvGzMQGb3QBWQNlEmPNAQCDawwIBYgwExNuox4GIDeKG2DmeDyDi5GRD09eYzPNKD3Dm4i3DDOdDgDmKGgWqGff2xDc7DWy10x0ru1PD0cb1OrAPYhKORcaFDB4eh7bYimuDCDxxAlrqCjhxsGhtCm8TFAD5GK+PHlrWoWbvg9GDD==",
        Referer: "https://www.ibox.art/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      // method: "POST",
      
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
