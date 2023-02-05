const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minLength: 5
    },
    username: {
        type: String,
        required: true,
        minLength: 6
    },
    password: {
        type: String, 
        required: true,
        minLength: 6
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User