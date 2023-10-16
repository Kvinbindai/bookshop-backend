const { Router } = require('express')
const RouteAuth = require('./auth')
const {verifyToken} = require('../middleware/token')
const RouteUser = require('./user')
const RouteProduct = require('./product')

const router = Router()

router.use('/login',RouteAuth)
router.use(verifyToken)
router.use('/user',RouteUser)
router.use('/product',RouteProduct)

module.exports = router
