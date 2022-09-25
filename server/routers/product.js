const router= require('express').Router();
const Controller= require('../controllers/product');
const { Authentication } = require('../middlewares/Authentication');

router.get('/', Controller.showAllProduct)
router.post('/',Authentication, Controller.createProduct)
router.put('/:id',Authentication, Controller.editProduct)
router.get('/:id', Controller.detailProduct)
router.delete('/:id',Authentication, Controller.deleteProduct)

module.exports= router