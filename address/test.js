var Web3 = require("web3");
var request = require("request");

var web3 = new Web3(new Web3.providers.HttpProvider());
var version = web3.version.api;

// $.getJSON('https://api.hecoinfo.com/api?module=contract&action=getabi&address=0xD3d20D0Bd31751f084Cb4E4fF98E568c8C2132Fb&apikey=1700348', function (data) {
// var contractABI = "";
//     contractABI = JSON.parse(data.result);
//     if (contractABI != ''){
//         var MyContract = web3.eth.contract(contractABI);
//         var myContractInstance = MyContract.at("0x66a79d23e58475d2738179ca52cd0b41d73f0bea");
//         var result = myContractInstance.memberId("0xfe8ad7dd2f564a877cc23feea6c0a9cc2e783715");
//         console.log("result1 : " + result);
//         var result = myContractInstance.members(1);
//         console.log("result2 : " + result);
//     } else {
//         console.log("Error" );
//     }
// });
request(
  {
    url: `https://api.hecoinfo.com/api?module=contract&action=getabi&address=0xD3d20D0Bd31751f084Cb4E4fF98E568c8C2132Fb&apikey=1700348`,
    headers: {
      "content-type": "application/json"
    }
  },

  async function (error, response, data) {
    // console.log("data: ", data);
    var contractABI = "";
    contractABI = JSON.parse(data.result);
    console.log('contractABI: ', contractABI);
    // if (contractABI != "") {
    //   var MyContract = web3.eth.contract(contractABI);
    //   var myContractInstance = MyContract.at("0x66a79d23e58475d2738179ca52cd0b41d73f0bea");
    //   var result = myContractInstance.memberId("0xfe8ad7dd2f564a877cc23feea6c0a9cc2e783715");
    //   console.log("result1 : " + result);
    //   var result = myContractInstance.members(1);
    //   console.log("result2 : " + result);
    // } else {
    //   console.log("Error");
    // }
  }
);
// https://api-h5.ibox.art/nft-mall-web/v1.2/nft/product/searchGoodsV2?
// subType=0
// &sort=0
// &onSale=1
// &grade=-1
// &origin=0
// &type=0
// &page=1
// &pageSize=50
// &content=+1728897
// &x_usec=e65460f408bbc6972c187fbf1d373061%2FeyQNZBXiViQlUjB6UjImUKH0FmQjUjk9TmTxVKdmFmFxGKT9TzH8TZPsPlIBByP2TAF7UKL7TKc7TiwiBMYBPjo6TKX7TywiACYBPjozUKLyUywiACYKPjoxUiwiZ7YBPjoyUzFyVJwiZ7YKPjoxUO6%3D&x_ufid=e65460f408bb