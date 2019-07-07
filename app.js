// 引入官方模块

// 引入第三方模块
const express = require('express')
const bodyParser = require('body-parser')

// 引入用户模块
const router = require('./router')

// 创建服务器
const app = express()

// bodyParser 处理post请求
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 打开服务器
app.listen("3000", () => {
  console.log("server is running at http://127.0.0.1:3000")
})

// 设置模板
app.set("view engine", "ejs")
app.set("views", "views")

// 引入静态资源托管
// app.use("/assets/css", express.static("css"))
app.use("/assets", express.static("assets"))
app.use("/uploads", express.static("uploads"))
app.use("/usersUploads", express.static("usersUploads"))

// 添加路由配置
app.use((req, res) => {

  router(req, res)

})