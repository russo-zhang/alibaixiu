const loginModel = require('../models/loginModel')
module.exports = {

  userLogin: (req, res) => {
    let data = req.body
    loginModel.userLogin(data, (err, result) => {
      if (err) {
        res.send({
          code: 1,
          description: "登录失败",
          msg: err.message
        })
      } else {
        if (result) {
          if (result.password == data.password) {
            res.send({
              code: 0,
              description: "登录成功",
              data: result
            })
          } else {
            res.send({
              code: 400,
              description: "密码错误",
            })
          }
        } else {
          res.send({
            code: 404,
            description: "用户名不存在",
          })
        }
      }


    })




  }





}