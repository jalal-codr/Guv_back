const mongoose = require("mongoose");

const commentShema = new mongoose.Schema({
    blogId:{type:String,required:true},
    comment:{type:String,required:true},
    from:{type:String,required:true},
    userImg:{type:String,required:true}
},{timestamps:true});

const Comments =  mongoose.model("commennts",commentShema);

module.exports = Comments;