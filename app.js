// 引入官方模块
// const querystring = require('querystring')

// 引入第三方模块
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

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
// app.use("/css", express.static("css"))
app.use("/assets", express.static("assets"))
app.use("/uploads", express.static("uploads"))
app.use("/usersUploads", express.static("usersUploads"))


// //------cookie方式------
// app.use((req, res, next) => {
//   let cookie = querystring.parse(req.headers.cookie)

//   if ((cookie.isLogin && cookie.isLogin == "true") || req.url == "/admin/login" ||
//     req.url.indexOf("/admin") == -1) {
//     next()
//   } else {
//     res.redirect("/admin/login")
//   }
// })


//------session方式------
// 让app应用使用session的方式来进行状态保持
app.use(session({
  //name: 'hhw',
  // 对session加密：加盐，可以设置一个只有你自己知道的字符串
  //  md5加密
  secret: '加什么都没有所谓',
  //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
  resave: false,
  //强制“未初始化”的会话保存到存储。 
  saveUninitialized: false,
}))

// 使用路由中间件,每一个请求都会经过这里
app.use((req, res, next) => {

  if (req.session.isLogin && req.session.isLogin == "true" || req.url == "/admin/login" || req.url.indexOf("/admin") == -1) {

    // 使用这个方法,才能调用后面方法,如路由
    next()
  } else {
    res.redirect("/admin/login")
  }
})

app.use(router)