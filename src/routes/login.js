const {Router}=require('express');
const router=Router();
const loginController= require('../controllers/loginController');

router.get('/',loginController.listar);
router.post('/save',loginController.guardar);
router.delete('/delete/:id',loginController.eliminar);
router.put('/update/:id',loginController.actualizar);
router.get('/edit/:id',loginController.edit);


module.exports=router;