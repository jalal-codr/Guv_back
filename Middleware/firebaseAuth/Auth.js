const admin = require('firebase-admin');
const credentials = require('../../Config/fireBase/credentials');

admin.initializeApp({
    credential:admin.credential.cert(JSON.parse(credentials)),
});

const verifyToken = async(req,res,next)=>{
    try{

        const bearerHeader = req.headers['authorization']
        if(bearerHeader){
            const bearer = bearerHeader.split(" ")[1]
            //verify token
            await admin.auth().verifyIdToken(bearer)
            next();
        }
        else{
            res.status(404).send({"error":"unauthorized access"})
        }
    }
    catch(err){
        res.status(404).send(err);
    }
}


module.exports = {
    verifyToken,
};