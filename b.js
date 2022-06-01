var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

getDate();
function getDate(params) {
  request(
    {
      url: `https://api.hecoinfo.com/api?module=account&action=tokennfttx&address=0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f&page=1&offset=10&sort=desc`,
      headers: {
        "content-type": "application/json"
      }
    },

    function (error, response, body) {
      if (error) {
        console.log("错误一次:", JSON.stringify(error));
      }
      try {
        let bodyData = JSON.parse(body);
        console.log("bodyData: ", bodyData);

        // if (addressData[params.address]) {
        //   let diff = lodash.differenceBy(bodyData.result, addressData[params.address], "timeStamp");
        //   console.log("不同: ", diff);
        //   if (diff.length > 0) {
        //     // 有新交易
        //     addressData[params.address] = bodyData.result;
        //     sendDDNews(diff, params);
        //   } else {
        //     addressData[params.address] = bodyData.result;
        //   }
        // } else {
        //   addressData[params.address] = bodyData.result;
        // }
      } catch (error) {
        console.log('cuowu ');
      }
    }
  );
}

var a = [
  {
    blockNumber: "15642803",
    timeStamp: "1653822532",
    hash: "0x204e9d13a7e64e0cf7bc2ab3612734959fb1727d59d1c42b276c69b014a1764d",
    nonce: "66",
    blockHash: "0xb78e28ccd5a181c82addf91f0c4d2e0da0cb77976a153547aa8350e6fd78b12e",
    from: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0xe1e0375f54cf874ebe2b90367725c5163ddda000",
    tokenID: "1495116",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "15",
    gas: "77066",
    gasPrice: "2250000000",
    gasUsed: "71883",
    cumulativeGasUsed: "4469356",
    input: "deprecated",
    confirmations: "76986"
  },
  {
    blockNumber: "15642475",
    timeStamp: "1653821548",
    hash: "0x8ceb251f72b5c9082e082cb33ad1c937c2ddc1423fef6f480d79a1471cb5946c",
    nonce: "19",
    blockHash: "0x7c4bbafa8156a0d4476f4178eeb583a3ce2b94097b44345a6c03ddeb9bf30139",
    from: "0xafc1c3e11e7843ce7163282f7605454ecd5c121b",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    tokenID: "1495116",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "11",
    gas: "86817",
    gasPrice: "2250000000",
    gasUsed: "79766",
    cumulativeGasUsed: "2971155",
    input: "deprecated",
    confirmations: "77314"
  },
  {
    blockNumber: "15488045",
    timeStamp: "1653358258",
    hash: "0xc39656198625730573adfdd2f72d1f7209a5b4c85beafb19486c6108d96a03cd",
    nonce: "3",
    blockHash: "0xb6a900f823b7dd32ddd94dbedad2722b728f67053af7e7131143956729454bfc",
    from: "0x5b36bfae829f4239038ed2a2633fbc524629f6f3",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    tokenID: "1778591",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "22",
    gas: "77066",
    gasPrice: "2250000000",
    gasUsed: "71895",
    cumulativeGasUsed: "4043749",
    input: "deprecated",
    confirmations: "231744"
  },
  {
    blockNumber: "15385859",
    timeStamp: "1653051700",
    hash: "0xf6b6c1f50836588c787136a56f80676063355c626e8d0197503f3ce636b5ce7e",
    nonce: "65",
    blockHash: "0x38bc7da49aaa126688fed7906ea2cc1dbe1c60f17e781755a185af46f1cb8303",
    from: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0x0000000000000000000000000000000000000000",
    tokenID: "1302293",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "31",
    gas: "213579",
    gasPrice: "2250000000",
    gasUsed: "173165",
    cumulativeGasUsed: "4064367",
    input: "deprecated",
    confirmations: "333930"
  },
  {
    blockNumber: "15385859",
    timeStamp: "1653051700",
    hash: "0xf6b6c1f50836588c787136a56f80676063355c626e8d0197503f3ce636b5ce7e",
    nonce: "65",
    blockHash: "0x38bc7da49aaa126688fed7906ea2cc1dbe1c60f17e781755a185af46f1cb8303",
    from: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0x0000000000000000000000000000000000000000",
    tokenID: "1323110",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "31",
    gas: "213579",
    gasPrice: "2250000000",
    gasUsed: "173165",
    cumulativeGasUsed: "4064367",
    input: "deprecated",
    confirmations: "333930"
  },
  {
    blockNumber: "15385859",
    timeStamp: "1653051700",
    hash: "0xf6b6c1f50836588c787136a56f80676063355c626e8d0197503f3ce636b5ce7e",
    nonce: "65",
    blockHash: "0x38bc7da49aaa126688fed7906ea2cc1dbe1c60f17e781755a185af46f1cb8303",
    from: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0x0000000000000000000000000000000000000000",
    tokenID: "1042265",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "31",
    gas: "213579",
    gasPrice: "2250000000",
    gasUsed: "173165",
    cumulativeGasUsed: "4064367",
    input: "deprecated",
    confirmations: "333930"
  },
  {
    blockNumber: "15385859",
    timeStamp: "1653051700",
    hash: "0xf6b6c1f50836588c787136a56f80676063355c626e8d0197503f3ce636b5ce7e",
    nonce: "65",
    blockHash: "0x38bc7da49aaa126688fed7906ea2cc1dbe1c60f17e781755a185af46f1cb8303",
    from: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0x0000000000000000000000000000000000000000",
    tokenID: "1021819",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "31",
    gas: "213579",
    gasPrice: "2250000000",
    gasUsed: "173165",
    cumulativeGasUsed: "4064367",
    input: "deprecated",
    confirmations: "333930"
  },
  {
    blockNumber: "15380568",
    timeStamp: "1653035823",
    hash: "0x36173fa1aef3ed23746e640cbc41e5c507ef48277d5add82363fefa41363e527",
    nonce: "1",
    blockHash: "0x894324bb2107c9ce3fc73fb6be457a2598ffd999ccc73f45703aac91d7d17a84",
    from: "0xff9d484059fca97301dbf52a4e954495a17a1a5f",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    tokenID: "1302293",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "11",
    gas: "94130",
    gasPrice: "2250000000",
    gasUsed: "84195",
    cumulativeGasUsed: "953672",
    input: "deprecated",
    confirmations: "339221"
  },
  {
    blockNumber: "15380541",
    timeStamp: "1653035742",
    hash: "0x94f03c160cb11a3b51f437fad1e6d17998c783d5ede67b298b48e1999478eab3",
    nonce: "8",
    blockHash: "0xe0159ab0fba95294ce592aea509c03df4df619c2c299101d15b102b150f9f5dc",
    from: "0x0bc2ed958421ff6b5f6cbd389b8b9ce20466bab4",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    tokenID: "1323110",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "5",
    gas: "89255",
    gasPrice: "2250000000",
    gasUsed: "82566",
    cumulativeGasUsed: "2191318",
    input: "deprecated",
    confirmations: "339248"
  },
  {
    blockNumber: "15380468",
    timeStamp: "1653035523",
    hash: "0xf6b78ca9a9bfeebc32ed3ff887597125b0f0522496402ce780ca3e6b19daa597",
    nonce: "79",
    blockHash: "0x9eec6d5ad6566fac65288b12790db0c3228a9b0770548b976005f1ea450f4dc6",
    from: "0xe855debf79d3408c06aa7c56fa421cd36393a958",
    contractAddress: "0xd3d20d0bd31751f084cb4e4ff98e568c8c2132fb",
    to: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
    tokenID: "1042265",
    tokenName: "iBox",
    tokenSymbol: "iBox",
    tokenDecimal: "0",
    transactionIndex: "9",
    gas: "89255",
    gasPrice: "2250000000",
    gasUsed: "82566",
    cumulativeGasUsed: "880648",
    input: "deprecated",
    confirmations: "339321"
  }
];
