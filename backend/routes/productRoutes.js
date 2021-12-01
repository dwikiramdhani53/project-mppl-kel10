const express = require('express')
const product = require('../class/produk')

const router = express.Router()

router.get('/all', product.getAllProduct)
router.post('/byAdmin', product.getAllProductByAdmin)
router.post('/one', product.getOneProduct)
router.post('/add', product.addProduct)
router.post('/edit', product.editProduct)
router.post('/delete', product.deleteProduct)

module.exports = router