const express = require('express')
const router = express.Router()
const {acceptRequest,declineRequest} = require("../Controller/HandelRequestController")

router.post('/',acceptRequest)
router.post('/',declineRequest)

module.exports=router