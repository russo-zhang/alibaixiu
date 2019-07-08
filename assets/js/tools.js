tools = {
  getRouterName: function (href) {
    var index = href.indexOf("?")
    if (index < 0) {
      var pathName = href.slice(href.lastIndexOf("/") + 1)
    } else {
      var pathName = href.slice(href.lastIndexOf("/") + 1, href.indexOf("?"))
    }
    return pathName
  },
  strToobj: function (str) {
    var new_str = str.slice(1)
    var arr = new_str.split("&")
    var obj = {}
    arr.forEach(function (item, index) {
      var new_arr = item.split("=")

      obj[new_arr[0]] = new_arr[1]
    })
    return obj
  }
}