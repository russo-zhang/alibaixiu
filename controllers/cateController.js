const cateModel =require('../models/cateModel')

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
  }

}