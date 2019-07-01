// 引入官方模块
const fs = require('fs')
const path = require('path')

// 引入第三方模块
const express = require('express')


// 创建服务器
const app = express()

// 打开服务器
app.listen("3000", () => {
  console.log("server is running at http://127.0.0.1:3000")
})

// 引入静态资源托管
// app.use("/assets/css", express.static("css"))
app.use("/assets", express.static("assets"))
app.use("/uploads", express.static("uploads"))

app.use("/", (req, res) => {
  fs.readFile(path.join(__dirname, "./views/index.html"), (err, data) => {
    if (err) return res.end(err.message)
    res.end(data)
  })
})