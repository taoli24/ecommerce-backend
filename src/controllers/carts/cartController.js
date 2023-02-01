const Cart = require("../../models/cart")



const carts = [
    {
        user_id: 1,
        products: [
            {
                product_id: 1,
                quantity: 2
            },
            {
                product_id: 2,
                quantity: 5
            },
        ]
    },
    {
        user_id: 2,
        products: [
            {
                product_id: 0,
                quantity: 4
            },
            {
                product_id: 1,
                quantity: 1
            },
        ]
    },
]

const getCarts = async () => await Cart.find()
const getCartById = async (id) => await Cart.findById(id)

// /carts/user/userId?getProductInfo=true, we will retrieve product information
const getCartByUserId = async (uid) => {
    const cart = await Cart.findOne({user_id: uid})
    return cart
}

const getCartByUserIdWithProductInfo = async (uid) => {
    const cart = await Cart.findOne({user_id: uid}).populate("products.product")
    return cart
}


module.exports = {
    getCarts,
    getCartById,
    getCartByUserId,
    getCartByUserIdWithProductInfo
}