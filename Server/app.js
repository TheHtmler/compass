const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
    // const morgan = require('morgan')
const mongoose = require('mongoose')
const users = require('./routes/users')

// connect db
mongoose.connect('mongodb://Orton:orton1234@ds153314.mlab.com:53314/compass', {
        useNewUrlParser: true
    }).then(() => {
        console.log('db connected')
    })
    .catch(err => {
        console.log(err)
    })

const app = express()

// Middleware
// app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

// cross domain option
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS")
    res.header("Content-Type", "application/json;charset=tuf-8")

    // set request header type, add token
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild')
    next()
})

app.use('/api', users)

app.get('/', (req, res) => {
    res.json({
        success: true,
        msg: 'Welcome'
    })
})

// app.use(bodyParser.urlencoded({extended:true}))

const port = process.env.PORT || 5000

app.listen(port, () => { console.log('Server runnning on port: ' + port) })