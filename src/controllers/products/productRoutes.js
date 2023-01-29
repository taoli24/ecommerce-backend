const express = require("express")
const { getProducts, getProductById, addProduct } = require("./productControllers")

const productRouter = express.Router()


productRouter.get("/", (requests, response) => {
    const products = getProducts()
    response.json(products)
})

productRouter.get("/:productId", (request, response) => {
    const product = getProductById(request.params.productId)
    if (!product) {
        response.status(404).json({
            msg: "Product dose not exist in databse."
        })

    }
    else{
        response.json(product)
    }
})

productRouter.post("/", (requests, response) => {
    const newProduct = {
        title: requests.body.title,
        description: requests.body.description,
        price: requests.body.price,
        stock: requests.body.stock
    }

    addProduct(newProduct)


    response.json(newProduct)
})




module.exports = productRouter