let request = require('request'); // 引入第三方request库

// 要访问的目标地址
let page_url = 'https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?page=1&pageSize=200&order=0'

// 代理服务器ip和端口,由快代理提供
let proxy_ip = '60.185.141.54';
let proxy_port = 22978;

// 完整代理服务器url
// let proxy = util.format('http://%s:%d', proxy_ip, proxy_port);  
let proxy = `http://${proxy_ip}:${proxy_port}`  

// 发起请求
request({
    url: page_url,
    method: 'GET',
    proxy: proxy,
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
    encoding: null,  // 方便解压缩返回的数据
}, function(error, res, body) {
    if (!error && res.statusCode == 200) {
        // 输出返回内容(使用了gzip压缩)
        console.log('res: ', res);

        
    } else {
        console.log(error);
    }
});

fetch("https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "ll=\"108288\"; gr_user_id=4488acc5-5b1c-4138-8ce0-85621c8e3a31; douban-fav-remind=1; __utmv=30149280.16208; douban-profile-remind=1; _vwo_uuid_v2=D323AFD70F5D3D4BC95373BB6F6DB0240|2c0791156e5d84d8b70ba6faf22210e1; bid=KW1qtdnF4Ys; Hm_lvt_16a14f3002af32bf3a75dfe352478639=1641457577; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1649915017%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DeXJn9u0W_oNG1zZRikRaY67qjeAdDjJO8_HgrTKuWgpWkyL7V86SpjziKMED7g3cUopulqaZU1Op-kcKoLAYyq%26wd%3D%26eqid%3Deaf882650005665a000000026257b484%22%5D; _pk_ses.100001.4cf6=*; ap_v=0,6.0; __utma=30149280.1615528916.1601264371.1649136660.1649915018.18; __utmb=30149280.0.10.1649915018; __utmc=30149280; __utmz=30149280.1649915018.18.11.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.297657636.1601264371.1639222926.1649915018.11; __utmb=223695111.0.10.1649915018; __utmc=223695111; __utmz=223695111.1649915018.11.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; _pk_id.100001.4cf6=acb3fa6f3a0cd763.1601021563.19.1649915025.1641458131.",
    "Referer": "https://movie.douban.com/?_t_t_t=0.8765449977945536",
    "Referrer-Policy": "unsafe-url"
  },
  "body": null,
  "method": "GET"
});

