const express = require('express')
const router = express.Router()
const {getBlogs,createBlog,likeBlog} = require('../Controller/BlogsController')

router.get('/',getBlogs)
router.post('/',createBlog)
router.put('/',likeBlog)

module.exports = router