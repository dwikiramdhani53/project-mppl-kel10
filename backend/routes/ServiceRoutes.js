const express = require('express')
const Services = require('../class/Services')
const router = express.Router()

router.get('/all',Services.getAllServices)
router.post('/one',Services.getOneServices)

module.exports = router