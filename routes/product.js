const { Router } = require('express')
const {  addProduct , getAllProduct, getOneProduct  } = require('../controller/ProductController')

const router = Router()

router.get('/', getAllProduct)
router.get('/:id', getOneProduct)
router.post('/', addProduct)
// router.patch('/:id', updateUser)
// router.delete('/:id', deleteUser)

module.exports = router 