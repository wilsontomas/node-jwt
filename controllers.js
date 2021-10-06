const jwt = require('jsonwebtoken');
require('dotenv').config();


const login = (req,res)=>{
    try {
        const token = jwt.sign({nombre:'Wilson'},process.env.MY_SECRET_KEY);
        res.json({token})
    } catch (error) {
        console.log(error)
    }
}

const ensureToken =(req,res,next)=>{
    try {
        const bearerHeader = req.headers['authorization'];

        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            req.token = bearer[1];
            next();
        }else{
            res.sendStatus(403)
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
}

const user = (req,res)=>{
    jwt.verify(req.token,process.env.MY_SECRET_KEY,(error,data)=>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                text:'Permitido',
                data
            });
        }
      
    })
}
module.exports.metodos = {
    login,
    ensureToken,
    user
}