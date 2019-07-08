$(function () {

  // 分类的动态渲染
  $.ajax({
    type: "get",
    url: "/getAllCataList",
    dataType: "json",
    success: function (res) {
      $("tbody").html(template("categoriesTmp", res))
    }
  })

  // 添加分类
  $(".addBtn").on("click", function () {
    $.ajax({
      type: "post",
      url: "/addCategrory",
      data: $("form").serialize(),
      dataType: "json",
      success: function (res) {
        console.log(res)
      }
    })
  })













})