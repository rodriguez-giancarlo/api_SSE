const {Router}=require('express');
const router=Router();
const personaController= require('../controllers/personaController');

router.get('/',personaController.listar);
router.post('/save',personaController.guardar);
router.delete('/delete/:id',personaController.eliminar);
router.put('/update/:id',personaController.actualizar);
router.get('/edit/:id',personaController.edit);
router.get('/buscar/:email',personaController.buscar);
router.get('/buscarId/:googleId',personaController.buscarId);


module.exports=router;