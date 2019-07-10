const mysql = require('mysql')
const querystring = require('querystring')

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "albx",
  dateStrings: true
})

module.exports = {
  getNavMenus: (callback) => {
    let sql = "select value from options where id = 9"
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      // console.log(result[0].value)
      result = JSON.parse(result[0].value)
      callback(null, result)
    })
  },
  addNavMenus: (params, callback) => {
    let sql = "select value from options where id = 9"
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      result = JSON.parse(result[0].value)

      result.push(params)

      let str = JSON.stringify(result)
      console.log(str)
      let sql = "update options set value = ? where id= 9"
      conn.query(sql, str, (err, result_2) => {
        if (err) return callback(err)

        callback(null, result_2)
      })

    })
  },
  delNavMenus: (params, callback) => {
    // console.log(params)
    let sql = "select value from options where id = 9"
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      let arr = JSON.parse(result[0].value)
      let new_arr = arr.filter(function (item, index) {
        if (item.title != params.title) {
          return true
        }
      })
      // console.log(new_arr)
      let new_str = JSON.stringify(new_arr)
      let sql = "update options set value = ? where id= 9"
      conn.query(sql, new_str, (err, result_2) => {
        if (err) return callback(err)

        callback(null, result_2)
      })

    })
  }



}


