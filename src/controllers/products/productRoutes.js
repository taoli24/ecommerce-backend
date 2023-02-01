const express = require("express")
const { getProducts, getProductById, addProduct } = require("./productControllers")

const productRouter = express.Router()


productRouter.get("/", async (requests, response) => {
    const products = await getProducts()
    response.json(products)
})

productRouter.get("/:productId", async (request, response) => {
    const product = await getProductById(request.params.productId)
    if (!product) {
        response.status(404).json({
            msg: "Product dose not exist in databse."
        })

    }
    else{
        response.json(product)
    }
})

productRouter.post("/", async (requests, response) => {
    const newProduct = await addProduct({
        title: requests.body.title,
        description: requests.body.description,
        price: requests.body.price,
        stock: requests.body.stock
    })

    response.json(newProduct)
})




module.exports = productRouter