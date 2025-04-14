const express = require('express')

const pool = require('../db/db')
const result = require('../utils/result')
//const config = require('../utils/config')

const router = express.Router()

router.post('/addcategory',(req,res) => {
    const { id ,title ,description } = req.body
    const sql = `insert into categories(id ,title ,description) values(?,?,?)`
    pool.query(sql, [id ,title ,description], (error,data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/',(req,res) => {
    const sql = `select * from categories`
    pool.query(sql, (error,data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router