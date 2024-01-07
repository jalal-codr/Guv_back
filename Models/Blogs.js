const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    email:{required:true,type:String},
    name:{type:String,required:true},
    photo:{type:String,required:true},
    body:{type:String,require:true},
    imgRef:{type:String,},
    likes:{type:Number,required:true},
    comments:{type:Number,required:true} 
    
},{timestamps:true})
const Blogs = mongoose.model('blogs',blogSchema)


module.exports = Blogs