const {Router}=require('express');
const router=Router();
const historialController= require('../controllers/historialController');

router.post('/save',historialController.guardar);
router.get('/:idRecurso',historialController.listar);
router.get('/matriculadosXcurso/:idpersona',historialController.listarAlumnosMatriculadosXCurso);


module.exports=router;