const bcrypt = require('bcrypt')
const { User }= require('../models/UserModel.js')
const saltRound = 10

const getAllUser = async (req,res) => {
    const data = await User.findAll({
        where : { status : 'active' }
    })
    res.send({
        message : 'All User',
        list : data
    })
}

const addUser = async ( req ,res ) =>{
    try{
        let { username , password , email } = req.body
        
        const hashPassowrd = await bcrypt.hash(password,saltRound)
        
        const newUser = await User.create({
            username : username,
            password : hashPassowrd,
            email : email
        })
        
        res.json({
            message: 'Create User Complete',
            data : newUser
        })
    }catch(err){
        throw(err)
    }
}

const getOne = async (req ,res) => {
   try{
    let foundUser = await User.findOne({
        where : { id : req.params.id }
    })
    if(!foundUser){
        res.status(400)
        res.json({
            message : 'Its doesnt exists'
        })
    }
    res.json({
        mesaage : 'Found User',
        user : foundUser
    })
   }catch(err){
    throw err
   }
}

const updateUser = async (req,res) => {
    try{
        const foundUser = await User.findOne({
            where : { id : req.params.id }
        })
        if(!foundUser) {
            res.status(400)
            res.json({
            message : 'Its doesnt exists'
            })
        }
        const hashPassword = await bcrypt.hash(req.body.password,saltRound)
        const userUpdate = await User.update({
            username : req.body.username,
            password : hashPassword,
            email : req.body.email
        },{
            where : {id : req.params.id}
        })
        res.json({
            mesaage : 'Update Complete',
            data : userUpdate
        })
   }catch(err){
    throw err
   }
}

const deleteUser = async (req,res) =>{
    const inActiveUser = await User.update({
        status : 'inactive'
    },{
        where : { id : req.params.id }
    }) 
    res.json({
        mesaage : 'delete User complete'
    })
}
module.exports = { getAllUser  , addUser , getOne , updateUser , deleteUser }