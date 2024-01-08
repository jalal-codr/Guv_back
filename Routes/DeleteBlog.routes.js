const express = require('express');
const router = express.Router();
const{deleteBlog} = require('../Controller/DeleteBlogController')

router.put('/',deleteBlog);

module.exports = router;