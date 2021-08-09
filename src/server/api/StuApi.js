const models = require("../db");
const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const $sql = require("../sqlMap");
// 連接資料庫
const conn = mysql.createConnection(models.mysql);
conn.connect();
const jsonWrite = function(res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: "1",
      msg: "操作失敗",
    });
  } else {
    res.json(ret);
  }
};
// 介面：增加資訊
router.post("/addStu", (req, res) => {
  const sql = $sql.Stu.add;
  const params = req.body;
  console.log("添加", params);
  conn.query(
    sql,
    [params.stu_name, params.stu_sex, params.stu_college, params.stu_class],
    function(err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result);
      }
    }
  );
});

// 介面：查詢全部
router.get("/showStu", (req, res) => {
  const sql = $sql.Stu.show;
  const params = req.body;
  console.log(params);
  conn.query(
    sql,
    [
      params.name,
      params.hbd,
      params.phone,
      params.email
    ],
    function(err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result);
      }
    }
  );
});

// 介面：洗掉資訊
router.post("/delStu", (req, res) => {
  const sql = $sql.Stu.del;
  const params = req.body;
  console.log("洗掉", params);
  conn.query(sql, [params.stu_Id], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

// 介面：修改資訊
router.post("/updateStu", (req, res) => {
  const sql = $sql.Stu.update;
  const params = req.body;
  console.log("修改", params);
  conn.query(
    sql,
    [
      params.stu_name,
      params.stu_sex,
      params.stu_college,
      params.stu_class,
      params.stu_Id,
    ],
    function(err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        jsonWrite(res, result);
      }
    }
  );
});

module.exports = router;
