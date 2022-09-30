const{Category}= require('../models');
class Controller{
    
    static async showAllCategory(req,res,next){
        try {
            let data= await Category.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async createCategory(req,res,next){
        try {
            const {name}= req.body
            let data= await Category.create({name})
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

}

module.exports= Controller