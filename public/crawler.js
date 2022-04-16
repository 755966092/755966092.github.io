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
        "ib-trans-id": "fc4e92261b014b7994f688047d7d8cab",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=3cd9f6dc16500687059125378edda837487fe9902432becec34c70ade5; acw_sc__v2=625a0ce1b601e36e29e1b080a222d5625c5eefee; acw_sc__v3=625a0d28e7f4ca3ea2bde3b6c17b7afdf22b94a2; ssxmod_itna2=mu0=PfxjEGOD7DzxAxeTjfiXv4GTh+acpRDikva1DlphQxjbpyCdid0RDRnQQNAxL5u+a7v4FRUaOFxFP+puELKbLYLrbbHkUk5WErLDzEca3p3LRTuuim/9gxjjzk5alys5y3jh2ie8=2WQ0rmG4hYaeaYkjWYriWxms=qzODoq2QxIN1qYKtKCQZD4K1I5iFiTYnWIyBGhvbqm=CStLrStXI3mL7BQoPkQzFvWF2MF=Rcwm1cONa2EQaTIC2eIkE5FWhZNNfGWn/ey45v2RYg5UjBnUWwGNciWRu+4BOXLxbcKlVzqWyQWpKByezDd+v=8yVzRNeWbf5ibwGI02GBP5YdRygj+ZlBg8+GWpYqgVW0oD07g+QQQev842j7FDQ=k8=oIRDxg4DLxD2iYotRiCPFChxeD; ssxmod_itna=YqRxuD0D9DBiwxiq0LYYIEaxfx67Dye8j2mpx0vc9eGzDAxn40iDt=P52GQ=GQnoeftKRnDh3e1WO253Kri4xPNFD84i7DKqibDCqD1D3qDkaIl1QODADi3DEDDeUDmqi8DIk=Dfj35DWmxi1BP5D5r5FDDyd9EahCGW8p=vH8xGdTmD3oQxNq7RKf7GPtepx3ixAA4p4+7RDGY+Y3edP70qKFYD",
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
