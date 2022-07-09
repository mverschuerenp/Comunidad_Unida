const express = require("express");
const router = express.Router();
const Reservas = require('../controladores/Contr_reservas');

function horario(horario, nhoras) {
    var hora = parseInt(horario);
    var nhoras = parseInt(nhoras);
    switch (hora) {
        case 8: {
            if (nhoras == 1) {
                return "8:00 - 9:00";
            }
            else if (nhoras == 2) {
                return "8:00 - 10:00";
            }
            else if (nhoras == 3) {
                return "8:00 - 11:00";
            }
            break;
        }
        case 9: {
            if (nhoras == 1) {
                return "9:00 - 10:00";
            }
            else if (nhoras == 2) {
                return "9:00 - 11:00";
            }
            else if (nhoras == 3) {
                return "9:00 - 12:00";
            }
            break;
        }
        case 10: {
            if (nhoras == 1) {
                return "10:00 - 11:00";
            }
            else if (nhoras == 2) {
                return "10:00 - 12:00";
            }
            else if (nhoras == 3) {
                return "10:00 - 13:00";
            }
            break;
        }
        case 11: {
            if (nhoras == 1) {
                return "11:00 - 12:00";
            }
            else if (nhoras == 2) {
                return "11:00 - 13:00";
            }
            else if (nhoras == 3) {
                return "11:00 - 14:00";
            }
            break;
        }
        case 12: {
            if (nhoras == 1) {
                return "12:00 - 13:00";
            }
            else if (nhoras == 2) {
                return "12:00 - 14:00";
            }
            else if (nhoras == 3) {
                return "12:00 - 15:00";
            }
            break;
        }
        case 13: {
            if (nhoras == 1) {
                return "13:00 - 14:00";
            }
            else if (nhoras == 2) {
                return "13:00 - 15:00";
            }
            else if (nhoras == 3) {
                return "13:00 - 16:00";
            }
            break;
        }
        case 14: {
            if (nhoras == 1) {
                return "14:00 - 15:00";
            }
            else if (nhoras == 2) {
                return "14:00 - 16:00";
            }
            else if (nhoras == 3) {
                return "14:00 - 17:00";
            }
            break;
        }
        case 15: {
            if (nhoras == 1) {
                return "15:00 - 16:00";
            }
            else if (nhoras == 2) {
                return "15:00 - 17:00";
            }
            else if (nhoras == 3) {
                return "15:00 - 18:00";
            }
            break;
        }
        case 16: {
            if (nhoras == 1) {
                return "16:00 - 17:00";
            }
            else if (nhoras == 2) {
                return "16:00 - 18:00";
            }
            else if (nhoras == 3) {
                return "16:00 - 19:00";
            }
            break;
        }
        case 17: {
            if (nhoras == 1) {
                return "17:00 - 18:00";
            }
            else if (nhoras == 2) {
                return "17:00 - 19:00";
            }
            else if (nhoras == 3) {
                return "17:00 - 20:00";
            }
            break;
        }
        case 18: {
            if (nhoras == 1) {
                return "18:00 - 19:00";
            }
            else if (nhoras == 2) {
                return "18:00 - 20:00";
            }
            else if (nhoras == 3) {
                return "18:00 - 21:00";
            }
            break;
        }
        case 19: {
            if (nhoras == 1) {
                return "19:00 - 20:00";
            }
            else if (nhoras == 2) {
                return "19:00 - 21:00";
            }
            else if (nhoras == 3) {
                return "19:00 - 22:00";
            }
            break;
        }
        case 20: {
            if (nhoras == 1) {
                return "20:00 - 21:00";
            }
            else if (nhoras == 2) {
                return "20:00 - 22:00";
            }
            else if (nhoras == 3) {
                return "20:00 - 23:00";
            }
            break;
        }
        case 21: {
            if (nhoras == 1) {
                return "21:00 - 22:00";
            }
            else if (nhoras == 2) {
                return "21:00 - 23:00";
            }
            else if (nhoras == 3) {
                return "21:00 - 00:00";
            }
            break;
        }
        case 22: {
            if (nhoras == 1) {
                return "22:00 - 23:00";
            }
            else if (nhoras == 2) {
                return "22:00 - 00:00";
            }
            else if (nhoras == 3) {
                return "22:00 - 01:00";
            }
            break;
        }
    }
}


router.get('/', async (req, res) => {
    return res.render('test');
});

router.get('/admin', async (req, res) => {
    let reservas = await new Reservas().getReservas();
    return res.render('admin', { reservas });
});
router.get('/admin/quincho', async (req, res) => {
    let reservas = await new Reservas().getReservasQuincho();
    return res.render('quincho', { reservas });
});
router.get('/admin/gimnasio', async (req, res) => {
    let reservas = await new Reservas().getReservasGimnasio();
    return res.render('quincho', { reservas });
});
router.get('/admin/salaeventos', async (req, res) => {
    return res.render('salaeventos');
});
router.get('/admin/canchatenis', async (req, res) => {
    return res.render('canchatenis');
});
router.delete('/admin/:reservaRut/', async (req, res) => {
    let { reservaRut } = req.params;
    await new Reservas().deleteReserva(reservaRut);
    let reservas = await new Reservas().getReservas();
    return res.render('admin', { reservas });
});

router.get('/reservas', async (req, res) => {
    return res.render('reserva_usuario');
});
router.post('/reservas', async (req, res) => {
    var hora = horario(req.body.hora, req.body.nhoras);
    var reserva = { lugar: req.body.espacio, horas: hora, nombre: req.body.nombre, rut: req.body.rut, dia: req.body.dia };
    await new Reservas().postReservas(reserva, res);
    return res.render('reserva_usuario');
});

module.exports = router;