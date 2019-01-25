const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
const checkToken = require('../token/checkToken')

// login
router.post('/login', (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({ username }).then(user => {
        if (!user) {
            return res.status(404).json('user not exist')
        }
        // varify password
        if (password == user.password) {
            jwt.sign({ user }, 'tokenkey', { expiresIn: '1h' }, (err, token) => {
                if (err) {
                    throw err
                }
                user.user_id = '00000000'
                user.create_time = Date.now()
                user.token = 'Bearer ' + token
                res.json({
                    success: true,
                    data: user
                })
            })
        } else {
            res.status(404).json('password wrong!')
        }
    })

})

// add user
router.post('/users', checkToken, (req, res) => {
    // jwt.verify(req.token, 'tokenkey', (err, authData) => {

    // })
    console.log(req.nody)
    const user = new User(req.body)
    user.create_time = new Date()
    user.save().then(result => {
        if (result) {
            console.log(result)
            res.json({
                success: true,
                data: result
            })
        } else {
            res.json({
                msg: 'fail'
            })
        }
    })
})

// get user
router.get('/users', checkToken, (req, res) => {
    User.find().then(result => {
        if (result) {
            console.log(result)
            res.json({
                success: true,
                data: result
            })
        } else {
            res.json({
                msg: 'fail'
            })
        }
    })
})

module.exports = router