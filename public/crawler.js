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
        "ib-trans-id": "645e3db000484fe185a342b01452f6af",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_sc__v2=6258bce9ab302590968640827cb0a997e8c77df3; acw_sc__v2=6258bf1df619e4a829e7e454598f9615f9c86551; acw_tc=7d25cea516499853217221164e20f0a1b4e16e262f547c13c9866ce62f; acw_sc__v3=6258c743a79626351195d688c51fd00d38992e63; ssxmod_itna=eqGxcDy7GQD=K0L9DtD9nDgmxB7Dunn02r=jjWx0yieGzDAxn40iDtxoNbD6ij7GD5ef4/EbKsjebGaRIqVA8xrzYGDAoDhx7QDox0=DnxAQDjoxbBRIxG4DEDm4Dil4itDEx7U9DA4d1DDpODWvzux0r9EPD0xqzC1APxER8va57CxGdZn0W=DxNd0xeK0R5q0rK=i057nq5URrqFGDoilxxFC25dndNWDCAxFDPG/hDD==; ssxmod_itna2=eqGxcDy7GQD=K0L9DtD9nDgmxB7Dunn02r=jjDnFSidxDsPeqDLjGniNmlZ4nRUPS9OMu+HenEwTQ8gKGBpiqSjlSwup2btDMpHFnoeSa8WovqrcHWuAdfiX066toHI9cODo6mF+IyHDruGdDTGr=YH=0y1=2cxpxOQvOqTsAIwKb7=sOxaq/iwFzP53=DwqBKHF6GEqbKfZ6IqubIxCEqx560fSZbtCPPF4dO19Ka=oOBwS0Aij9Q3=yRATvvqB=M5em7Het95Fgu57gqa=QzdINGEAUvNgeN=+HFCYmrODcOZ/eIVnYqQ+3fx35+TtwN/7Qo4WRSe5oNFiG=uDO7DVG1xez4Ohonwzj1VBsUkCIMowqWvhouwCL25XbtOeO=2w+BGd8IoExzqhTqmg7eVi=D2=di1eSoZGCoxYeDdC7CXbFjmAsk5uCzCM56wis0A4RaeR4zhpf3EPCCd0CK01IZk+GKYBdUomK7NY8W7aOn037deSPXubAx8ElPq2DdW2iMEwc0X94wx4wlZeWqwwrQEDDwh4hFD8i4nx4km67no5eWbuhQ7PiwXGtPAmXFYHxSm0xGcDG75RDAf56dq4D===",
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
