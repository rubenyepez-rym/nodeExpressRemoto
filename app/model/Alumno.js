const db = require('../src/db');

class Alumno {
    constructor(nroDocumento, Apellidos, Nombres, fechaNacimiento, Grado, Seccion) {
        this.nroDocumento =  nroDocumento;
        this.Apellidos = Apellidos;
        this.Nombres = Nombres;
        this.fechaNacimiento = fechaNacimiento;
        this.Grado = Grado;
        this.Seccion = Seccion;
console.log('doc='+nroDocumento)        ;
    }

    async guardar() {
        var query = "INSERT INTO Alumno" +
            "(nroDocumento," +
            "Apellidos," +
            "Nombres," +
            "fechaNacimiento," +
            "Grado," +
            "Seccion)" +
            " VALUES ( '" +
            this.nroDocumento + "','" +
            this.Apellidos + "','" +
            this.Nombres + "','" +
            this.fechaNacimiento + "','" +
            this.Grado + "','" +
            this.Seccion + "')";


        return await db.ejecutar(query);

    }

   static async listar(){
        const query='select * from Alumno';
        return await db.listar(query, true);

    }

}

module.exports = Alumno;
