$(function () {

  // 初始化页面
  function render() {
    $.ajax({
      type: "get",
      url: "/getSettingData",
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 0) {
          $("form").html(template("settingTmp", res))
        }
      }
    })
  }

  render()

  // 更换图标事件
  $("form").on("change", "#logo", function () {
    var myflie = document.querySelector('#logo').files[0]

    var formdata = new FormData
    formdata.append("logo", myflie)
    formdata.append("name", "tom")


    $.ajax({
      type: "post",
      url: "/uploadLogo",
      data: formdata,
      contentType: false,
      processData: false,
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 0) {
          $("#site_logo").val("/usersUploads/" + res.data)
          $(".logo_img").attr("src", "/usersUploads/" + res.data)
        }
      }
    })



  })


  // 更新setting数据
  $("form").on("click", ".saveBtn", function (event) {
    event.preventDefault()
    var str = $("form").serialize()
    str = decodeURIComponent(str, true);

    var obj = tools.strToobj("?" + str)
    obj.comment_reviewed = obj.comment_reviewed ? "1" : "0"
    obj.comment_status = obj.comment_status ? "1" : "0"

    console.log(obj)
    $.ajax({
      type: "post",
      url: "/updateSetting",
      data: obj,
      dataType: "json",
      success: function (res) {
        if (res.code == 0) {
          alert("更新数据成功")
          render()
        }
      }
    })
  })


















})