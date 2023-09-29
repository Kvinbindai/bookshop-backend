const { Router } = require('express')
const { loginUser } = require('../controller/AuthController')

const router = Router()

router.post('/', loginUser )

module.exports = router