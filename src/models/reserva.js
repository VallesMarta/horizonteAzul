const mongoose = require('mongoose');

let reservaSchema = new mongoose.Schema({
    usuario: { 
        type: mongoose.Schema.Types.ObjectId, ref: "usuarios", 
        required: true,
        trim: true
    },
    viaje: { 
        type: mongoose.Schema.Types.ObjectId, ref: "viajes", 
        required: true,
        trim: true
    },
    fecha: { 
        type: Date, 
        default: Date.now 
    },
    estado: { 
        type: String, 
        enum: ["pendiente", "confirmada", "cancelada"], 
        default: "pendiente" ,
        trim: true
    }
});
let Reserva = mongoose.model('reservas', reservaSchema)
module.exports = Reserva;