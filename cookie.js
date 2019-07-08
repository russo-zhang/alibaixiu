const express = require('express')

const querystring = require('querystring')

const app = express()

app.listen("3006", () => {
  console.log("server is running at 127.0.0.1:3006")
})

app.use("/", (req, res) => {
  // 通过req.headers 响应头取cookie
  // 取值时cookie是字符串,需要通过querystring模块转换成对象
  let cookie = querystring.parse(req.headers.cookie)

  if (cookie.islogin == "true") {   // 注意这里的true只是字符串
    res.end("wecome back")
  } else {
    // cookie通过响应头设置状态保持,只能设置一个键值对
    res.writeHead(200, {
      "Set-cookie": "islogin=true"
    })
    res.end("ok")
  }
})