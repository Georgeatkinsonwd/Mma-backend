const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = require('./config/db')
const homeRoutes = require('./routes/home')
const cors = require('cors')



connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routes
app.use('/',homeRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server running on Port ${process.env.PORT}`)
})