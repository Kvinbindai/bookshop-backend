const bcrypt = require('bcrypt')
const  User  = require('../models/UserModel.js')
const createError = require('http-errors')
const saltRound = 10

const getAllUser = async (req,res,next) => {
   try{
        const data = await User.findAll({
            where : { status : 'active' }
        })
        return res.json({
            message : 'All User',
            list : data
        })
   }catch(err){
        return next(err)
   }
}

const addUser = async ( req ,res , next ) =>{
    try{
        let { username , password , email } = req.body
        
        const hashPassowrd = await bcrypt.hash(password,saltRound)
        
        const newUser = await User.create({
            username : username,
            password : hashPassowrd,
            email : email
        })
        
        return res.json({
            message: 'Create User Complete',
            data : newUser
        })
    }catch(err){
        return next(err)
    }
}

const getOne = async (req ,res, next) => {
   try{
    let foundUser = await User.findOne({
        where : { id : req.params.id }
    })
    if(!foundUser){
        return next(createError(404,'its doesnt exits'))
    }
    res.json({
        mesaage : 'Found User',
        user : foundUser
    })
   }catch(err){
    throw err
   }
}

const updateUser = async (req,res,next) => {
    try{
        const foundUser = await User.findOne({
            where : { id : req.params.id }
        })
        if(!foundUser) {
           return next(createError(404,'user doesnt exits'))
        }
        const hashPassword = await bcrypt.hash(req.body.password,saltRound)
        const userUpdate = await User.update({
            username : req.body.username,
            password : hashPassword,
            email : req.body.email
        },{
            where : {id : req.params.id}
        })
        return res.json({
            mesaage : 'Update Complete',
            data : userUpdate
        })
   }catch(err){
        return next(err)
   }
}

const deleteUser = async (req,res) =>{
    const inActiveUser = await User.update({
        status : 'inactive'
    },{
        where : { id : req.params.id }
    }) 
    return res.json({
        mesaage : 'delete User complete'
    })
}
module.exports = { getAllUser  , addUser , getOne , updateUser , deleteUser }