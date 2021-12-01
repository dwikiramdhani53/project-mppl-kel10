const express = require('express')
const orderDetail = require('../class/orderDetail')

const router = express.Router()

router.get('/', orderDetail.getAll)
router.post('/add', orderDetail.addOrderDetails)

module.exports = router