const mongoose = require('mongoose')

const friendsSchema = new mongoose.Schema({
    from:{type:String,required:true},
    fromImg:{type:String,required:true},
    to:{type:String,required:true},
    toImg:{type:String,required:true},
    room : {type:String,required:true}
},{timestamps:true})

const Friends = mongoose.model('friends',friendsSchema)

module.exports=Friends