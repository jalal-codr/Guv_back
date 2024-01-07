const { request } = require('express')
const Request = require('../Models/Requests')
const Friends = require('../Models/Friends')

const acceptRequest = (req,res)=>{
    const requestId = {
        id:req.body.id,
        toImg:req.body.toImg
    }
    Request.findByIdAndDelete(requestId.id)
    .then((data)=>{
        const  acceptedRequest = new Friends({
            from:data.from,
            fromImg:data.fromImg,
            to:data.to,
            toImg:requestId.toImg,
            room:requestId.id,
        })
        acceptedRequest.save()
        .then((reponse)=>{
            res.send(reponse)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
const declineRequest = (req,res)=>{
    const RequestId = req.body.id
    Request.findByIdAndDelete(RequestId)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    }) 
}

module.exports = {acceptRequest,declineRequest}