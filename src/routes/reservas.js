const express = require('express');
let Reserva = require(__dirname + '/../models/reserva.js');
let router = express.Router();

// Servicio de listado
router.get('/', (req, res) => {
    Reserva.find().populate("usuario").populate({
            path: "viaje",
            populate: { path: "servicios" } // <-- esto es lo que añade los servicios del viaje
        }).then(resultado => {
        res.status(200)
            .send( {ok: true, resultado: resultado});
    }).catch (error => {
        res.status(500)
            .send( {ok: false, error: "Error obteniendo reservas"});
    });
});

// Servicio de listado por id
router.get('/:id', (req, res) => {
    Reserva.findById(req.params.id).then(resultado => {
        if(resultado)
            res.status(200)
            .send({ok: true, resultado: resultado});
        else
            res.status(400)
            .send({ok: false, error: "No se han encontrado reserva"});
    }).catch (error => {
        res.status(400)
        .send({ok: false, error: "Error buscando la reserva indicado"});
    });
});

// Servicio para insertar usuarios
router.post('/', (req, res) => {
    let nuevoReserva = new Reserva ({   
        usuario: req.body.usuario,
        viaje: req.body.viaje,
        fecha: req.body.fecha,
        estado: req.body.estado
    });

    nuevoReserva.save().then (resultado => {
        res.status(200)
        .send({ok: true, resultado: resultado});
    }).catch(err => {
        res.status(400)
        .send({ok:false, error:"Error añadiendo la reserva"});
    });
});

// Servicio para modificar usuarios
router.put('/:id', (req, res) => {
    Reserva.findByIdAndUpdate(req.params.id, {
        $set: {
            usuario: req.body.usuario,
            viaje: req.body.viaje,
            fecha: req.body.fecha,
            estado: req.body.estado
        }
    }, {new: true}).then(resultado => {
        if (resultado)
            res.status(200)
            .send({ok: true, resultado: resultado});
        else
            res.status(400)
            .send({ok: false, error: "No se ha encontrado la reserva"});

    }).catch(error => {
        res.status(400)
        .send({ok: false, error: "Error actualizando reserva"});
    });
});

// Servicio para borrar usuarios
router.delete('/:id', (req, res) => {
    Reserva.findByIdAndDelete(req.params.id)
    .then(resultado => {
        if (resultado)
            res.status(200)
            .send({ok: true, resultado: resultado});
        else
            res.status(400)
            .send({ok: false, error: "No se ha encontrado la reserva"});
    }).catch(error => {
        res.send({ok: false, error: "Error al eliminar la reserva"});
    });
});

module.exports = router;