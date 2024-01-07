const Blogs = require('../Models/Blogs')
const Likes = require('../Models/Likes')
 
const getBlogs = (req,res)=>{
        Blogs.find()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    
}
const createBlog =(req,res)=>{
    const newBlog = new Blogs({
        email:req.body.email,
        name:req.body.name,
        photo:req.body.photo,
        body:req.body.body,
        imgRef:req.body.imgRef,
        likes:0,
        comments:0,
    })
    newBlog.save()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
const  likeBlog  =  async(req,res)=>{
    try{

        const data = {
        blogId:req.body.blogId,
        email:req.body.email
        }
        const search = await Likes.find({blogId:data.blogId,email:data.email})
        if(search==""){
            const newBlog = await Blogs.findById(data.blogId)
            newBlog.likes +=1
            await newBlog.save()
            const newLike = new Likes(data)
            await newLike.save()
            .then(()=>{
                res.send("liked")
            })
            .catch((err)=>{
                console.log(err)
            })
            
        }
        else{
            const newBlog = await Blogs.findById(data.blogId)
            newBlog.likes -=1
            await newBlog.save()
            await Likes.findOneAndDelete(data)
            .then(()=>{
                res.send('unliked')
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    catch(err){
        console.log(err)
    }


}
module.exports= {getBlogs,createBlog,likeBlog}