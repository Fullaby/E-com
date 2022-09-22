const router = require('express').Router();
const userRouter= require('./user');
const cartRouter=require('./cart');
const productRouter= require('./product');
const transactionRouter= require('./transactions');

router.use('/user',userRouter)
router.use('/cart', cartRouter)
router.use('/product', productRouter)
router.use('/transaction', transactionRouter)


module.exports=router