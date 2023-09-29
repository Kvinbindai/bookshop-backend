const { Router } = require('express')
const RouteUser = require('./user')

const router = Router()

router.use('/user',RouteUser)

module.exports = router
