const express = require('express')
const router = express.Router()

const {getComments,newComment} = require('../Controller/CommentsController')


router.put('/',getComments)
router.post('/',newComment)

module.exports = router