const { verifyToken } = require("../helpers/jwt")
const{User}= require('../models');

const Authentication= async (req,res,next)=>{
    try {
        const {access_token}=req.headers
        let data= verifyToken(access_token)
        let user= await User.findByPk(data.id)
        
        if(!user)throw{code:4}

        req.user={
            id:user.id,
            role: user.role
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports= {Authentication}