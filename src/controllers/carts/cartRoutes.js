const express = require("express")
const { getCarts, getCartById, getCartByUserId } = require("./cartController")

cartRouter = express.Router()

cartRouter.get("/", (request, response) => {
    const carts = getCarts()
    response.json(carts)
})

cartRouter.get("/:cartId", (request, response) => {
    const cart = getCartById(request.params.cartId)

    if (!cart) {
        response.status(404).json({
            msg: "Cart does not exist."
        })
    }

    response.json(cart)
})

cartRouter.get("/user/:uid", (request, response) => {
    const cart = getCartByUserId(request.params.uid)

    if (!cart) {
        response.status(404).json({
            msg: "Cart does not exist."
        })
    }

    response.json(cart)
})

module.exports = cartRouter