const Alumno = require('../model/Alumno');

class AlumnoController{

    async guardar(req, res){

        const body=req.body;
        console.log('cuepr='+ body.nroDocumento);

        const alumno=new Alumno(body.nroDocumento, body.Apellidos, body.Nombres, body.fechaNacimiento, body.Grado, body.Seccion);
        //const alumno=new Alumno('nroDocumento', 'Apellidos', 'Nombres', 'fechaNacimiento', 'Grado', 'Seccion');
        const guardarAlumno= await alumno.guardar();
        res.json(guardarAlumno);
         
    }

    async listar(req, res){
        res.json (await Alumno.listar());

    }
//29:51
}
module.exports=new AlumnoController;