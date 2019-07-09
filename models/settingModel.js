const mysql = require('mysql')

let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "albx",
  dateStrings: true
})

module.exports = {

  getSettingData: (callback) => {
    let sql = "select * from options where id < 9"
    conn.query(sql, (err, result) => {
      if (err) return callback
      callback(null, result)
    })
  },
  updateSetting: (params, callback) => {
    // console.log(params)
    var num = 0
    for (let key in params) {

      let sql = "update options set value=? where `key`=?"
      conn.query(sql, [params[key], key], (err, result) => {
        // console.log(params[key])
        // console.log(key)

        if (err) return callback(err)
        num++
        // console.log(num)
        if (num == 6) {
          callback(null, result)
        }
      })
    }
  }
}