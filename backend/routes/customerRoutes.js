const express = require('express')
const customer = require('../class/customer')

const router = express.Router()

router.get('/', customer.getAll)
router.post('/add', customer.addCustomer)

module.exports = router