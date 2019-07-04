tools = {
  getRouterName: function (href) {
    var index = href.indexOf("?")
    if (index < 0) {
      var pathName = href.slice(href.lastIndexOf("/") + 1)
    } else {
      var pathName = href.slice(href("/") + 1, href("?"))
    }
    return pathName
  }
}