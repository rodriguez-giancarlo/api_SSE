const {Router}=require('express');
const router=Router();
const temaController= require('../controllers/temaController');

router.get('/:idCurso',temaController.listar);
router.post('/save',temaController.guardar);
router.delete('/delete/:id',temaController.eliminar);
router.put('/actualizar/:idTema',temaController.actualizar);


module.exports=router;