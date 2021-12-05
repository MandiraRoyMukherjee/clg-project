
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "womanapp",
    connectionLimit: 10
})

module.exports=db;