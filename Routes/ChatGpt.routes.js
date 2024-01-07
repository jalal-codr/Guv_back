const express = require('express')
const router = express.Router()
const {getPrompt} = require('../Controller/ChatGptController')


router.post('/',getPrompt)


module.exports= router