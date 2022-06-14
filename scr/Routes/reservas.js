const express = require("express");
const router = express.Router();
const Reservas = require('../controladores/Contr_reservas');

router.get('/', async (req,res) => {
    let reservas = await new Reservas().getReservas();
    return res.render('test',{reservas});
});

router.get('/admin', async (req,res) => {
    let reservas = await new Reservas().getReservas();
    return res.render('admin',{reservas});
});

router.get('/reservas', async (req,res) => {
    let reservas = await new Reservas().getReservas();
    return res.render('reserva_usuario',{reservas});
});

module.exports = router;