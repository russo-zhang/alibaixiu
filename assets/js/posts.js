$(function () {

  $.ajax({
    type: "get",
    url: "/getPosts",
    dataType: "json",
    success: function (res) {
      if (res.code == 0) {
        var htmlStr = template("postListTmp", res)
        $("tbody").html(htmlStr)
      }
    }
  })











})