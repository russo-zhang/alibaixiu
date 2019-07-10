const navMenusModel = require('../models/navMenusModel')

module.exports = {
  getNavMenus: (req, res) => {
    navMenusModel.getNavMenus((err, result) => {
      if (err) return res.send({
        code: 1,
        description: "查询数据失败",
        msg: err
      })
      res.send({
        code: 0,
        description: "查询数据成功",
        data: result
      })
    })
  },
  addNavMenus: (req, res) => {
    let params = req.body
    // console.log(params)
    navMenusModel.addNavMenus(params, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "添加数据失败",
        msg: err
      })
      res.send({
        code: 0,
        description: "添加数据成功",
        data: result
      })
    })
  },
  delNavMenus: (req, res) => {
    let params = req.query
    // console.log(params)
    navMenusModel.delNavMenus(params, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "删除数据失败",
        msg: err
      })
      res.send({
        code: 0,
        description: "删除数据成功",
        data: result
      })
    })
  }



}