const mysql = require('mysql');
const axios = require('axios');

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

    // Retorna todos los post de la base de datos

    obtenerPost(){
        var con = mysql.createConnection(this.oConfig);
        con.connect(function (error) {
           try{
               if (error){
                   console.log('Error al insertar a la BD' + error);
               } else{
                   con.query(`SELECT * FROM posts`, function (error, res, campo) {
                      if (error){
                            console.log("Error al obtener datos de la bd");
                      } else {
                            console.log("Obtencion de datos exitosa");
                      }
                      axios.post('http://localhost:400/sendInfo', res
                          .then(response => {
                              console.log('Envio de informacion correcto');
                          })
                          .catch(error => {
                              console.log('Error al envio de datos');
                          })
                      );
                   });
               }
           } catch (x) {
               console.log("Contacto agregar post --Error-- " + x);
           }
        });
    }
}
module.exports = Contacto;