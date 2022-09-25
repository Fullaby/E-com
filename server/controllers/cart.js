const {Cart, User, Product}= require('../models');
class Controller{

    static async showAllCart(req,res,next){
        try {
            let data = await Cart.findAll({where: {UserId: req.user.id},include:[
                {model: User, attributes: {exclude: ['password']}}, {model: Product}
            ]})
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async createCart(req,res,next){
        try {
            const {ProductId}= req.body
            let data= await Cart.create({ProductId, UserId: req.user.id})
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

}


module.exports= Controller