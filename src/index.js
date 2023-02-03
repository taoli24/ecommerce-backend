const express = require("express")
const productRouter = require("./controllers/products/productRoutes")
const cartRouter = require("./controllers/carts/cartRoutes")
const userRouter = require("./controllers/users/userRoutes")
const mongoose = require("mongoose")



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
app.use("/users", userRouter)


app.listen(PORT, () => {
    console.log("Express server started.")
    mongoose.set("strictQuery", false)
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", () => {
        console.log("Database connected.")
    })
})