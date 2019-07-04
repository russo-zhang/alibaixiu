const mysql = require('mysql')

let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "albx",
  dateStrings: true
})

module.exports = {
  getPosts: (params, callback) => {
    let pagesize = params.pagesize
    let pagenum = params.pagenum
    let sql = `select
    posts.title,posts.created,posts.status,users.nickname,categories.name
    from posts
    inner join users on posts.user_id=users.id
    inner join categories on posts.category_id =categories.id
    limit ${(pagenum - 1) * pagesize},${pagesize}
    `
    conn.query(sql, (err, data) => {
      if (err) return callback(err)
      let sql_count = "select count(*) as count from posts"
      conn.query(sql_count, (err, count) => {
        if (err) return callback(err)
        return callback(null, { data, count })
      })
    })
  }





}