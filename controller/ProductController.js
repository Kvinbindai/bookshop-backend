const createError = require('http-errors')
const Product = require('../models/ProductModel')

const addProduct = async (req,res) => {
    try{
        const product = req.body
        const newProduct = await Product.create(product)
        res.json({
            message : 'Add Product Complete',
            data : newProduct
        })
    }catch(err){
        throw err
    }
}
const getAllProduct = async (req,res) => {
    try{
        const allProduct = await Product.findAll({where:{
            status : 'active'
        }})    
        res.json({
            message: "All Product",
            data : allProduct
        })
    }catch(err){
        throw(err)
    }
}
const getOneProduct = async (req,res,next) => {
    const bookId = req.params.id
    // const userId = req.query.userId
    try{
        const product = await Product.findOne({where:{
            id : bookId
            // Ownerid : userId
        }})
        if(!product){
            return next(createError(404,'Cant Found Product'))
        }  
        res.json({
            message: "Found Product",
            data : product
        })
    }catch(err){
        throw(err)
    }
}

module.exports = {addProduct , getAllProduct , getOneProduct}