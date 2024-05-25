var router=require('express').Router();
var routerAlumno=require ('./alumno');

router.use('/alumno', routerAlumno);

module.exports =router;