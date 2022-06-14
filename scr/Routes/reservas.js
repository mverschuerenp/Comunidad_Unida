const express = require("express");
const router = express.Router();
const Reservas = require('../controladores/Contr_reservas');

router.get('/', async (req, res) => {
    let reservas = await new Reservas().getReservas();
    return res.render('pagina', { reservas });
});

router.get('/admin', async (req, res) => {
    let reservas = await new Reservas().getReservas();
    return res.render('pagina_admin', { reservas });
});


module.exports = router;