const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'D6_89565_Aarya',
    password: 'manager',
    database: 'hackathon'
})

module.exports = pool