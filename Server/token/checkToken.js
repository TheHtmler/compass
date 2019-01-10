const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization']
    console.log(token)

    if (token) {
        let decoded = jwt.decode(token, 'tokenkey')
        console.log(decoded, 44444)
        if (token && decoded.exp <= new Date() / 1000) {
            return res.json({
                success: false,
                msg: 'token expired'
            })
        } else {
            return next()
        }
    } else {
        return res.status(403).send({
            success: false,
            msg: 'no valid token!'
        })
    }
}