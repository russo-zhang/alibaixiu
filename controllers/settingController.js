const settingModel = require('../models/settingModel')
const formidable = require('formidable')

module.exports = {
  getSettingData: (req, res) => {

    settingModel.getSettingData((err, result) => {
      if (err) return res.send({
        code: 1,
        description: "数据获取失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "数据获取成功",
        data: result
      })
    })
  },
  updateSetting: (req, res) => {

    let params = req.body
    console.log(params)
    settingModel.updateSetting(params, (err, result) => {
      if (err) return res.send({
        code: 1,
        description: "数据更新失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "数据更新成功",
        data: result
      })
    })
  }



}