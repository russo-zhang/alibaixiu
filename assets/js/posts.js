$(function () {
  var pagesize = 5  //单页显示数量
  var pagenum = 1   //当前页码



  // 点击筛选分类文章
  $(".selectBtn").on("click", function (event) {
    event.preventDefault()
    var query = {}
    if ($(".cateList").val() != "all") {
      query.cateListVal = $(".cateList").val()
    }
    if ($(".statusList").val() != "all") {
      query.statusListVal = $(".statusList").val()
    }

    render(query)
  })

  // 动态渲染文章内容
  function render(query) {
    $.ajax({
      type: "get",
      url: "/getPosts",
      data: {
        pagesize: pagesize,
        pagenum: pagenum,
        ...query
      },
      dataType: "json",
      success: function (res) {
        if (res.code == 0) {
          var htmlStr = template("postListTmp", res.data)
          $("tbody").html(htmlStr)

          var count = res.data.count[0].count
          var pageSum = Math.ceil(count / pagesize)
          setPage(pageSum)
        }
      }
    })
  }
  render()

  // 分页器动态渲染
  function setPage(pageSum) {
    $(".pagination").bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,

      // 显示第几页：会添加对应的样式
      currentPage: pagenum,

      // 总页数:当前数据表的记录总数 / 每页所显示的记录数
      totalPages: pageSum,

      //当单击页码按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function (event, originalEvent, type, page) {
        // 我们发现，这个page就是当前的合理页码值，我们只需要将全局的pagenum重置，并且重新获取数据就可以了
        pagenum = page
        render()
      }
    })
  }

  // 文章分类动态渲染
  $.ajax({
    type: "get",
    url: "/getAllCataList",
    dataType: "json",
    success: function (res) {
      if (res.code == 0) {
        var htmlStr = template("cateListTmp", res)
        $(".cateList").html(htmlStr)
      }
    }
  })

  // 删除文章
  $("tbody").on("click", ".delbtn", function (event) {
    if (confirm("确定要删除吗?")) {
      var id = $(this).data("id")
      event.preventDefault()
      $.ajax({
        type: "get",
        url: "/delPost",
        data: {
          id
        },
        success: function (res) {
          if (res.code == 0) {
            render()
          }
        }
      })
    }
  })
















})