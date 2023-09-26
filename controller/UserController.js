const {User }= require('../models/UserModel.js')


const getAllUser = async (req,res) => {
    const data = await User.findAll({})
    res.send({
        message : 'All User',
        list : data
    })
}

const addUser = async ( req ,res ) =>{
    const { username , password ,email } = req.body
    const user = {
        username,
        password,
        email
    }
    const newUser = await User.create(user) 
    res.send({
        mesaage : 'Add Complete',
        data : newUser
    })
}

module.exports = { getAllUser  , addUser }