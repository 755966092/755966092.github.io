var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

const addressList = [
  {
    name: "18数藏-- 70",
    address: "iaa1lwzmdy0g0axyr0nskn0messlys472d4z3azcu3"
  },
  {
    name: "18数藏-- 73",
    address: "iaa106cgd25wlfumew8xjjk967nwhtkxn75j0tzrjv"
  },
  {
    name: "18数藏-- 75",
    address: "iaa1yk3z6nqyuj3q4prs6gjsqcvr8psknr94upup6s"
  },
  {
    name: "18数藏-- 76",
    address: "iaa1n3cmnnu7p43qt2mfnau0apx5m94exnhh9jgqrr"
  },
  {
    name: "18数藏-- 76",
    address: "iaa1g0ep6yc95p5m2lmqm2y5w7dj3cnghf2zee0mtz"
  },
  {
    name: "18数藏-- 78",
    address: "iaa1dky7x82904srtf3f9yx5803epr6c0ys473g8xx"
  },
  {
    name: "18数藏-- 78",
    address: "iaa10ra2sg9lhkcz2a5pyt5rwmd3wunjvcmmgh2w8q"
  },
  {
    name: "18数藏-- 80",
    address: "iaa1h38qs9hfdwhq48xsmlsjqp49m5hzxzvc27l659"
  },
  {
    name: "18数藏-- 81",
    address: "iaa1y5lzcfr99c0uv2lvhagrarz6z0yrzkxpy0w4fy"
  },
  {
    name: "18数藏-- 86",
    address: "iaa1nc043kj2qvy669ak3ws6qccgjkldvnaefevctv"
  },
  {
    name: "18数藏-- 95",
    address: "iaa19x2ue7uy32062pchjhey0q5294mudt6e8q2waq"
  },
  {
    name: "18数藏-- 99",
    address: "iaa1t037cv325q845ks7eng85ck8sexqcuwv6yd077"
  },
  {
    name: "18数藏-- 111",
    address: "iaa1wvdusmcvenxgt8a5qw8zpkn509g29n4wl3xr6u"
  },
  {
    name: "18数藏-- 113",
    address: "iaa1hwss6szw0d3wqjr9mlwp8jvn9kjk7darvqh9c4"
  },
  {
    name: "18数藏-- 119",
    address: "iaa19luv66pr55evlsp20nv5zgksu4cyz6veu9ywah"
  },
  {
    name: "18数藏-- 129 -- 特殊对象",
    address: "iaa16tf3aquz433n60y5e46gsc9m67wfskt9w9dnfn"
  },
  {
    name: "18数藏-- 129",
    address: "iaa1zqmklc564rfgm94r7w4qyl8dpc8jcaef0l63h7"
  },
  {
    name: "18数藏-- 130",
    address: "iaa13a5w5xxx77rxtl8d69r0a5ndg0lx0gxcp79vaf"
  },
  {
    name: "18数藏-- 138",
    address: "iaa1uflne2yjmwak4sw342lcg39zg2eepjmca6m0ty"
  },
  {
    name: "18数藏-- 182",
    address: "iaa17hh3satt00jwxnrthcrcwld2wtf257lsnylgfj"
  },
  {
    name: "18数藏-- 鸭王",
    address: "iaa1ayjentczmquec20emlck826c7vj9v63cpzc0vp"
  },
  {
    name: "18数藏-- 198",
    address: "iaa1cn2wza5taa0tg6zlvwjn9w2tcgjzpyu7q0x6ny"
  },
  {
    name: "18数藏-- 206",
    address: "iaa1w5e57klgd9p8ycrwpnrz8kmvpg4ee8rn5wt3s7"
  },
  {
    name: "18数藏-- 237",
    address: "iaa1qhsljthqynupfyhrhc8cqksmgs4nde423mceg8"
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
}, 1800000);

(async () => {
  try {
    getDate(addressList[i]);
  } catch (error) {}
})();

// iaa1thp0uyk72vu8uhxjmygxm0xphfs99jzcpkl23u   官方地址
function getDate(params) {
  if (getFlag) {
    getFlag = false;
    request(
      {
        url: `https://explorer.wenchang.bianjie.ai/api/txs/addresses?address=${params.address}&type=issue_denom,transfer_denom,mint_nft,edit_nft,transfer_nft,burn_nft&useCount=false&countMsg=false&pageNum=1&pageSize=5`,
        // url: `https://explorer.wenchang.bianjie.ai/api/nfts?denomId=&nftId=&owner=iaa1p7vrfx7ytqqgyd2g8ulwhpu42nmaqt0dkxmcwx&pageNum=1&pageSize=5`,
        // url: `https://api.hecoinfo.com/api?module=account&action=tokennfttx&address=${params.address.toLowerCase()}&page=1&offset=10&sort=desc`,
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
          let bodyData = JSON.parse(body).data.data;
          console.log("------------------------------------------------");
          console.log("用户: ", params.name);
          console.log(
            "请求次数:",
            num++,
            " -- ",
            moment().format("MM-DD HH:mm:ss")
          );
          console.log("------------------------------------------------");
          if (i < addressList.length - 1) {
            i++;
          } else {
            i = 0;
          }
          await sleep(500);
          getDate(addressList[i]);

          if (addressData[params.address]) {
            let diff = [];
            if (
              bodyData.length == 5 &&
              addressData[params.address].length == 5
            ) {
              diff = lodash.differenceBy(
                bodyData,
                addressData[params.address],
                "time"
              );
            }
            if (diff.length > 0) {
              // 有新交易
              addressData[params.address] = bodyData;
              sendDDNews(diff, params);
            } else {
              addressData[params.address] = bodyData;
            }
          } else {
            addressData[params.address] = bodyData;
          }
        } catch (error) {
          if (i < addressList.length - 1) {
            i++;
          } else {
            i = 0;
          }
          getDate(addressList[i]);
        }
      }
    );
  }
}

function sendDDNews(diff, params) {
  let ids = [];
  // iaa1thp0uyk72vu8uhxjmygxm0xphfs99jzcpkl23u
  diff.forEach((item) => {
    var aaaaaaaa = {
      title: "新交易提醒：",
      text: ""
    };
    const time = moment(item.time * 1000).format("MM-DD HH:mm:ss");
    aaaaaaaa.title += params.name;
    let type = "";
    if (item.msgs[0].msg.recipient == params.address) {
      type = "买入";
    } else if (item.to === "0x0000000000000000000000000000000000000000") {
      type = "销毁";
    } else {
      type = "卖出";
    }
    const ele = item.msgs[0].msg;
    aaaaaaaa.text = `## ${params.name} \n ## 18数藏交易 \n- 商品：${
      ele.name
    } \n- 类型：${type} \n- 时间：${time} \n- ID: ${
      ele.id
    } \n- 地址: ${params.address.substr(30)}`;
    sendNews(aaaaaaaa, params);
  });
}

// new boy 内部群
function sendNews(news, params) {
  let noall = [
    // "0x3342572427e79309071b43368cc7976e5c627a12",
  ];
  if (noall.indexOf(params.address) == -1) {
    // sendNews2(news);
    // sendNews3(news);
    // setTimeout(() => {
    // }, timeout);
  }
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

// 交易提醒收费群
function sendNews2(news) {
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=d728f7912c9fe66fe78679ed4ccd046a37c6273c30839fbb7b9b01f15dba832e", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      // body: JSON.stringify({ msgtype: "markdown", text: { content: news } })
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: news
      })
      // body: JSON.stringify({ msgtype: "text", text: { content: news } })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}

// 新老链监控收费监控群
function sendNews3(news) {
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=efaeda965fb6a4f4742cd5c29e4f8a72c7bd7df5502ef77aa4ba2e6340b50391", //请求路径
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
