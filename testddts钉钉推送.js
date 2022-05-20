var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

getProductList([56191,496716,731272], (re) => {
  console.log('re: ', re);
});


function getProductList(ids, cb) {
  request(
    {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
      url: "https://api-app.ibox.art/nft-mall-web/v1.2/nft/product/getAlbumSearch?order=0&page=1&pageSize=20"
    },
    function (error, response, body) {
      cb(body);
    }
  );
}
