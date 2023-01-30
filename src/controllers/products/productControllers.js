
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

const addProduct = (product) => {
    const newProduct = {
        ...product,
        id: 4
    }

    return newProduct
}


module.exports = {
    getProducts,
    getProductById,
    addProduct
}