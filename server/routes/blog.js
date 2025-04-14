const express = require('express')

const pool = require('../db/db')
const result = require('../utils/result')

const router = express.Router()

//add blog
router.post('/addblog',(req,res) => {
    const { id ,title ,contents ,created_time ,user_id ,category_id } = req.body

    const sql = `insert into blogs(id ,title ,contents ,created_time ,user_id ,category_id) values(?,?,?,?,?,?)`
    pool.query( sql, [id ,title ,contents ,created_time ,user_id ,category_id], (error, data) => {
        res.send(result.createResult(error, data))
      }
    )
})

//all blogs
router.get('/allblogs',(req,res) => {
    const sql = `select * from blogs`
    pool.query(sql, (error,data) => {
        res.send(result.createResult(error, data))
    })
})
//edit blog
//search blog
//my blogs

module.exports = router