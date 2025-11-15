import mongoose  from "mongoose";

let viajeSchema = new mongoose.Schema({
    origen: {
        type: String,
        required: true,
        trim: true
    },
    destino: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },    
    servicios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'servicios'
    }]
});
let Viaje = mongoose.model('viajes', viajeSchema);

export default Viaje;