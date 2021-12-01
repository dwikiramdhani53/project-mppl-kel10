const express = require('express')
const Services = require('../class/Services')
const router = express.Router()

router.get('/All',Services.getAllServices)
router.post('/One',Services.getOneServices)

module.exports = router