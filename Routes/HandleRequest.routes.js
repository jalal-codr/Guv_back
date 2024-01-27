const express = require('express')
const router = express.Router()
const {acceptRequest,declineRequest} = require("../Controller/HandelRequestController")
const {verifyToken} = require('../Middleware/firebaseAuth/Auth');

router.post('/',verifyToken,acceptRequest)
router.post('/',verifyToken,declineRequest)

module.exports=router