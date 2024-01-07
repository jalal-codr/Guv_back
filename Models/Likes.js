const mongoose = require('mongoose')

const likesSchema = new mongoose.Schema({
    email:{type:String,required:true},
    blogId:{type:String,required:true}
},{timestamps:true})

const Likes = mongoose.model('likes',likesSchema)

module.exports = Likes;