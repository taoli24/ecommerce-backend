const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: [0, "Quantity should be greater than 0"],
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const CartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    products: [ProductSchema],
});

ProductSchema.virtual("product", {
    localField: "product_id",
    foreignField: "_id",
    ref: "Product",
    justOne: true
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
