const Product = require("../../models/product")


const getProducts = async () => {
    const products = await Product.find()
    return products
}

const getProductById = async (id) => {
    try {

        const product = await Product.findById(id)
        return product
    }
    catch(e){
        console.log(e)
    }
}

const addProduct = async (product) => {
    const newProduct = await Product.create(product)

    return newProduct
}


module.exports = {
    getProducts,
    getProductById,
    addProduct
}