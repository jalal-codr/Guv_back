const Friends = require('../Models/Friends')
const Blogs = require('../Models/Blogs')


const getFriends = (req,res)=>{
    try{
        const email = req.body.email;
        Friends.find({from:email} || {to:email})
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }

}

const getMyBlogs  = async (req,res)=>{
    try{
        const email = req.body.email;
        await Blogs.find({email:email})
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports={
    getFriends,
    getMyBlogs,
}