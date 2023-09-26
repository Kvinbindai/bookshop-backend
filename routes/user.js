const { Router } = require('express')
const { getAllUser , addUser } = require('../controller/UserController')

const router = Router()

router.get('/', getAllUser)
router.post('/', addUser)

module.exports = router 