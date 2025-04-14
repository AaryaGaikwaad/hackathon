const express = require('express')
const cors = require('cors');

//user defined modules
const userRouter = require('./routes/user');
const categoriesRouter = require('./routes/categories');
const blogRouter = require('./routes/blog')

const app = express()

//add middlewares
app.use(cors())
app.use(express.json())

app.use('/user',userRouter)
app.use('/categories',categoriesRouter)

app.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
})