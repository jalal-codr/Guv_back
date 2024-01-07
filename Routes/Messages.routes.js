const express = require('express')
const router = express.Router()
const {getMessages,newMessage} = require('../Controller/MessageController')

router.get('/',getMessages)
router.post('/',newMessage)


module.exports = router