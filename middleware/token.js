const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const privateKey = 'kavin'

const option = {
    expiresIn: '1h',
    algorithm: 'HS256'
}


const genToken =  (data) => {
    const token =  jwt.sign(
        {data},
        privateKey,
        option
    )
    return token
}

const verifyToken = (req,res,next) => {
    const author = req.headers.authorization
    const token = author.split(' ')[1]
    if(!token){
        return next(createError(401,'Access Token denied'))
    }
    jwt.verify(token,privateKey,(err,decoded)=>{
        if(err){
            return next(err)
        }
        req.user = decoded
        // console.log(req.user)
        next()
    })
}

module.exports = {
    genToken,
    verifyToken
}