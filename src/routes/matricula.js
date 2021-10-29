const {Router}=require('express');
const router=Router();
const matriculaController= require('../controllers/matriculaController');

router.get('/listar/:id',matriculaController.listar);
router.get('/buscar/:idpersona/:idcurso',matriculaController.buscar);
router.post('/save',matriculaController.guardar);
router.delete('/delete/:id',matriculaController.eliminar);
router.put('/update/:id',matriculaController.actualizar);
router.get('/edit/:id',matriculaController.edit);


module.exports=router;