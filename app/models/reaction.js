const mongoose = require('mongoose')
const User = require('./user')
const {Schema} = mongoose

const reactionSchema = new mongoose.Schema(
    {
        reaction: {
            type: String,
            required: true
        }
    })

module.exports = reactionSchema