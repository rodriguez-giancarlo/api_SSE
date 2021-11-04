const {Router}=require('express');
const router=Router();
const historialController= require('../controllers/historialController');

router.post('/save',historialController.guardar);
router.get('/:idRecurso',historialController.listar);
router.get('/buscar/:idRecurso/:idpersona',historialController.listarXpersona);
router.get('/matriculadosXcurso/:idpersona',historialController.listarAlumnosMatriculadosXCurso);


module.exports=router;