const express = require("express")
const productRouter = require("./controllers/products/productRoutes")
const cartRouter = require("./controllers/carts/cartRoutes")



const PORT = 5500
const app = express()
app.use(express.json())



app.get("/", (request, response) => {
    response.json({
        data: "Data sent."
    })
})

app.get("/hello", (request, response) => {
    response.json({
        data: "Hello World."
    })
})

app.get("/admin", (request, response) => {
    response.json({
        data: "Hello Admin."
    })
})

app.use("/products", productRouter)
app.use("/carts", cartRouter)


app.listen(PORT, () => {
    console.log("Express server started.")
})