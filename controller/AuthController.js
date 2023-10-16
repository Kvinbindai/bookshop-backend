const bcrypt = require('bcrypt')
const User  = require('../models/UserModel')
const createError = require('http-errors')
const {genToken} = require('../middleware/token')

const loginUser = async (req,res,next)=>{
   try{
    const username = req.body.username
    const foundUser = await User.findOne({
        where : { username : username }
    })
    if(!foundUser){
        return next(createError(404,'User doesnt exits'))
    }
    // console.log(foundUser)
    const result = await bcrypt.compare(req.body.password,foundUser.password)
    if(!result){
        return next(createError(404,'User doesnt exits'))
    }
    const token  =  genToken(req.body.username)
    return res.json({
        message : 'Login Successfully',
        token : token,
    })
   }catch(err){
        throw err
   }
}

module.exports = { loginUser }