const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    user_id: Number,
    description: String
})

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    stock: Number,
    reciews: [ReviewSchema]
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product