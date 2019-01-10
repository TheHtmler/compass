const jwt = require('jsonwebtoken')

module.exports = (user_id) => {
    const token = jwt.sign({
        user_id: user_id
    }, 'tokenkey', {
        expiresIn: '1h'
    })
    return token
}