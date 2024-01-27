const express = require('express');
const router = express.Router();
const{deleteBlog} = require('../Controller/DeleteBlogController')
const {verifyToken} = require('../Middleware/firebaseAuth/Auth');

router.put('/',verifyToken,deleteBlog);

module.exports = router;