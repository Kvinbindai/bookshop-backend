const { Router } = require('express')
const { getAllUser , addUser , getOne , updateUser , deleteUser } = require('../controller/UserController')

const router = Router()

router.get('/', getAllUser)
router.get('/:id', getOne)
router.post('/', addUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router 