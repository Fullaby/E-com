const {User}= require('../models');
const {comparePass}= require('../helpers/bcrypt');
const {createToken}= require('../helpers/jwt');
class Controller{
    static async login (req,res){
        try {
            const {username,password}= req.body
            let data= await User.findOne({where: {username}})
            let checkPass= comparePass(password, data.password)
            console.log(data);
            if(!checkPass)throw{code: 1}
            if(!username || !password)throw{code: 2}
            if(!data)throw{code:3}

            const payload= {
                id: data.id
            }
            let token = createToken(payload)
            res.status(200).json({
                message: 'login success',
                access_token: token
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async register (req,res){
        try {
            const {username,password}= req.body
            let data= await User.create({username,password,role: 'Customer'})
            res.status(201).json({
                message: 'Success register user',
                username: data.username
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async registerAdmin (req,res){
        try {
            const {username,password}= req.body
            let data= await User.create({username,password,role: 'Admin'})
            res.status(201).json({
                message: 'Success register admin',
                username: data.username
            })
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports= Controller