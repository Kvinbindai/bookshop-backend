const { Router } = require('express')
const RouteUser = require('./user')
const RouteProduct = require('./product')

const router = Router()

router.use('/user',RouteUser)
router.use('/product',RouteProduct)

module.exports = router
