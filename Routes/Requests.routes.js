const express = require('express')
const router = express.Router()
const {getRequests,createRequests} = require('../Controller/RequestsController')

router.put('/',getRequests)
router.post('/',createRequests)
// router.post('/',acceptRequest)
// router.post('/',declineRequest)

module.exports = router;