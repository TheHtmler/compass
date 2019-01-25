const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    user_id: {
        type: String
    },
    token: {
        type: String
    },
    create_time: {
        type: Date,
        required: true
    }
})

const User = mongoose.model('users', UserSchema)

module.exports = User