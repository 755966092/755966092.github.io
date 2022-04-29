var Web3 = require("web3");
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
getTransactionsByAddr(web3,"0x6e4Cc3e76765bdc711cc7b5CbfC5bBFe473B192E",133064,134230);
//myaccount :需要查询的地址信息，startBlockNumber：查询的其实blockNumber，endBlockNumber：查询的结束blockNumber
async function getTransactionsByAddr(web3,myaccount,startBlockNumber,endBlockNumber) {
 
    if (endBlockNumber == null) {
      endBlockNumber = await web3.eth.blockNumber;
      console.log("Using endBlockNumber: " + endBlockNumber);
    }
    if (startBlockNumber == null) {
      startBlockNumber = endBlockNumber - 1000;
      console.log("Using startBlockNumber: " + startBlockNumber);
    }
    console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks " + startBlockNumber + " and " + endBlockNumber);
 
    for (var i = startBlockNumber; i <= endBlockNumber; i++) {
      if (i % 1000 == 0) {
        console.log("Searching block " + i);
      }
      var block = await web3.eth.getBlock(i, true);
      if (block != null && block.transactions != null) {
        block.transactions.forEach(function (e) {
          if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
            console.log(" tx hash : " + e.hash + "\n"
              + " nonce : " + e.nonce + "\n"
              + " blockHash : " + e.blockHash + "\n"
              + " blockNumber : " + e.blockNumber + "\n"
               + " transactionIndex: " + e.transactionIndex + "\n"
              + " from : " + e.from + "\n" 
              + " to : " + e.to + "\n"
              + " value : " + web3.utils.fromWei(e.value.toString()) + "\n"
              + " time : " + timeConverter(block.timestamp) + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
              + " gasPrice : " + e.gasPrice + "\n"
              + " gas : " + e.gas + "\n"
               + " input : " + e.input
              + "--------------------------------------------------------------------------------------------"
            );
          }
        })
      }
    }
  }
 
  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = year + '/' + month + '/' + date + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }