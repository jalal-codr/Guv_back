const express = require('express')
const router = express.Router()
const {getRequests,createRequests} = require('../Controller/RequestsController')
const { verifyToken } = require('../Middleware/firebaseAuth/Auth')

router.put('/',verifyToken,getRequests)
router.post('/',verifyToken,createRequests)
// router.post('/',acceptRequest)
// router.post('/',declineRequest)

module.exports = router;