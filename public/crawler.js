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
        "ib-trans-id": "03c270bc83834c65b7430eae68b3da92",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=7d25cea716501198193426049eaaba13d254a2efc5aff3f428ccb71759; acw_sc__v3=625ad48f144e45cd3c08cf5e77e110f06ccff32f; ssxmod_itna2=euG=D57IgD7DOzDXDnQmKi==4Yvt0=OOW5b51D6ptDtD0yiurx03Wdc60D6lALuRds9KmA9q8quWMYhhQfxbSwh5i3620sqfpoxn8=iIOMrz1izA5p8lt9OBgwoDP9vU4qE7M7hri1n7QDakqFIN1=Bxx4nDY8Gw2hIwS2uW1c+C+pH7qfv+S75TBEgqmbGAXmDf785LUZGTSr2NXpowcSF46=DPXlG=/0PwRBF8KeuOEbA0Qpj6B/R758EGc0YNKfT9PcoN9QA1lCcvdgFIwyFEwkdHFSUflnclsTXnWyg7cvCZ+N=vbF/nn/SRqnRDcT4ZmZ+pf3AlUHqO5Dgvpm7VmBqjuDxTAlPPju5xwTWakSaOjrktcdWEtGhdsWdXhf7+Tju3MWXWcNB+1/2VRWv/Y5qA4gnxxBG/cw9pWC2dU4z3TWnKbSiqbxDKkw1GfqfxBDoPBY1pfO3jppjXeeD7=DYK4LT5lBKPD===; ssxmod_itna=eqAxgDyDRDuGlDWq0dR7tD9ex0QKKKDBQ0eOGhx0vneGzDAxn40iDt=oTYR=E0EAwYefS0DTKzjBnhahYferGwfKfS2A5GIDeKG2DmeDyDi5GRD0FpowNwKD3Dm4i3DDxQDgDmKGgzqG36jqDAiqGSBLtDt4NUDDt7nuLeyGf9bMt2l4DHIYdaR8+zWimoGfmxe2GE7Yq4lrmFp3qeeEWPiA98uDyHXAvdKiD===",
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
