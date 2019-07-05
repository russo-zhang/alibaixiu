tools = {
  getRouterName: function (href) {
    var index = href.indexOf("?")
    if (index < 0) {
      var pathName = href.slice(href.lastIndexOf("/") + 1)
    } else {
      var pathName = href.slice(href.lastIndexOf("/") + 1, href.indexOf("?"))
    }
    return pathName
  }
}