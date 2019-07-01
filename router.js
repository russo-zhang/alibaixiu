

// 引入第三方模块
const express = require('express')

// 引入用户模块
const controller = require('./controllers/pagesController')

// 引入路由模块
const router = express.Router()

// 添加路由句柄, 匹配路径
router.get("/", (req, res) => {
  controller.getIndex(req, res)
})
  .get("/favicon.ico", (req, res) => {
    res.end("404")
  })

















// 向外暴露
module.exports = router