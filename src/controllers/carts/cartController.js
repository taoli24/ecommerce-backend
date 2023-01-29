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

const getCarts = () => carts
const getCartById = (id) => carts[id]
const getCartByUserId = (uid) => {
    index = carts.findIndex(cart => cart.user_id === +uid)
    return carts[index]
}


module.exports = {
    getCarts,
    getCartById,
    getCartByUserId
}