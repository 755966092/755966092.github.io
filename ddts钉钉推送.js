var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

const addressList = [
  {
    name: "41个SR",
    address: "0x8a8e090adf437bb30eaf601a5a4d109a08d72d89"
  },
  {
    name: "19个SR",
    address: "0xe79fa002b78fce232b49ab5e1ef4030dc438b31e"
  },
  {
    name: "19个SR2号",
    address: "0x349dc209b8469b5b18f06a4dcf7ef0d7d774759f"
  },
  {
    name: "29个SR",
    address: "0x9f36c056bccac8189c5ee3a1885e512fdbd08072"
  },
  {
    name: "10个SR",
    address: "0xbaf513549b1b05c93e66cf94c82e805ff3651a46"
  },
  { address: "0x6006aabb73454c9cfae62febbc6c3f3728f546c8", name: "鱼化寨一号" },
  { address: "0x9ba78a93387cdee2769ae6e24d3f13e2ec2b12ef", name: "小明星" },
  { address: "0x3342572427e79309071b43368cc7976e5c627a12", name: "我想吃西瓜" },
  { address: "0xeb6124360c548c9593f39b8d889facde76e52fb3", name: "马迪托1号(干杯" },
  { address: "0xca7155fb215750619e6d68fc5d2363be77252886", name: "爱学习的小白(干杯" },
  { address: "0xcb6e6e58d97bd5bbc5eae37a77171ca88364f458", name: "Lj72cgRf(干杯" },
  { address: "0x4018fee7752c503b6c2ad8b5807bfecef5eb9ec7", name: "Dashazi(干杯" },
  { address: "0xc2618849b719bce2016c0e27b3925b35a33fa8ff", name: "超超小飞侠NFT(干杯" },
  { address: "0xf66dcdbb3110a1d833b32a28da3083d644d639be", name: "麻辣小龙虾" },
  { address: "0xfe4f8cb9b5861efc496ee07ad0cc74e3363b363e", name: "财神爷" },
  { address: "0xcd05bf87177b6ed34bd3f67ff04fda79ae5c8076", name: "鱼化寨2号" },
  { address: "0x2c93bdd79b7930b14f520ca2238e22a2e52a657e", name: "暴富三符(N卡2号" },
  { address: "0x5067236b58238325225fbdb276db52f8bbb82f76", name: "重点2" },
  { address: "0x7cf335280c65554e4ce3f6268b030a5918088e5f", name: "南拳妈妈 干杯" },
  { address: "0xc447a826ad68265a395953aadf04cbefdbb72015", name: "大闹群主小号" },
  { address: "0x267a4882ad378ed5a9ce44263cfe1290ed7c85ba", name: "test" },
  { address: "0xe313acea8d1e6ffb9d6a2824554074b41a31ca9f", name: "公告前买小老虎的" },
  { address: "0x65652ce109f1f538252c3ba6bc3e145744a6f955", name: "24k" },
  { address: "0x0ae867f59df1ed5442d55d8a39d3b8403892dc3a", name: "阿达" },
  { address: "0x1aac1c9d7209ff82877f1442034a1789d813fdb6", name: "张国荣查出来的" }
];
var addressData = {};
var i = 0;
const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
var num = 1;
console.log('开始...');
(async () => {
  while (true) {
    try {
      getDate(addressList[i]);
      await sleep(10000);
    } catch (error) {}
  }
})();
// let diff = lodash.differenceBy(a.result, a1.result, "timeStamp");
// if (diff.length > 0) {
//     // 有新交易
//     sendDDNews(diff, {
//         name: "41个SR",
//         address: "0x8a8e090adf437bb30eaf601a5a4d109a08d72d89"
//     });
// }

function getDate(params) {
  request(
    {
      url: `https://api.hecoinfo.com/api?module=account&action=tokennfttx&address=${params.address.toLowerCase()}&page=1&offset=10&sort=desc`,
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
        console.log("请求:", params.name, "-", i);
        if (i < addressList.length - 1) {
          i++;
        } else {
          i = 0;
        }
        // tokenID
        console.log("请求次数:", num++);
        console.log(i, "-最新id: ", bodyData.result[0].tokenID);
        if (addressData[params.address]) {
          let diff = lodash.differenceBy(bodyData.result, addressData[params.address], "timeStamp");
          console.log("不同: ", diff);
          if (diff.length > 0) {
            // 有新交易
            addressData[params.address] = bodyData.result;
            sendDDNews(diff, params);
          } else {
            addressData[params.address] = bodyData.result;
          }
        } else {
          addressData[params.address] = bodyData.result;
        }
      } catch (error) {}
    }
  );
}

function sendDDNews(diff, params) {
  let ids = [];
  // params.address

  diff.forEach((item) => {
    getProductList(item.tokenID, (data) => {
      console.log('data: ', data);
      var aaaaaaaa = {
        title: "提醒：",
        text: ''
      };
      let d = JSON.parse(data);
      let news = "成功-提醒：";
      const time = moment(item.timeStamp * 1000).format("MM-DD HH:mm:ss");
      aaaaaaaa.title += params.name
      let type = ''
      if (item.to == params.address) {
        type = '买入'
        
      } else {
        type = '卖出'
      }
      if (d.length > 0) {
        const ele = d[0];
        // news += `商品：${ele.gName}，编号：${ele.gNum}，GID：${ele.gId}，tokenId：${ele.tokenId}`;
        aaaaaaaa.text = `## ${params.name} \n- 商品：${ele.gname} \n- 类型：${type} \n- 时间：${time} \n- 链接(GID)：[${ele.gid}](https://www.ibox.art/zh-cn/item/?id=100513860&gid=${ele.gid})  \n- tokenId： ${ele.tokenId}`
        sendNews(aaaaaaaa);
      } else {
        // news += `商品：暂无信息，编号：- - ，GID：- -，tokenId：${item.tokenID}`;
        aaaaaaaa.text = `## ${params.name} \n- 商品：暂无信息 \n- 类型：${type} \n- 时间：${time} \n- 链接：- -  \n- tokenId： ${item.tokenID}`
        sendNews(aaaaaaaa);
      }
    });
  });
}

function sendNews(news) {
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=febedf3f0da93b332c18b7b34926a82fd1bbb3474b5372417b2a1e83cf6ad180", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      // body: JSON.stringify({ msgtype: "markdown", text: { content: news } })
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: news
      }),
      // body: JSON.stringify({ msgtype: "text", text: { content: news } })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}


function getProductList(ids, cb) {
  console.log('ids: ', ids);
  request(
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      url: "http://123.57.64.135:8080/ibox/getInfos?tokenid=" + ids
    },
    function (error, response, body) {
      cb(body);
    }
  );
}

// function getProductList(ids, cb) {
//   request(
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       url: "http://60.205.252.237:8080/Api/Token/verifyIbox",
//       body: JSON.stringify({
//         token: "kxmi29",
//         tokenIds: ids
//       })
//     },
//     function (error, response, body) {
//       cb(body);
//     }
//   );
// }
