const express = require('express');
const path = require('path');
const app = express();

const contacto = require('../servidor/contacto');

//settings

app.set('port', process.env.PORT || 3045);
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

const oContacto = new contacto({
    host: "localhost",
    user: "prueba",
    password: "prueba",
    database: "post"
});

app.get('/saveData', function (req, res, next) {
    oContacto.agregarPost('201613207', 'Hola', '13/01/2019', 'Hola', 'imagen.jpg', '123', '12');
});

app.get('/getData', function (req, res, next) {
    oContacto.obtenerPost();
});

module.exports = app;