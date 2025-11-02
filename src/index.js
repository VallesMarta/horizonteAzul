// Librerías externas
const express = require('express');
const mongoose = require('mongoose');

// Enrutadores
const usuarios = require(__dirname + "/routes/usuarios");
const viajes = require(__dirname + "/routes/viajes");
const reservas = require(__dirname + "/routes/reservas");
const servicios = require(__dirname + "/routes/servicios");

// Conexión con la BD
mongoose.connect('mongodb://127.0.0.1:27017/horizonteAzul');


let app = express();

// Carga de middleware y enrutadores
app.use(express.json());
app.use('/usuarios', usuarios);
app.use('/viajes', viajes);
app.use('/reservas', reservas);
app.use('/servicios', servicios);



// Puesta en marcha del servidor
app.listen(8080);