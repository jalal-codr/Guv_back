const cloudinary = require('../Config/Cloudinary')
const Multer = require("multer");
const { create } = require('../Models/Blogs');
 
//upload
const uploadImage = async (req,res)=>{
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let imagePath = "data:" + req.file.mimetype + ";base64," + b64;
    
    const option = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    }
    cloudinary.uploader.upload(imagePath,option)
    .then((data)=>{
        res.send(data.public_id)
    })
    .catch((err)=>{
        console.log(err)
    })
}




const getUploadedImages =(req,res)=>{
    const public_id = req.body.public_id
    const img_uri = cloudinary.image(public_id,{
        width:300, height:300,crop:'fill'
    }) 
    res.json(img_uri)
}


module.exports={
    uploadImage,
    getUploadedImages
}