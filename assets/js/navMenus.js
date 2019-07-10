$(function () {

  function render() {
    $.ajax({
      type: "get",
      url: "/getNavMenus",
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 0) {
          $("tbody").html(template("navMenesTmp", res))
        }
      }
    })
  }

  render()

  $(".addMenus").on("click", function () {

    $.ajax({
      type: "post",
      url: "/addNavMenus",
      data: $("form").serialize(),
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 0) {
          render()
        }
      }
    })



  })

  $("tbody").on("click", ".delMenus", function () {

    if (confirm("确定删除吗?")) {

      $.ajax({
        type: "get",
        url: "/delNavMenus",
        data: { title: $(this).data().title },
        dataType: "json",
        success: function (res) {
          console.log(res)
          if (res.code == 0) {
            render()
          }
        }
      })
    }





  })






})