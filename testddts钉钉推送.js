var request = require("request");
const lodash = require("lodash");
const moment = require("moment");

sendNews();

function sendNews(news) {
  request(
    {
      url: "钉钉群地址", //请求路径
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        msgtype: "markdown",
        markdown: {
          title: "提醒：",
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
