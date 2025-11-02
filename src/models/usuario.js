const mongoose = require('mongoose');

let usuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        unique:true,
        require: true,
        minlength: 1,
        trim: true
    },
    nombre: {
        type: String,
        trim: true

    },    
    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // formato básico de email (ejemplo: algo@dominio.com)
        trim: true
    }
});
let Usuario = mongoose.model('usuarios', usuarioSchema)
module.exports = Usuario;