const express = require("express")
const { getCarts, getCartById, getCartByUserId, getCartByUserIdWithProductInfo } = require("./cartController")

cartRouter = express.Router()

cartRouter.get("/", async (request, response) => {
    const carts = await getCarts()
    response.json(carts)
})

cartRouter.get("/:cartId", async (request, response) => {
    const cart = await getCartById(request.params.cartId)

    if (!cart) {
        response.status(404).json({
            msg: "Cart does not exist."
        })
    }

    response.json(cart)
})

cartRouter.get("/user/:uid", async (request, response) => {
    let cart
    if (request.query.getProductInfo){
        cart = await getCartByUserIdWithProductInfo(request.params.uid)
    }
    else{
        cart = await getCartByUserId(request.params.uid)
    }

    if (!cart) {
        response.status(404).json({
            msg: "Cart does not exist."
        })
    }

    response.json(cart)
})

module.exports = cartRouter