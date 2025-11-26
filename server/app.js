const express = require('express')
const dotenv = require('dotenv')
const cookies = require('cookie-parser')
const cors = require('cors')

const mongodb = require('./mongodb.js')
const auth  = require('./routers/auth.router.js')

dotenv.config()
const app = express()
app.use(express.json())
mongodb.connection()
app.use(cookies())

app.use(cors({
    origin :'http://localhost:5173',
    credentials:true
}))

app.use('/api/auth', auth)



app.listen(9000, () =>{
    console.log('Server: UP')
})
