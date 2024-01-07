const Requests = require('../Models/Requests')
const Friends = require('../Models/Friends')

const getRequests = (req,res)=>{
    const  email = req.body.email;
    Requests.find({to:email})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const createRequests = async(req,res)=>{

    const metaData ={
        from:req.body.from,
        fromImg:req.body.fromImg,
        to:req.body.to,
        state:'pending'
    }
     const serch1 = await Friends.find({from:metaData.from,to:metaData.to});
     const serch2 = await Friends.find({from:metaData.to,to:metaData.from});
     if(serch1=="" && serch2==""){
        const newRequest = new Requests(metaData)
        newRequest.save()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
     }
     else{
        res.send(`friends`)
     }


}

// const acceptRequest = (req,res)=>{
//     // const id = req.body.id 
//     // Requests.find()
//     // .then((data)=>{
//     //     res.send(data)
//     //     // newFriend= new Friends({
//     //     //     from:data.data.from,
//     //     //     to:data.data.to
//     //     // })
//     //     // newFriend.save()
//     //     // .then((data)=>{
//     //     //     res.send(data)
//     //     // })
//     //     // .catch((err)=>{
//     //     //     console.log(err)
//     //     // })
//     // })
//     // .catch((err)=>{
//     //     console.log(err)
//     // })
//     res.send('Hello')
// }

// const declineRequest =(req,res)=>{
//     const id = req.body.id
//     Requests.findByIdAndDelete({id:id})
//     .then((data)=>{
//         res.send(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

module.exports={getRequests,createRequests}