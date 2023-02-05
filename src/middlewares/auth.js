const jwt = require("jsonwebtoken")


const auth = (request, response, next) => {
    // Get the token from the authorisation header
    // Check if token exist
    // verify token using the secret key
    // put the payload (id) for other functions to use

    const token = request.get("authorization")?.split(" ")?.[1] // token format "Bearer token" // optional chaining

    if (!token) {
        return response.status(401).json({
            data: "Unauthenticated."
        })
    }

    try {
        const payload = jwt.verify(token, "secret")
        request.payload = payload
        next()
    }
    catch (e) {
        console.log(e)
        return response.status(401).json({
            data: "Unauthenticated."
        })
    }
}


module.exports = auth