const mysql = require('mysql')

let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "albx",
  dateStrings: true

})
module.exports = {
  userLogin: (data, callback) => {
    let sql = `select * from users where email = "${data.email}"`
    conn.query(sql, (err, result) => {

      if (err) return callback(err)

      callback(null, result[0])
    })
  }


}