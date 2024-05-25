
var router=require('express').Router();

var alummnoController=require('../controller/AlumnoCotroller');

router.post('/', alummnoController.guardar);
router.get('/', alummnoController.listar);
router.get('/:nroDocumento', alummnoController.listar);

module.exports = router;
