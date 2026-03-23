const jwt = require("jsonwebtoken")
const tokenBlackListModel = require("../models/blacklist.model")

// authUser checks if the user is authenticated or not
async function authUser(req, res, next){
    const token = req.cookies.token
    // if token not found directly return no need to check further 
    if(!token){
        return res.status(401).json({
            message: "Token not provided."
        })
    }

    const isTokenBlackListed = await tokenBlackListModel.findOne({
        token
    })

    if(isTokenBlackListed){
        return res.status(401).json({
            message: "Token not provided"
        })
    }

    try{
        // verify the token provided by the user if verified then call pass to next 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded 
        next()

    } catch(err){
        // if token is not verified return message invalid token
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
}

module.exports = { authUser}