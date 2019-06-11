const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const contacto = require('../servidor/contacto');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//settings

app.set('port', process.env.PORT || 3067);
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

const oContacto = new contacto({
    host: "localhost",
    user: "prueba",
    password: "prueba",
    database: "post"
});

app.get('/getData', function (req, res) {
    oContacto.obtenerPost(function(result) {
        res.send(result);
    });
});

app.post('/saveData', function (req, res) {
    oContacto.agregarPost(req.body.idUser, req.body.Titulo, req.body.Fecha, req.body.Descripcion, req.body.imagenTitle, req.body.longitud, req.body.latitud);
    res.send("ok");
})

module.exports = app;