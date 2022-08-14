const fs = require("fs");
str = "address,,";
fs.appendFile("str.js", str, function (err) {
  if (err) {
    throw new Error("追加数据失败");
  } else {
    console.log("追加数据成功");
  }
});
