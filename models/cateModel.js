const mysql = require('mysql')

let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "albx",
  dateStrings: true
})

module.exports = {
  getAllCateList: (callback) => {
    let sql = "select * from categories"
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      callback(null, result)
    })
  },
  addCategrory: (params, callback) => {
    let sql = "insert into categories set ?"
    conn.query(sql, params, (err, result) => {
      if (err) return callback(err)
      callback(null, result)
    })
  },
  getCateById: (id, callback) => {

    let sql = "select * from categories where id = ?"
    conn.query(sql, id, (err, result) => {
      if (err) return callback(err)
      callback(null, result)
    })
  },
  updateCateById: (params, callback) => {
    let sql = "update categories set ? where id =  ?"
    conn.query(sql, [params, params.id], (err, result) => {
      if (err) return callback(err)
      callback(null, result)
    })
  },
  delCateById: (id, callback) => {
    let sql = "delete from categories where id = " + id
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      callback(null, result)
    })
  }





}