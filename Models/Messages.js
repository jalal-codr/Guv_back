const mongoose = require('mongoose')

const messageShema = new mongoose.Schema({
    from:{type:String,required:true},
    to:{type:String,required:true},
    body:{type:String,required:true}
},{timestamps:true})

const Messages = mongoose.model('messages',messageShema) 

module.exports= Messages