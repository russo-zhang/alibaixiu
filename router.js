// 引入官方模块
const fs = require('fs')
const path = require('path')

// 引入第三方模块
const express = require('express')

// 引入路由模块
const router = express.Router()

// 添加路由句柄, 匹配路径
router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "./views/index.html"), (err, data) => {
    if (err) return res.end(err.message)
    res.end(data)
  })
})
  .get("/favicon.ico", (req, res) => {
    res.end("404")
  })

















// 向外暴露
module.exports = router