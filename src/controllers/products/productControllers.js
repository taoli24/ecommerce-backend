const Product = require("../../models/product");

const getProducts = async () => {
    const products = await Product.find();
    return products;
};

const getProductById = async (id) => {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (e) {
        console.log(e);
    }
};

const addProduct = async (product) => {
    try {
        const newProduct = await Product.create(product);
        return newProduct;
    } catch (e) {
        console.log(e);
    }
};

const deleteProduct = async (id) => {
    // deleteOne and deleteMany will not return any product
    const product = await Product.findByIdAndDelete(id);
    return product;
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
};
