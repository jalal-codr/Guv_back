const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    from:{type:String,required:true},
    fromImg:{type:String,required:true},
    to:{type:String,required:true},
    state:{type:String,required:true}
},{timestamps:true})

const Requests = mongoose.model('requests',requestSchema)

module.exports = Requests