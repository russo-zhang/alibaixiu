const express = require('express')

const session = require('express-session')

let app = express()

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

app.listen("3006", () => {
  console.log("server is running at http://127.0.0.1:3006")
})


app.use("/", (req, res) => {

  if (req.session.isLogin && req.session.isLogin == "true") {
    res.end("wecome back")
  } else {
    req.session.isLogin = "true"
    req.session.obj = {
      name: "tom",
      age: 18,
      gender: "男"
    }
    res.end("first")
  }
})