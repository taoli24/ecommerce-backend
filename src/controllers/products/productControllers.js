
const products = [
    {
        title: "Bag",
        description: "Bag for all occasions",
        price: 42,
        stock: 10
    },
    {
        title: "Ring",
        description: "Wedding ring",
        price: 4200,
        stock: 5
    },
    {
        title: "Wallet",
        description: "Wallet for all occasions",
        price: 420,
        stock: 15
    },
]


const getProducts = () => {
    return products
}

const getProductById = (id) => {
    return products[id]
}

const addProduct = (newProduct) => {
    products.push(newProduct)
}


module.exports = {
    getProducts,
    getProductById,
    addProduct
}