const bcrypt = require('bcrypt')
const { User } = require('../models/UserModel')

const loginUser = async (req,res)=>{
    const username = req.body.username
    const foundUser = await User.findOne({
        where : { username : username }
    })
    if(!foundUser){
        res.json({
            message: 'Login Failed'
        })
    }
    console.log(foundUser)
    const result = await bcrypt.compare(req.body.password,foundUser.password)
    if(!result){
        res.json({
            message : "Wrong Password"
        })
    }
    res.json({
        message : 'Login Successfully',
        result : result
    })
}

module.exports = { loginUser }