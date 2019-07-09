const cateModel = require('../models/cateModel')

module.exports = {
  getAllCateList: (req, res) => {
    // res.send("ok")
    cateModel.getAllCateList((err, result) => {
      if (err) return res.send({
        code: 1,
        description: "读取数据失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "读取数据成功",
        data: result
      })
    })
  },
  addCategrory: (req, res) => {
    let params = req.body
    cateModel.addCategrory(params, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "添加数据失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "添加数据成功",
        data: result
      })
    })
  },
  getCateById: (req, res) => {
    let id = req.query.id
    cateModel.getCateById(id, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "查询数据失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "查询数据成功",
        data: result
      })
    })
  },
  updateCateById: (req, res) => {
    let params = req.body
    cateModel.updateCateById(params, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "更新数据失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "更新数据成功",
        data: result
      })
    })
  },
  delCateById: (req, res) => {
    let id = req.query.id
    cateModel.delCateById(id, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "删除数据失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "删除数据成功",
        data: result
      })
    })
  },
  multipleDelCate: (req, res) => {

    let arr_id = req.query.arr_id
    cateModel.multipleDelCate(arr_id, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "删除数据失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "删除数据成功",
        data: result
      })
    })
  }

}