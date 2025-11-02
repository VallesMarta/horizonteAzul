const mongoose = require('mongoose');

let servicioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        unique: true
    } 
});

let Servicio = mongoose.model('servicios', servicioSchema)

module.exports = Servicio;