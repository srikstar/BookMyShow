const express = require('express')
const dotenv = require('dotenv')

const mongodb = require('./mongoDB.js')

dotenv.config()
const app = express()
mongodb.connection()
app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hello from Sever')
})

app.listen(9000, () => {
    console.log('Server: UP')
})