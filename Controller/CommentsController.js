const Comments = require('../Models/Comments');
const Blogs = require('../Models/Blogs');

const newComment = async(req,res)=>{
    try{
        const data = {
            blogId:req.body.blogId,
            comment:req.body.comment,
            from:req.body.from,
            userImg:req.body.userImg
        }
        const newComment = new Comments(data)

        const response =  await newComment.save();
        if(response){
            const newBlog = await Blogs.findById(data.blogId)
            newBlog.comments +=1
            await newBlog.save()
            .then(()=>{
                res.send("new comment");
            })
            .catch((err)=>{
                console.log(err);
            })
            
        }
        
    }
    catch(err){
        console.log(err)
    }
}
const getComments =  async(req,res)=>{
    try{
        const blogId = req.body.blogId;
        const response = await Comments.find({blogId:blogId})
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    newComment,
    getComments
}