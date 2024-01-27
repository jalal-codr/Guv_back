const express = require('express')
const router = express.Router()
const {getFriends,getMyBlogs} = require('../Controller/GetFriendsController')
const {verifyToken} = require('../Middleware/firebaseAuth/Auth');

router.put('/',verifyToken,getFriends)
router.post('/',verifyToken,getMyBlogs)



module.exports =router