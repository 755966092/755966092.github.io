const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

(async () => {
  console.log(1);
  await sleep(2000);
  console.log(2);
})();

//   fetch("https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/getProductListByAlbumId?page=1&pageSize=50&albumId=100513728&onSale=0&order=0", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "zh-CN",
//     "hb-nft-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
//     "ib-device-id": "e141d54cf837418784b6c8fd68ae1e37",
//     "ib-platform-type": "web",
//     "ib-trans-id": "b6aa5a5df0624ce3867ba29bb9ea04e0",
//     "ib-user-token": "LVzk36ToLjUpk20bnhjAG+4vPVD4iODzmHBtWTDmasU=",
//     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site",
//     "cookie": "_uab_collina=164871563825662603194418; JSESSIONID=164871563825662603194418; acw_tc=7ca5d59716494679433328495e58d5b03d00b00ed6c83b963dfa13b318; acw_sc__v3=6250e7df2211536a86bc28518203d95a856957b1; ssxmod_itna2=YqfxBD2DgGBGD7DzxAxorDkA38UqxQqxbAnDP0=D66tl8D0vxPe03Ke9hiYeOh+1qh==46xAP3Kjp3p+wep1dTr35uQD5nkl34oKb+A3I3jFeW3sUC2Qho+YarAYrw/Z=IKPynZrcmMAiFkAVK8Gif+vimrd6mr=4doIKjrhci7N1Q8ekKDTs+OGfzAYObLYnQuW=6EI7WTdGtSKNKYfTN8aB9E0HVLXo=LXDuuHxXxXCcmgwwujkK+BB3+G8V18Iw9K6pItj=+Y2bj35jARU2oZhU+YXaXgyu/TAIyAXO=onU8t2GUbyiQurit7sKLbf2tCS=QrQCRQ/LeLrd3oTMMNyM7qO3ohYEDHsd452tS8ClbGx+kYhTHTGqwm0WG2OwVfNPW133Y8rNw3zBb58k+qg=rAYIni+RCS3iLr=ecv0qfyuQ8QCa=z1Cf2LIODQKbLFqkNYKaxoeR4ROPD7jiAxM1wWmhgihSUwyFEBlDQrhKhwHeiCWqCW3PYHYDKdrqZ7UiBUkAGjBKH2hsmydoO=B3PGfhY44h44I4yzgYe4iL4Cm7N5gNrD6iDPC=dPhFHDnDhQDGcDG7sc6+YdaSn4D==; ssxmod_itna=QqfxyD0iYiqYwx7q0dKYIE=RDg0+CKFDBeOrmpx0ygeGzDAxn40iDt=ouQ+QgGB72YqfFQYTezjWGGpPPfK27G35WMh4iTD4q07Db4GkDAqiOD7LRe2INqDPDbxYPDGlPGCDbq0CUxiaFcxDWvxi1Mr5D51yFDD5QgcP+rjG3jhI1hcPDUQ2D=ZgeZB0YTiDdqi+5YQ0K/QbLbPhxwWSvIe2DFZT3ZGhP4D=",
//     "Referer": "https://www.ibox.art/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });
