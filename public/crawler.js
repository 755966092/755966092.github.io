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
        "ib-trans-id": "78427a36c5ac407d94635be960611ea1",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "JSESSIONID=625832cbeca45b36753decb29f8909f2283705a6; acw_sc__v2=62591fb40cbf11d5a8421b5c260e8eba2eecba64; acw_tc=65e21c1a16500101019907895e4d949a280b1073adcc6893b5465bbbb5; acw_sc__v3=6259280b183730147957629f19dc189ffb7272bb; ssxmod_itna2=CqIx2DnDRAKBPSOD9DfxDucAXDCKqHtkTD6ab=x0Hb403aK1UEfHUyK3Dg7wMfYw3D67B54eHY8QHvpVAlQyfh3CamKaInC+=HPsgKleLj0nDMpFX+yYiwbApyiDvA+xU92pBkLrL+K8KLQntqN+IB3L0GA7UbrPY7owzuD4oA48jm3zAEUd1CXd5lUS/wieRkYiTTILjjdq9diu7P3HhREkISQ4IW6sXM3wj1c+EfURmauhjnaPL6L3W/gMRTj/REnhIEy+j4chMpybyF5p93xajn0VFTPiuSjiaspR5ihuf7ysY0EynL=YAiEAIA+GiiDUvVnwVg+SCGBg5HiDZOD=OmGGicODetq2=0jEq124jOAoetHQDvCRzB=8ANqR5b+QFWtKGiABrLnd=p6DFfSm6ztXRPpRO2uQhxB2DamOx21ewZgqjY2GaDsWj1B2wSa4SWcEXkWKN/IkODN9jOAFF7pfmwd8mf7ozbHemrz+9lKubDG2QDxKDcUEdSi5UrPIDAKChakQ6DQblmyxDFqD+Ee=QG1nhaA93QDxD===; ssxmod_itna=eqjxnDBiuDRlDXQq7xWqDKl7qIEqCwpaaPDsqmDSxGKidDqxBemk4KWqFTK4AOItaDmwtW7iGxa543ZEjr5TBe4AoDhx7QDox0=DnxAQDjox+H2wxG4DEDm4Di94itDEx7tcDAf8CDi=KDc15CDCnCHxDCjWHFebiKIGKORcaFDBbtK7bqKDxt=GDeFjnDYQmx70mvhRe4KiDYYY857jDx1eptpGqPqYD===",
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
