const express = require('express')
const admin = require('../class/admin')

const router = express.Router()

router.post('/register', admin.insert)
router.post('/delete', admin.remove)
router.post('/login', admin.login)
router.post('/logout', admin.logout)

module.exports = router