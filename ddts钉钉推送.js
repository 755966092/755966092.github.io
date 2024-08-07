var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

const addressList = [
  {
    name: "NEI-41个SR",
    address: "0x8a8e090adf437bb30eaf601a5a4d109a08d72d89"
  },
  {
    name: "NEI-19个SR",
    address: "0xe79fa002b78fce232b49ab5e1ef4030dc438b31e"
  },
  {
    name: "NEI-19个SR2号15宙斯",
    address: "0x349dc209b8469b5b18f06a4dcf7ef0d7d774759f"
  },
  {
    name: "NEI-29个SR",
    address: "0x9f36c056bccac8189c5ee3a1885e512fdbd08072"
  },
  {
    name: "NEI-10个SR",
    address: "0xbaf513549b1b05c93e66cf94c82e805ff3651a46"
  },
  {
    address: "0x6006aabb73454c9cfae62febbc6c3f3728f546c8",
    name: "NEI-鱼化寨一号"
  },
  // { address: "0x9ba78a93387cdee2769ae6e24d3f13e2ec2b12ef", name: "NEI-小明星" },
  {
    address: "0x3342572427e79309071b43368cc7976e5c627a12",
    name: "NEI-我想吃西瓜"
  },
  {
    address: "0xeb6124360c548c9593f39b8d889facde76e52fb3",
    name: "NEI-马迪托1号(干杯"
  },
  {
    address: "0xca7155fb215750619e6d68fc5d2363be77252886",
    name: "NEI-爱学习的小白(干杯"
  },
  {
    address: "0xcb6e6e58d97bd5bbc5eae37a77171ca88364f458",
    name: "NEI-Lj72cgRf(干杯"
  },
  {
    address: "0x4018fee7752c503b6c2ad8b5807bfecef5eb9ec7",
    name: "NEI-Dashazi(干杯"
  },
  // {
  //   address: "0xc2618849b719bce2016c0e27b3925b35a33fa8ff",
  //   name: "NEI-超超小飞侠NFT(干杯"
  // },
  {
    address: "0xf66dcdbb3110a1d833b32a28da3083d644d639be",
    name: "NEI-麻辣小龙虾"
  },
  { address: "0xfe4f8cb9b5861efc496ee07ad0cc74e3363b363e", name: "NEI-财神爷" },
  // {
  //   address: "0xcd05bf87177b6ed34bd3f67ff04fda79ae5c8076",
  //   name: "NEI-鱼化寨2号"
  // },
  {
    address: "0x2c93bdd79b7930b14f520ca2238e22a2e52a657e",
    name: "NEI-暴富三符(N卡2号"
  },
  { address: "0x5067236b58238325225fbdb276db52f8bbb82f76", name: "NEI-重点2" },
  // {
  //   address: "0x7cf335280c65554e4ce3f6268b030a5918088e5f",
  //   name: "NEI-南拳妈妈 干杯"
  // },
  {
    address: "0xc447a826ad68265a395953aadf04cbefdbb72015",
    name: "NEI-大闹群主小号"
  },
  // { address: "0x267a4882ad378ed5a9ce44263cfe1290ed7c85ba", name: "NEI-test" },
  // {
  //   address: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f",
  //   name: "NEI-公告前买小老虎的"
  // },
  // { address: "0x65652ce109f1f538252c3ba6bc3e145744a6f955", name: "NEI-24k" },
  { address: "0x0ae867f59df1ed5442d55d8a39d3b8403892dc3a", name: "NEI-阿达" },
  // {
  //   address: "0x1aac1c9d7209ff82877f1442034a1789d813fdb6",
  //   name: "NEI-张国荣查出来的"
  // },
  { address: "0x7351928ee87ac364858b55673e649eac049370c5", name: "林斌" }, // 81
  { address: "0xc9e4f4a4512290612cf8ecb5086d290d0a3e396b", name: "辛德勒" },
  // { address: "0x09c3fd879365c00410e3fcf37f58687b76ac75e3", name: "NEI-花花" },
  // { address: "0x5e71ee36793db6bb532d0fedc0f1ad74b58ac541", name: "NEI-马超黄忠" }
  {
    address: "0x07d46d9cf737a121ecc359d6e29b0f62f33bb05e",
    name: "NEI-花+马超"
  },
  { address: "0xdd7ef936fa6fbc14fc583f25b7b70e73460fa42a", name: "NEI-20古龙" },
  { address: "0xf2d3249d7725d5ff117c9a9688cdb0edd4bddb87", name: "NEI-14古龙" },
  { address: "0x26028941e28ad3eae79543c6768595d4d4daaab4", name: "NEI-17古龙" },
  {
    address: "0xaa222ee4338788969a1d498c2efd9927a47970c5",
    name: "NEI-数藏元年40宙斯"
  },
  {
    address: "0x237c31f84a406009476ae65714ecd27354fd6c11",
    name: "NEI-梅赛德斯15宙斯"
  },
  {
    address: "0x414c9fe0f658bfbd987ccc4ffbb80d45f7a1c1fc",
    name: "NEI-一发入魂10宙斯"
  },
  {
    address: "0x0db6ce001b7e15e403760c047cfb0a2d5d75b2b1",
    name: "NEI-天天好心情10宙斯"
  },
  // {
  //   address: "0x06fefec3d5d978aea8ca1367421c9d78b0adef83",
  //   name: "NEI-毛哥发现的小号"
  // },
  // {
  //   address: "0x05c98f6be94182bfa0ff1dd18f7c3b93cff18a37",
  //   name: "NEI-这个人4个宙斯"
  // },
  // {
  //   address: "0x513f61fec7ee705dbd5da9a8e0354e407802c3dd",
  //   name: "NEI-活动前买金福"
  // },
  // {
  //   address: "0x534e76131946aebfb4ee296365f8c81182acab95",
  //   name: "NEI-罗纳威犬-1个"
  // },
  {
    address: "0x3700ba3feae4cd9f5042173eeca8a6794442a1e9",
    name: "NEI-罗纳威犬-5个-柒岁"
  },
  {
    name: "罗纳威犬-两个-2个",
    address: "0x472080f9b53526fececbe9cd96920e9a34c106f9"
  },
  {
    name: "罗纳威犬-长安-1个",
    address: "0xf6336d69e5822214d497d4ac2840e5aa2de37027"
  },

  {
    name: "罗纳威犬-两个罗纳威犬-2个",
    address: "0x7cec63ed64fdfdaa2a7c9bbf5c461fe5eacac674"
  },
  {
    name: "罗纳威犬-业精于勤-1个",
    address: "0x3ff690b2b5320e5ddacad8b9addb61c97167638b"
  },
  {
    name: "罗纳威犬-bug我关羽留v-1个",
    address: "0xc087424b5495b4812df10b03b8ea84387206fa0f"
  },
  {
    name: "罗纳威犬-干-1个",
    address: "0x334ec89d987bc76a5b443950d7f55a89f17850e7"
  },
  {
    name: "罗纳威犬-跑跑很准-2个",
    address: "0xc32c4ef06d3e70ea32a006d752ecec38f9087f7c"
  },
  {
    userid: 12516366,
    name: "多维合成-小目标-1个",
    address: "0xea50bd7a3ebe14d208bd50cdad027780c3871271"
  },
  {
    userid: 10441361,
    name: "多维合成-割割不要再割了-1个",
    address: "0x31b52751b3ab0d270fad9f0974aa9930287ef502"
  },
  {
    userid: 10966600,
    name: "多维合成-相信资本的力量-2个",
    address: "0xc695473e4a10fc9fca0c92804e5a7e9ba4c9cbb8"
  },
  {
    name: "云飞扬",
    address: "0x8cbb9cbb46b258070c592cd88c836b5072e43f9d"
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

function getDate(params) {
  if (getFlag) {
    getFlag = false;
    request(
      {
        url: `https://api.hecoinfo.com/api?module=account&action=tokennfttx&address=${params.address.toLowerCase()}&page=1&offset=10&sort=desc`,
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

          console.log("请求:", params.name, "-", i);
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
          // console.log(i, "-最新id: ", bodyData.result[0].tokenID);
          await sleep(500);
          getDate(addressList[i]);

          if (addressData[params.address]) {
            let diff = [];
            if (
              bodyData.result.length == 10 &&
              addressData[params.address].length == 10
            ) {
              diff = lodash.differenceBy(
                bodyData.result,
                addressData[params.address],
                "timeStamp"
              );
            }
            if (diff.length > 0) {
              console.log("不同: ", diff);
              // 有新交易
              addressData[params.address] = bodyData.result;
              sendDDNews(diff, params);
            } else {
              addressData[params.address] = bodyData.result;
            }
          } else {
            addressData[params.address] = bodyData.result;
          }
        } catch (error) {
          getDate(addressList[i]);
        }
      }
    );
  }
}

function sendDDNews(diff, params) {
  let ids = [];

  diff.forEach((item) => {
    getProductList(item.tokenID, (data) => {
      var aaaaaaaa = {
        title: "新交易提醒：",
        text: ""
      };
      let d = JSON.parse(data).data;
      const time = moment(item.timeStamp * 1000).format("MM-DD HH:mm:ss");
      aaaaaaaa.title += params.name;
      let type = "";
      if (item.to == params.address) {
        type = "买入";
      } else if (item.to === "0x0000000000000000000000000000000000000000") {
        type = "销毁";
      } else {
        type = "卖出";
      }
      if (d.length > 0) {
        const ele = d[0];
        aaaaaaaa.text = `## ${params.name} \n- 商品：${ele.gName} \n- 类型：${type} \n- 时间：${time} \n- GID：[${ele.gId}](https://www.ibox.art/zh-cn/item/?id=100513860&gid=${ele.gId}) \n- 链接：https://www.ibox.art/zh-cn/item/?id=100513860&gid=${ele.gId}  \n- tokenId： ${ele.tokenId}`;
        // aaaaaaaa.text = `## ${params.name} \n- 商品：${ele.gname} \n- 类型：${type} \n- 时间：${time} \n- 链接(GID)：[${ele.gid}](https://www.ibox.art/zh-cn/item/?id=100513860&gid=${ele.gid})  \n- tokenId： ${ele.tokenId}`;
        sendNews(aaaaaaaa, params);
      } else {
        aaaaaaaa.text = `## ${params.name} \n- 商品：暂无信息 \n- 类型：${type} \n- 时间：${time} \n- 链接：- -  \n- tokenId： ${item.tokenID}`;
        // aaaaaaaa.text = `## ${params.name} \n- 商品：暂无信息 \n- 类型：${type} \n- 时间：${time} \n- 链接：- -  \n- tokenId： ${item.tokenID}`;
        sendNews(aaaaaaaa, params);
      }
    });
  });
}

// new Boy 
function sendNews(news, params) {
  let noall = [
    // "0x3342572427e79309071b43368cc7976e5c627a12",
    // "0xf66dcdbb3110a1d833b32a28da3083d644d639be",
    // "0xdd7ef936fa6fbc14fc583f25b7b70e73460fa42a",
    // "0xf2d3249d7725d5ff117c9a9688cdb0edd4bddb87",
    // "0x26028941e28ad3eae79543c6768595d4d4daaab4",
    // "0xfe4f8cb9b5861efc496ee07ad0cc74e3363b363e",
    // "0x06fefec3d5d978aea8ca1367421c9d78b0adef83",
    // "0x05c98f6be94182bfa0ff1dd18f7c3b93cff18a37",
    // "0xc32c4ef06d3e70ea32a006d752ecec38f9087f7c",
    // "0x3700ba3feae4cd9f5042173eeca8a6794442a1e9"
  ];
  if (noall.indexOf(params.address) == -1) {
    sendNews2(news);
    sendNews3(news);
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

// 交易提醒收费监控群
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

// 新老链收费监控群
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

// function getProductList(ids, cb) {
//   console.log("ids: ", ids);
//   request(
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       url: "http://123.57.64.135:8080/ibox/getInfos?tokenid=" + ids
//     },
//     function (error, response, body) {
//       cb(body);
//     }
//   );
// }

function getProductList(ids, cb) {
  request(
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      url: "http://60.205.252.237:8080/Api/Token/verifyIbox",
      body: JSON.stringify({
        token: "41kbW8",
        tokenIds: ids
      })
    },
    function (error, response, body) {
      cb(body);
    }
  );
}
