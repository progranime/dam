const mysql = require('mysql')
const config = require('../config/keys')

// Create connection to DB
const db = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.db,
    multipleStatements: true
})

// Initialize the connection to DB
db.connect(err => {
    // Check if have error
    if (err) console.log(err)

    console.log(`Connected to MySql ...`)
})

module.exports = db
