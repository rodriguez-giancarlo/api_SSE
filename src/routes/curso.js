const {Router}=require('express');
const router=Router();
const cursoController= require('../controllers/cursoController');

router.get('/:idpersona',cursoController.listar);
router.get('/listaAlumnos/:idcurso',cursoController.listarMatriculado);
router.get('/buscar/:clave',cursoController.buscar);
router.get('/infocurso/:idcurso',cursoController.infoCurso);
router.post('/save',cursoController.guardar);
router.delete('/delete/:id',cursoController.eliminar);
router.put('/update/:id',cursoController.actualizar);
router.get('/edit/:id',cursoController.edit);


module.exports=router;