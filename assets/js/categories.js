$(function () {

  // 分类的动态渲染
  function render() {
    $.ajax({
      type: "get",
      url: "/getAllCataList",
      dataType: "json",
      success: function (res) {
        $("tbody").html(template("categoriesTmp", res))
      }
    })
  }
  render()

  // 添加分类
  $(".addBtn").on("click", function (event) {
    event.preventDefault()
    $.ajax({
      type: "post",
      url: "/addCategrory",
      data: $("form").serialize(),
      dataType: "json",
      success: function (res) {
        if (res.code == 0) {
          alert("添加文章成功")
          $("#name").val("")
          $("#slug").val("")
          render()
        }
      }
    })
  })

  //  编辑分类之根据自定义属性查询数据--这是另一种做法
  // $("tbody").on("click", ".editBtn", function () {
  //   var id = $(this).data("id")
  //   var name = $(this).data().name
  //   var slug = $(this).data("slug")
  //   $("#name").val(name)
  //   $("#slug").val(slug)
  //   $(".title_h2").html("编辑新分类目录")
  //   $(".addBtn").hide()
  //   $(".updateBtn").show()
  // })


  // 编辑分类之根据id查询数据 
  $("tbody").on("click", ".editBtn", function () {
    var id = $(this).data("id")
    $.ajax({
      type: "get",
      url: "/getCateById",
      data: { id },
      dataType: "json",
      success: function (res) {
        if (res.code == 0) {
          $("#hidden_id").val(res.data[0].id)
          $("#name").val(res.data[0].name)
          $("#slug").val(res.data[0].slug)
          $(".title_h2").html("编辑新分类目录")
          $(".addBtn").hide()
          $(".updateBtn").show()
        }
      }
    })
  })

  // 编辑分类之根据id更新
  $(".updateBtn").on("click", function (event) {
    event.preventDefault()
    $.ajax({
      type: "post",
      url: "/updateCateById",
      data: $("form").serialize(),
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 0) {
          alert("更新成功")
          $("#hidden_id").val("")
          $("#name").val("")
          $("#slug").val("")
          render()
          $(".addBtn").show()
          $(".updateBtn").hide()
        }
      }
    })
  })


  // 根据id删除数据
  $("tbody").on("click", ".delBtn", function () {
    if (confirm("真的要删除吗?")) {
      var id = $(this).data("id")
      $.ajax({
        data: { id },
        url: "/delCateById",
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


  // 复选框
  var allPick = $("thead [type=checkbox]")
  var pick = $("tbody [type=checkbox]")
  allPick.on("click", function () {
    // 判断复选框选中数是否大于2,如果大于2,将显示批量删除按钮
    if (allPick.prop("checked")) {
      $("tbody [type=checkbox]").prop("checked", true)
    } else {
      $("tbody [type=checkbox]").prop("checked", false)
    }

    if ($("tbody [type=checkbox]:checked").length > 1) {
      $(".multipleDel").show()
    } else {
      $(".multipleDel").hide()
    }
  })


  $("tbody").on("click", pick, function () {

    // 判断复选框选中数是否大于2,如果大于2,将显示批量删除按钮
    if ($("tbody [type=checkbox]:checked").length > 1) {
      $(".multipleDel").show()
    } else {
      $(".multipleDel").hide()
    }


    // 判断复选框是否全部都选了,如果是全选框也会被选中,反之亦然
    if ($("tbody [type=checkbox]").length == $("tbody [type=checkbox]:checked").length) {
      allPick.prop("checked", true)
    } else {
      allPick.prop("checked", false)
    }

  })

  $(".multipleDel").on("click", function () {
    // if(confirm("真的要批量删除吗?"))
    var checkboxs = $("tbody [type=checkbox]:checked")
    var arr_id = []
    checkboxs.each(function (index, item) {
      arr_id.push(item.getAttribute("data-id"))
    })
    console.log(arr_id)
    $.ajax({
      type: "get",
      url: "/multipleDelCate",
      data: { arr_id },
      dataType: "json",
      success: function (res) {
        console.log(res)
        if (res.code == 0) {
          alert("批量删除成功")
          render()
        }
      }
    })
  })


















})