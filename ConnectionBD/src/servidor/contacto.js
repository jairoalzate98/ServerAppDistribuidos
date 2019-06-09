const mysql = require('mysql');
class Contacto {
    constructor(oConfig) {
        this.oConfig = oConfig;
    }

    // Recibe los parametros del post y los inserta a la base de datos

    agregarPost(idUser, titulo, fecha, descripcion, imagenTitle, longitud, latitud){
        var con = mysql.createConnection(this.oConfig);
        con.connect(function (error) {
           try{
               if (error){
                    console.log('Error a conectar a la BD' + error);
               } else {
                    console.log('Conexion exitosa');
                    con.query(`INSERT INTO posts (idUser, Titulo, Fecha, Descripcion, imagenTitle, longitud, latitud) values('${idUser}','${titulo}','${fecha}','${descripcion}','${imagenTitle}','${longitud}','${latitud}')`
                        ,function(error, res, campo){
                            if (error){
                                console.log('Error al insertar a la BD' + error);
                            }else{
                                console.log('Insercion exitosa');
                            }
                        });
               }
           }catch (x) {
               console.log("Contacto agregar post --Error-- " + x);
           }
        });
    }
}
module.exports = Contacto;