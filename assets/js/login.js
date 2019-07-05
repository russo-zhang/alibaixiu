$(function () {

  // 表单提交事件
  $("#loginForm").on("submit", function (event) {
    event.preventDefault()
    $.ajax({
      type: "post",
      url: "/userLogin",
      data: $(this).serialize(),
      dataType: "json",
      success: function (res) {
        if (res.code == 0) {
          location.href = "/admin"
        } else if (res.code == 400) {
          $(".passwordErr").show()
        } else {
          $(".usernameErr").show()
        }
      }
    })
  })

  // 邮箱与密码框聚焦隐藏提示
  $("#email").on("focus", function () {
    $(".usernameErr").hide()
  })
  $("#password").on("focus", function () {
    $(".passwordErr").hide()
  })










})