const express = require('express')
const Multer = require("multer");
const router = express.Router()
const {uploadImage,getUploadedImages} = require('../Controller/CloudinaryImageUpload');
const { verifyToken } = require('../Middleware/firebaseAuth/Auth');


const storage = new Multer.memoryStorage();
const upload = Multer({
    storage:storage,
  });


router.post('/',verifyToken,upload.single("image"),uploadImage)
router.get('/',verifyToken,getUploadedImages)

module.exports=router