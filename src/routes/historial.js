const {Router}=require('express');
const router=Router();
const historialController= require('../controllers/historialController');

router.post('/save',historialController.guardar);

module.exports=router;