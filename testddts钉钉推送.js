var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

sendNews();

function sendNews(news) {
  request(
    {
      url: "https://oapi.dingtalk.com/robot/send?access_token=d728f7912c9fe66fe78679ed4ccd046a37c6273c30839fbb7b9b01f15dba832e", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: {
          title: "新交易提醒：",
          text: "内容"
        }
      })
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
      }
    }
  );
}
