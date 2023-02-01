const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    user_id: Number,
    description: String
})

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5
    },
    description: {
        type: String,
        validate: {
            validator: value => {
                // suppose string should not contain "hello" 
                return !value.includes("hello")
            },
            message: "Description can not contain word hello."
        }
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price shoud not be negative."]
    },
    stock: {
        type: Number,
        required: true,
        min: [0, "Stock should not be less than 0."]
    },
    reviews: [ReviewSchema]
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product