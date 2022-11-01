var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

const addressList = [
  {
    userid: 27480,
    key: "key27480",
    name: "内幕-提前买罗汉",
    address: ""
  },
  {
    userid: 31237,
    key: "key31237",
    name: "大户-杨文斌",
    address: ""
  },
  {
    userid: 354457,
    key: "key354457",
    name: "大户-水镜-1",
    address: ""
  },
  {
    userid: 353657,
    key: "key353657",
    name: "大户-水镜-2",
    address: ""
  }
];

var addressData = {};
let getFlag = true;

var i = 0;
const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
var num = 1;
console.log("开始...");

setTimeout(() => {
  console.log("重启服务...");
  throw "测试错误";
}, 1500000);

(async () => {
  try {
    getDate(addressList[i]);
  } catch (error) {}
})();

function getDate(params) {
  if (getFlag) {
    getFlag = false;
    request(
      {
        url: `https://api.codeleven.cn/nft-live/server/asserts-api/list_user_transaction_log?userWalletId=${params.userid}&platformId=20&behaviorType=&pageNum=1&pageSize=20`,
        headers: {
          "content-type": "application/json"
        }
      },

      async function (error, response, body) {
        getFlag = true;
        try {
          if (error) {
            getDate(addressList[i]);
            console.log("错误一次:", JSON.stringify(error));
          }
          let bodyData = JSON.parse(body);
       

          if (i < addressList.length - 1) {
            i++;
          } else {
            i = 0;
          }
          // tokenID
          console.log(
            "请求次数:",
            num++,
            " -- ",
            moment().format("MM-DD HH:mm:ss")
          );
          await sleep(20000);
          getDate(addressList[i]);
          let handleDaya = bodyData.data.records;
          if (addressData[params.key]) {
            let diff = [];
            if (
              handleDaya.length == 20 &&
              addressData[params.key].length == 20
            ) {
              diff = lodash.differenceBy(
                handleDaya,
                addressData[params.key],
                "logDate"
              );
            }
            if (diff.length > 0) {
              console.log("不同: ", diff);
              // 有新交易
              addressData[params.key] = handleDaya;
              sendDDNews(diff, params);
            } else {
              addressData[params.key] = handleDaya;
            }
          } else {
            addressData[params.key] = handleDaya;
          }
        } catch (error) {
          console.log(error);
          getDate(addressList[i]);
        }
      }
    );
  }
}

function sendDDNews(diff, params) {
  diff.forEach((item) => {
    var aaaaaaaa = {
      title: "新交易提醒：",
      text: ""
    };
    const time = moment(item.logDate).format("MM-DD HH:mm:ss");
    aaaaaaaa.title += params.name;
    let type = "";
    if (item.type == "BUY") {
      type = "买入";
      // } else if (item.to === "0x0000000000000000000000000000000000000000") {
      //   type = "销毁";
    } else if (item.type == 'SALE') {
      type = "卖出";
    }

    aaaaaaaa.text = `## ${params.name} \n- 商品：${
      item.albumName
    } \n- 类型：${type} \n- 时间：${time} \n- 价格：${item.price} \n- 地板价：${
      item.referFloorConsignmentPrice / 100
    } `;
    sendNews(aaaaaaaa, params);
  });
}


function sendNews(news, params) {
  // let noall = [];
  // if (noall.indexOf(params.address) == -1) {
  //   sendNews2(news);
  //   sendNews3(news);
  // }
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=febedf3f0da93b332c18b7b34926a82fd1bbb3474b5372417b2a1e83cf6ad180", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: news
      })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}
