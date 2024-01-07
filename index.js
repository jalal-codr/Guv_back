const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http  = require('http')
const app = express()
const bodyParser = require('body-parser')
const {Server} = require('socket.io')
require('dotenv').config()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({
    origin:'*'
}))
const server = http.createServer(app)
try{
    mongoose.connect(process.env.MONGO_DB_URL)
    console.log("DB connected")

}
catch(err){
    console.log(err)
}
//Route imports 
const blogsRoute = require('./Routes/Blogs.routes')
const  requestsRoute = require('./Routes/Requests.routes')
const HandelRequestRoute = require('./Routes/HandleRequest.routes')
const friendsRoutes = require('./Routes/Friends.routes')
const messageRoutes = require('./Routes/Messages.routes')
const ChatGptRoutes = require('./Routes/ChatGpt.routes')
const CloudinaryRoutes = require('./Routes/Cloudinary.routes')
const commentsRoutes =  require('./Routes/Comments.routes')




app.use('/get-blogs',blogsRoute)
app.use('/create-blog',blogsRoute)
app.use('/like_blog',blogsRoute)
app.use('/get-requests',requestsRoute)
app.use('/create-request',requestsRoute)
app.use('/accept-request',HandelRequestRoute)
app.use('/decline-request',HandelRequestRoute)
app.use('/get-friends',friendsRoutes)
app.use('/get-my-blogs',friendsRoutes)
app.use('/get-messages',messageRoutes)
app.use('/new-message',messageRoutes)
app.use('/chat_gpt',ChatGptRoutes)
app.use('/upload-image',CloudinaryRoutes)
app.use('/get-uploaded-image',CloudinaryRoutes)
app.use('/get-comments',commentsRoutes)
app.use('/new-comment',commentsRoutes)

app.get("/",(req,res)=>{
    res.send("Guv server running")
})



const io = new Server(server,{
    cors:{
        origin:'*'
    } 
})

io.on('connection',(socket)=>{
    console.log(socket.id)
    socket.on('newBlog',()=>{
        io.emit("GetBlogs")
    })
    socket.on('newRequest',()=>{
        io.emit("getChats")
    })
    socket.on('likes',()=>{
        io.emit("GetBlogs")
    })
    socket.on('newComment',()=>{
        io.emit("GetBlogs")
        io.emit("GetComments")
    })
    socket.on("Request",()=>{
        io.emit("GetNotifications")
    })
    socket.on("joinRoom",(data)=>{
        socket.join(data)
        console.log(`joined room ${data}`)
    })
    socket.on('newMessage',(data)=>{
       io.emit("getMessages",data);
    });
})



const port = 443
server.listen(port,()=>console.log(`server running on port ${port}`))

module.exports={
    io,
    app
}
