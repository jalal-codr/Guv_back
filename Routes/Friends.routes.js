const express = require('express')
const router = express.Router()
const {getFriends,getMyBlogs} = require('../Controller/GetFriendsController')

router.put('/',getFriends)
router.post('/',getMyBlogs)



module.exports =router