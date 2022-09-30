const router= require('express').Router();
const Controller= require('../controllers/cart');
const { Authentication } = require('../middlewares/Authentication');

router.get('/',Authentication, Controller.showAllCart)
router.post('/',Authentication, Controller.createCart)

module.exports= router