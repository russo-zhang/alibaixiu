// 这是页面控制器模块

// 引入官方模块
const fs = require('fs')
const path = require('path')

module.exports = {
  getIndex: (req, res) => {
    fs.readFile(path.join(__dirname, "../views/index.html"), (err, data) => {
      if (err) return res.end(err.message)
      res.end(data)
    })
  }


}