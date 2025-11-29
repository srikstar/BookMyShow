const express = require('express')
const dotenv = require('dotenv')
const cookies = require('cookie-parser')
const cors = require('cors')

const mongodb = require('./mongodb.js')
const auth  = require('./routers/auth.router.js')
const movies = require('./routers/movies.router.js')
const theater = require('./routers/theater.route.js')

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
app.use('/explore', movies)
app.use('/theaters', theater)



app.listen(9000, () =>{
    console.log('Server: UP')
})
