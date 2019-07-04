const mysql = require('mysql')

let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "albx",
  dateStrings: true
})

module.exports = {
  getPosts: (callback) => {
    let sql = `select
    posts.title,posts.created,posts.status,users.nickname,categories.name
    from posts
    inner join users on posts.user_id=users.id
    inner join categories on posts.category_id =categories.id
    `
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      return callback(null, result)
    })


  }




}