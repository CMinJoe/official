const StuApi = require("./api/StuApi");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();


app.all("*", function(req, res, next) {
  //設定允許跨域的域名，*代表允許任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允許的header型別
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允許的請求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  //讓options嘗試請求快速結束
  else next();
});
app.use(bodyParser.json()); // 以json格式回傳出去
app.use(bodyParser.urlencoded({ extended: false }));
// 后端api路由

app.use("/api/Stu", StuApi);
// 監聽埠
app.listen(3000);
console.log("success listen at port:3000......");
