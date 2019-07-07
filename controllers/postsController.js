const postsModel = require('../models/postsModel')

module.exports = {
  getPosts: (req, res) => {
    let params = req.query
    postsModel.getPosts(params, (err, result) => {
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
  delPost: (req, res) => {
    let id = req.query.id
    postsModel.delPost(id, (err, result) => {
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
  publishPost: (req, res) => {
    let params = req.body
    params.user_id = 1
    console.log(params)
    postsModel.publishPost(params, (err, result) => {

      if (err) return res.send({
        code: 1,
        description: "发布失败",
        msg: err.message
      })
      res.send({
        code: 0,
        description: "发布成功",
        data: result
      })

    })

  }




}