const router = require('express').Router();

router.use('/user',userRouter)
router.use('/cart', cartRouter)
router.use('/product', productRouter)
router.use('/transactions', transactionRouter)


module.exports=router