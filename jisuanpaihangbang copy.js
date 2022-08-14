const request = require("request");
const fs = require("fs");
const lodash = require("lodash");
const moment = require("moment");

const data = require("./luohan-paixv.js");
const data2 = require("./luohan.js");

var pageNum = 1;
var startTime = moment("2022-08-09 00:00:00").valueOf() / 1000;

(async function () {
  for (let i = 106; i < data.length; i++) {
    const item = data[i];
    if (i < 3000) {
      await getFn(item, i);
    }
  }
})();

async function getFn(param, iii) {
  let page = pageNum;
  let time = 0;
  let result = [],
    resultLength = 0;
  for (let i = 1; i > 0; i++) {
    await pro(param, pageNum).then((data, iid) => {
      console.log(`地址: ${param.owner}, 序号: ${iii + 1}, 页码: ${pageNum}`);

      pageNum += 1;
      result = result.concat(data);
      resultLength = result.length + data.length;
      if (data.length > 0) {
        time = data[data.length - 1].time;
      }
    });
    if (result.length == resultLength) {
      break;
    }
    if (time < startTime) {
      break;
    }
  }
  pageNum = page;
  viewData = result;

  formatData(uniqueKey(result), param.owner);
}

function pro(params, pageNum) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://explorer.wenchang.bianjie.ai/api/txs/addresses?address=${params.owner}&type=issue_denom,transfer_denom,mint_nft,edit_nft,transfer_nft,burn_nft&useCount=false&countMsg=false&pageNum=${pageNum}&pageSize=100`,
        headers: {
          "content-type": "application/json"
        }
      },

      function (error, response, body) {
        try {
          if (error) {
            console.log("错误一次:", JSON.stringify(error));
          }
          let bodyData = JSON.parse(body).data.data;
          resolve(bodyData, "iid");
        } catch {}
      }
    );
  });
}

function getDate(params) {
  request(
    {
      url: `https://explorer.wenchang.bianjie.ai/api/txs/addresses?address=${params.owner}&type=issue_denom,transfer_denom,mint_nft,edit_nft,transfer_nft,burn_nft&useCount=false&countMsg=false&pageNum=1&pageSize=5`,
      headers: {
        "content-type": "application/json"
      }
    },

    async function (error, response, body) {
      try {
        if (error) {
          getDate(addressList[i]);
          console.log("错误一次:", JSON.stringify(error));
        }
        let bodyData = JSON.parse(body).data.data;
        console.log("bodyData: ", bodyData);
      } catch {}
    }
  );
}

function uniqueKey(param) {
  let arr = param;
  let kongtou = [];
  let yuanxian = [];

  arr.forEach((item) => {
    if (
      item.msgs[0].msg.sender === "iaa1thp0uyk72vu8uhxjmygxm0xphfs99jzcpkl23u"
    ) {
      // 空投
      kongtou.push(item);
    } else {
      yuanxian.push(item);
    }
  });

  const res = new Map();
  let a = kongtou.filter(
    (a) => !res.has(a.msgs[0].msg.name) && res.set(a.msgs[0].msg.name, 1)
  );
  return a.concat(yuanxian);
}

function formatData(dataParam, iid) {
  let resultData = {};

  let data = dataParam;
  data = uniqueKey(data);

  for (let i = 0; i < data.length; i++) {
    const item = data[i].msgs[0].msg;
    let name = item.name.replace(/#.*/g, "");
    if (name.indexOf("罗汉") != -1 && name != "静坐罗汉") {
      if (resultData[name]) {
        resultData[name].data.push({
          id: item.id,
          recipient: item.recipient,
          sender: item.sender
        });
      } else {
        resultData[name] = {
          data: []
        };
        resultData[name].data.push({
          id: item.id,
          recipient: item.recipient,
          sender: item.sender
        });
      }
    }
  }
  let all = {};
  for (const key in resultData) {
    let sender = [],
      recipient = [];
    if (Object.hasOwnProperty.call(resultData, key)) {
      const element = resultData[key];
      let k = key + "";
      for (let i = 0; i < element.data.length; i++) {
        const item = element.data[i];
        // recipient 接受
        // sender 发出
        if (item.sender === iid) {
          // 卖出
          sender.push(item.id);
        } else if (
          item.sender === "iaa1thp0uyk72vu8uhxjmygxm0xphfs99jzcpkl23u"
        ) {
          // 空投
          recipient.push(item.id);
        } else if (item.recipient === iid) {
          // 买入
          recipient.push(item.id);
        }
      }
      sender = unique(sender);
      recipient = unique(recipient);
      all[key] = recipient.length - sender.length;
    }
  }
  let total = 0;
  for (const key in all) {
    if (Object.hasOwnProperty.call(all, key)) {
      const element = all[key];
      if (Number(element) > 0) {
        total += Number(element);
      }
    }
  }
  all.address = iid;
  all.total = total;
  fs.appendFile("排序数据.js", `${JSON.stringify(all)},`, () => {});
}

function unique(arr) {
  return Array.from(new Set(arr));
}
