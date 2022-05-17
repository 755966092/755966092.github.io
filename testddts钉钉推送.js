var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

sendNews();

function sendNews(news) {
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=febedf3f0da93b332c18b7b34926a82fd1bbb3474b5372417b2a1e83cf6ad180", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: {
          title: "提醒：",
          text: `## 测试名字 \n商品：测试商品 \n- 类型：测试类型 \n- 时间：测试时间 \n- 链接：[测试连接](https://www.ibox.art/zh-cn/)  \n- tokenId： 测试tokenid`
        }
      })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}
