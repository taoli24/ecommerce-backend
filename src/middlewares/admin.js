const admin = (request, response, next) => {
    try {
        if (!request.payload.isAdmin) {
            throw new Error("Unauthorized")
        }
        next()
    }
    catch (e) {
        console.log(e)
        return response.status(401).json({
            data: "Unauthenticated/not admin."
        })
    }
}


module.exports = admin