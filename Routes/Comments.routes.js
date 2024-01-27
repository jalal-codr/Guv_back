const express = require('express')
const router = express.Router()
const {verifyToken} = require('../Middleware/firebaseAuth/Auth');

const {getComments,newComment} = require('../Controller/CommentsController')


router.put('/',verifyToken,getComments)
router.post('/',verifyToken,newComment)

module.exports = router