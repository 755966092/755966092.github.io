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
        "ib-trans-id": "12e31ef20ba544db8b970d9b666cf70a",
        "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        cookie:
          "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=7d25cea716501037974647607e09a054120d991c21af7985b266b62d50; acw_sc__v3=625a95ffb5041e494e91ef10ad8457254d323eed; ssxmod_itna2=QqmxBD2DcDgAG=D8zDX+Y3SED0GBqDy7l0e=m2EDn93xvxxDs8kDLiQehqNqnRDkMYlGwQshjperAweYGqfIwS0OGy2PHO02IEwN0OMu2miotACHrw=iarM2VWC1D+2=rKI=uwvBh5aboazqnP4y6iFv=Kq5xyhNliFMCA4O1Ph/6ubUhWiYjuWDPnaZgqxCt9m/0mix93W0=8I0tej0EENMD8zMY3Lh6Wz0=dLocMrQ7qAjtkkWOwpOo=jy1Aw117eRncjUcpA=g1GhNKyLxZhfN97Hf1gaki81cSf1H1s0wDZ97NxH34HgieDxn7O1ObPnsy2=eYo5RGKYoDoi3D3rbKND+7gqiRKmiwgwka45HS8B0GMLoznsHBtNBPVGshxrogeRAxLSt+ibKeGhE7e0rYrQh4TX4xz+t3xFwYEghxClWb+Oyu53Btb2TqBO34aYlfWWTMTGKO1OL1Y4sOC13p6ykst4p5=Q5R=T1bsYsjl39k3MZsvC5aC37CQKm+oSb0gX=h08cY=/QGTznA8Ec2LDDw=GbCRUe+imiISO5iweZ+mjhGexx4GcDG7v=4Qi4KCxYiDD; ssxmod_itna=Yq+xn7eWqDqmqqGq0LnmDjEr7GO+s7Q7HHDl6QxA5D8D6DQeGTTUKrQTqQq=rDy7frvd70h+rqW5W73+xKIKn2WUxKIDAoDhx7QDox0=DnxAQDjaO+7uvxG4DEDm4Di/4itDEx7tyDA3LSDDfuDAUZAqGwUkdDGwplS4r=++=njdjUD0poSY3Nv0338+GtYY45GfqQ08DiQRDQ/o43KBvOvPqk2+GidhDxD=",
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
