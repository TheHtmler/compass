const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
    // const createToken = require('../token/createToken')
    // const checkToken = require('../token/checkToken')

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

module.exports = router