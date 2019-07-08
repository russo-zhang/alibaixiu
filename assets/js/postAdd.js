$(function () {

  // 文章分类动态渲染
  $.ajax({
    type: "get",
    url: "/getAllCataList",
    dataType: "json",
    success: function (res) {
      if (res.code == 0) {
        var htmlStr = ``
        var data = res.data
        data.forEach(function (item, index) {
          htmlStr += `<option value="${item.id}">${item.name}</option>`
        })
        $("#category").html(htmlStr)
      }
    }
  })

  // 文件上传
  $("#feature").on("change", function () {

    var myfile = document.querySelector('#feature').files[0]
    // console.log(myfile)
    var formdata = new FormData()

    formdata.append("img", myfile)

    $.ajax({
      type: "post",
      url: "/uploadFile",
      data: formdata,
      contentType: false,
      processData: false,
      dataType: "json",
      success: function (res) {
        if (res.code == 0) {
          $(".hide_input").attr("value", "/usersUploads/" + res.data)
          $(".usersImg").attr("src", "/usersUploads/" + res.data).show()
        }
      }
    })



  })

  // 初始化富文本框
  CKEDITOR.replace('content')

  // 文章提交
  $(".row").on("submit", function (event) {
    event.preventDefault()

    // 同步富文本框与textarea数据,并进行字符串拼接
    CKEDITOR.instances.content.updateElement()

    $.ajax({
      type: "post",
      url: "/publishPost",
      data: $(this).serialize(),
      dataType: "json",
      success: function (res) {
        if (res.code == 0) {
          alert("发布成功")
          location.href = "/admin/posts"
        }
      }
    })

  })


















})