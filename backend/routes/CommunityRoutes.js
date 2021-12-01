const express = require('express')
const Community = require('../class/Community')
const router = express.Router()

router.get('/all',Community.getAllCommunity)
router.post('/byAdmin',Community.getAllCommunityByAdmin)
router.post('/one',Community.getOneCommunity)
router.post('/add',Community.addCommunity)
router.post('/delete',Community.deleteCommunity)
router.post('/edit',Community.editCommunity)

module.exports = router