const { Op } = require('sequelize');
const {Product} =require('../models');
class Controller{

    static async showAllProduct(req,res,next){
        try {
            const {search,category}= req.query
            let where= {where:{
                name:{
                    [Op.iLike]: `%${search}%`
                }
            }}

            if(category){
                where.where.CategoryId= category
            }

        //console.log(search);
            let data = await Product.findAll(where)
            res.status(200).json(data)

        } catch (error) {
            console.log(error);
        }
    }

    static async createProduct(req,res,next){
        try {
            const {name,productImage,description,stock,price,UserId,CategoryId}= req.body
            let data= await Product.create({name,productImage,description,stock,price,UserId: req.user.id,CategoryId})
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async editProduct(req,res,next){
        try {
            const {id}= req.params
            const {name,productImage,description,stock,price,CategoryId}= req.body
            let data= await Product.update({name,productImage,description,stock,price,CategoryId},{where:{id:id}})
            res.status(200).json({
                message: `Edited Product with id ${id}`
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async detailProduct(req,res,next){
        try {
            const{id}= req.params
            let data= await Product.findOne({where:{id:id}})
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteProduct(req,res,next){
        try {
            const{id}= req.params
            await Product.destroy({where:{id:id}})
            res.status(200).json({
                message: `Deleted Product with id ${id}`
            })
        } catch (error) {
            console.log(error);
        }
    }

}


module.exports= Controller