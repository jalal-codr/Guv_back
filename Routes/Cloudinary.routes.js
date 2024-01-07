const express = require('express')
const Multer = require("multer");
const router = express.Router()
const {uploadImage,getUploadedImages} = require('../Controller/CloudinaryImageUpload')


const storage = new Multer.memoryStorage();
const upload = Multer({
    storage:storage,
  });


router.post('/',upload.single("image"),uploadImage)
router.get('/',getUploadedImages)

module.exports=router