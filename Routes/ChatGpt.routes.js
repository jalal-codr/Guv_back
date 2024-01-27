const express = require('express')
const router = express.Router()
const {getPrompt} = require('../Controller/ChatGptController')
const { verifyToken } = require('../Middleware/firebaseAuth/Auth')


router.post('/',verifyToken,getPrompt)


module.exports= router