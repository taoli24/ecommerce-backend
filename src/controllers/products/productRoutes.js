const express = require("express");
const {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
} = require("./productControllers");
const auth = require("../../middlewares/auth")

const productRouter = express.Router();

productRouter.get("/", async (requests, response) => {
    const products = await getProducts();
    response.json(products);
});

productRouter.get("/:productId", async (request, response) => {
    const product = await getProductById(request.params.productId);
    if (!product) {
        response.status(404).json({
            msg: "Product dose not exist in databse.",
        });
    } else {
        response.json(product);
    }
});

productRouter.post("/", auth, async (request, response) => {
    console.log(request.userId)
    const newProduct = await addProduct({
        title: request.body.title,
        description: request.body.description,
        price: request.body.price,
        stock: request.body.stock,
    });

    response.json(newProduct);
});

productRouter.delete("/:productId", async (request, response) => {
    const product = await deleteProduct(request.params.productId);

    if (!product) {
        response.json({
            msg: "Product does not exist in the database.",
        });
    }

    response.json(product);
});

module.exports = productRouter;
