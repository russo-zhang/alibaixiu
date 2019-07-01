// 这是页面控制器模块

// 引入官方模块
const fs = require('fs')
const path = require('path')

module.exports = {
  getIndex: (req, res) => {

    res.render("../views/index.ejs")
  },
  getList: (req, res) => {
    res.render("../views/list.ejs")
  },
  getDetail: (req, res) => {
    res.render("../views/detail.ejs")
  },
  getAdmin: (req, res) => {
    res.render("../views/admin/index.ejs")
  },
  getAdminLogin: (req, res) => {
    res.render("../views/admin/login.ejs")
  },
  getAdminUsers: (req, res) => {
    res.render("../views/admin/users.ejs")
  },
  getAdminCategories: (req, res) => {
    res.render("../views/admin/categories.ejs")
  },
  getAdminComments: (req, res) => {
    res.render("../views/admin/comments.ejs")
  },
  getAdminNavMenus: (req, res) => {
    res.render("../views/admin/nav-menus.ejs")
  },
  getAdminPasswordReset: (req, res) => {
    res.render("../views/admin/password-reset.ejs")
  },
  getAdminPostAdd: (req, res) => {
    res.render("../views/admin/post-add.ejs")
  },
  getAdminPosts: (req, res) => {
    res.render("../views/admin/posts.ejs")
  },
  getAdminProfile: (req, res) => {
    res.render("../views/admin/profile.ejs")
  },
  getAdminSettings: (req, res) => {
    res.render("../views/admin/settings.ejs")
  },
  getAdminSlides: (req, res) => {
    res.render("../views/admin/slides.ejs")
  },
  ico: (req, res) => {
    res.send("404")
  }


}