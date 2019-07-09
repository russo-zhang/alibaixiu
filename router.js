// 引入第三方模块
const express = require('express')

// 引入用户模块
const controller = require('./controllers/pagesController')
const postsController = require('./controllers/postsController')
const cateController = require('./controllers/cateController')
const loginController = require('./controllers/loginController')
const uploadController = require('./controllers/uploadController')
const settingController = require('./controllers/settingController')

// 引入路由模块
const router = express.Router()

// 添加路由句柄, 匹配路径
router.get("/", controller.getIndex)
  .get("/list", controller.getList)
  .get("/detail", controller.getDetail)
  .get("/admin", controller.getAdmin)
  .get("/admin/login", controller.getAdminLogin)
  .get("/admin/users", controller.getAdminUsers)
  .get("/admin/categories", controller.getAdminCategories)
  .get("/admin/comments", controller.getAdminComments)
  .get("/admin/nav-menus", controller.getAdminNavMenus)
  .get("/admin/password-reset", controller.getAdminPasswordReset)
  .get("/admin/post-add", controller.getAdminPostAdd)
  .get("/admin/posts", controller.getAdminPosts)
  .get("/admin/profile", controller.getAdminProfile)
  .get("/admin/settings", controller.getAdminSettings)
  .get("/admin/slides", controller.getAdminSlides)
  .get("/favicon.ico", controller.ico)
  .get("/getPosts", postsController.getPosts)
  .get("/getAllCataList", cateController.getAllCateList)
  .post("/addCategrory", cateController.addCategrory)
  .get("/getCateById", cateController.getCateById)
  .post("/updateCateById", cateController.updateCateById)
  .get("/delCateById", cateController.delCateById)
  .get("/multipleDelCate", cateController.multipleDelCate)
  .get("/delPost", postsController.delPost)
  .post("/userLogin", loginController.userLogin)
  .post("/publishPost", postsController.publishPost)
  .get("/getPostById", postsController.getPostById)
  .post("/updatePost", postsController.updatePost)

  .get("/getSettingData", settingController.getSettingData)
  .post("/updateSetting", settingController.updateSetting)

  .post("/uploadFile", uploadController.uploadFile)
  .post("/uploadLogo", uploadController.uploadLogo)

















// 向外暴露
module.exports = router