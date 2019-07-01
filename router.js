// 引入第三方模块
const express = require('express')

// 引入用户模块
const controller = require('./controllers/pagesController')

// 引入路由模块
const router = express.Router()

// 添加路由句柄, 匹配路径
router.get("/", (req, res) => {
  controller.getIndex(req, res)
})
  .get("/list", (req, res) => {
    controller.getList(req, res)
  })
  .get("/detail", (req, res) => {
    controller.getDetail(req, res)
  })
  .get("/admin", (req, res) => {
    controller.getAdmin(req, res)
  })
  .get("/admin/login", (req, res) => {
    controller.getAdminLogin(req, res)
  })
  .get("/admin/users", (req, res) => {
    controller.getAdminUsers(req, res)
  })
  .get("/admin/categories", (req, res) => {
    controller.getAdminCategories(req, res)
  })
  .get("/admin/comments", (req, res) => {
    controller.getAdminComments(req, res)
  })
  .get("/admin/nav-menus", (req, res) => {
    controller.getAdminNavMenus(req, res)
  })
  .get("/admin/password-reset", (req, res) => {
    controller.getAdminPasswordReset(req, res)
  })
  .get("/admin/post-add", (req, res) => {
    controller.getAdminPostAdd(req, res)
  })
  .get("/admin/posts", (req, res) => {
    controller.getAdminPosts(req, res)
  })
  .get("/admin/profile", (req, res) => {
    controller.getAdminProfile(req, res)
  })
  .get("/admin/settings", (req, res) => {
    controller.getAdminSettings(req, res)
  })
  .get("/admin/slides", (req, res) => {
    controller.getAdminSlides(req, res)
  })
  .get("/favicon.ico", (req, res) => {
    controller.ico(req, res)
  })

















// 向外暴露
module.exports = router