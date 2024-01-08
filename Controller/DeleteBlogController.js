const Blogs = require('../Models/Blogs');

const deleteBlog = async(req,res)=>{
    try{
        const blogId = {
            id:req.body.blogId,
        }
        await Blogs.findByIdAndDelete(blogId.id)
        .then(()=>{
            res.send('Deleted');
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    deleteBlog,
}