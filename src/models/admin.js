const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    // name : {
    //     type: String,
    //     required: true,
    //     minLength: 5
    // },
    username: {
        type: String,
        required: true,
        minLength: 5
    },
    password: {
        type: String, 
        required: true,
        minLength: 6
    }
})

const Admin = mongoose.model("Admin", AdminSchema)

module.exports = Admin