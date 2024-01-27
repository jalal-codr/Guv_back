const express = require('express')
const router = express.Router()
const {getBlogs,createBlog,likeBlog} = require('../Controller/BlogsController')
const {verifyToken} = require('../Middleware/firebaseAuth/Auth');

router.get('/',verifyToken,getBlogs)
router.post('/',verifyToken,createBlog)
router.put('/',verifyToken,likeBlog)

module.exports = router