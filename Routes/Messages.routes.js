const express = require('express')
const router = express.Router()
const {getMessages,newMessage} = require('../Controller/MessageController')
const { verifyToken } = require('../Middleware/firebaseAuth/Auth')

router.get('/',verifyToken,getMessages)
router.post('/',verifyToken,newMessage)


module.exports = router