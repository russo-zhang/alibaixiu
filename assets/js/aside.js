$(function () {
  var href = location.href
  var pathName = tools.getRouterName(href)

  if (pathName == "posts" || pathName == "post-add" || pathName == "categories") {
    $("#menu-posts").addClass("in").attr({ "aria-expanded": "true" })
    $(".nav li").removeClass("active")
  } else if (pathName == "nav-menus" || pathName == "slides" || pathName == "settings") {
    $("#menu-settings").addClass("in").attr({ "aria-expanded": "true" })
    $(".nav li").removeClass("active")
  }


})