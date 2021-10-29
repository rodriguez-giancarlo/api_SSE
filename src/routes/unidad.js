const {Router}=require('express');
const router=Router();
const unidadController= require('../controllers/unidadController');

router.get('/:idcurso',unidadController.listar);
router.get('/infoUnidad/:idUnidad',unidadController.infoUnidad);
router.post('/save',unidadController.guardar);
router.delete('/delete/:id',unidadController.eliminar);
router.put('/actualizar/:idCurso/:idUnidad',unidadController.actualizar);


module.exports=router;