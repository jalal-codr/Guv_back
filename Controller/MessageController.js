const Messages = require('../Models/Messages')

const getMessages = (req,res)=>{
    Messages.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const newMessage = (req,res)=>{
    const  newdata = new Messages({
        from:req.body.from,
        to:req.body.to,
        body:req.body.body
    })
    newdata.save()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = {getMessages,newMessage}