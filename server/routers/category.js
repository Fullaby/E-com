const router= require('express').Router();
const Controller= require('../controllers/category');

router.get('/',Controller.showAllCategory)
router.post('/',Controller.createCategory)

module.exports= router