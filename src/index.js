// Librerías externas
import express from "express";
import mongoose from "mongoose";

// Enrutadores
import usuarios from "./routes/usuarios.js";
import viajes from "./routes/viajes.js";
import reservas from "./routes/reservas.js";
import servicios from "./routes/servicios.js";

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