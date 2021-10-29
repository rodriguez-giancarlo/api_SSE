const {Router}=require('express');
const router=Router();
const recursoController= require('../controllers/recursoController');

router.get('/:idCurso',recursoController.listar);
router.post('/save',recursoController.guardar);
router.delete('/delete/:id',recursoController.eliminar);
router.put('/update/:id',recursoController.actualizar);
router.get('/edit/:id',recursoController.edit);


module.exports=router;