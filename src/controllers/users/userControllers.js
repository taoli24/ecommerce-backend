const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../models/user")
const Admin = require("../../models/admin")


const registerUser = async (user) => {
    const existUser = await User.findOne({username: user.username})

    if (existUser) {
        return {
            error: "username already exists."
        }
    }

    // hash password

    const hashedPassword = await bcrypt.hash(user.password, 10)

    const newUser = await User.create({
        name: user.name,
        username: user.username,
        password: hashedPassword
    })

    const payload = {
        id: newUser._id
    }

    const token = jwt.sign(payload, "secret")

    return token
}


const loginUser = async (user) => {
    // Check if user exists
    // If user exists, match the password
    // Create and return the token
    const existUser = await User.findOne({username: user.username})

    if (!existUser) {
        return {
            error: `(Username) ${user.username} does not exist in database.`
        }
    }

    const isMatch = bcrypt.compare(user.password, existUser.password)

    if (isMatch) {
        const payload = {
            id: existUser._id,
        }

        const token = jwt.sign(payload, "secret")

        return token
    }

    return {
        error: "Incorrect password."
    }
}


const loginAdmin = async (user) => {
    // Check if user exists
    // If user exists, match the password
    // Create and return the token
    const existAdmin = await Admin.findOne({username: user.username})

    if (!existAdmin) {
        return {
            error: `(Username) ${user.username} does not exist in database.`
        }
    }

    const isMatch = bcrypt.compare(user.password, existAdmin.password)

    if (isMatch) {
        const payload = {
            id: existAdmin._id,
            isAdmin: true
        }

        const token = jwt.sign(payload, "secret")

        return token
    }

    return {
        error: "Incorrect password."
    }
}

module.exports = {
    registerUser,
    loginUser,
    loginAdmin
}