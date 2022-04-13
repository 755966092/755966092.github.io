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
        "ib-trans-id": "1f60f64133af472084e4078cc864d558",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=3cdd179d16498257691562556e1df76efb8a248edcc4f2d7bae6c2da3b; acw_tc=3cd9f6da16498256633737555ee346b282fcceead68357e1558fc2fbd3; acw_sc__v2=6256577f94edf1d42c5b7050cc4930243efa32a5; acw_sc__v3=625657f3ca40af912a3fc28439e139e71d36e4c1; ssxmod_itna=YqRx9DuDcDB00=eDQDXDnD+h+=F4kiggoxCqh7qGNQP3DZDiqAPGhDC+89+E8i3meYfWYx2K4V7oW4Lm=hGicDqjAQG4GIDeKG2DmeDyDi5GRD09P3+=sKD3Dm4i3DDgdDgDmKGgCqGfjfqDAtqGS9wtDtSU6DDU7RLde=AYa7q=M4LdDCg3dIR43lhx3WGPe0Gx4j0AtU+xeQGxdQBx5ADxoQGqeKAy3nD7rPeqonYWeeD=; ssxmod_itna2=YqRx9DuDcDB00=eDQDXDnD+h+=F4kiggoxCqhDA6WtQQD/C2iDF242Gz0Yg=mF4=QQzPQYv7c0Ynij5DEoSa6w0WDPoahNzOxkup5oeqLp+sZhpkB6TrLPEd8D8OoKUgtRpGS7KkMcr=PW16Zy1v1m4XQH=u=ikPFBivOvxqmAi7RIdO+hO5RaAOtGez+DEqxTh5=DrNbybXKYTQfpLQtWj4hSCgWB7uZejYavwzrgCl=vHpIMXuYn+/byTsIdhlpl12RGnQzPcYbBbYY27VregnGbU7=6wi+A0n1cD7tvyu1a0qB7nyuFiSrcYqQ442b4ibx0wiFDbyDCn2kh0FnrzL8oT8=i2CASY4xWZrbFRTXbwpmar+T=hmc4Fkn1TfpqLKKBmqnkFGd=S+nAptboZ+xzEtb0kwAHFB39rxL4bxghmrrd+TISi7bzS7rV2QjxQ4rYI+T0Gjz4K5467xa9rjzb4p6wb7861xvxFA0Lix17oU63PD7jx7xdQ9GBGLi7/QB45qMWfewwAGG=PebeeeB=K+D9UmdutXhh1DGcDG7HaxKihtI04D",
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
