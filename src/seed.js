const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Admin = require("./models/admin")

mongoose.set('strictQuery', false)

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", async() => {
    // delete any data in the admin table
    await Admin.deleteMany({})
    const hashedPassword = await bcrypt.hash("password", 10)
    const admin = await Admin.create({
        username: "admin",
        password: hashedPassword
    })

    console.log(admin)

    mongoose.connection.close()
})