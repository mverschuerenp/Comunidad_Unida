const db = require("../config/bbdd");
//const Mail = require('../sendgrid');

class Reservas {
  //consultar reservas.
  async getReservas() {
    let results = await db.query('SELECT * FROM bookings').catch(console.log);
    return results.rows;
  }
  async getReservasQuincho() {
    let results = await db.query(`SELECT * FROM bookings WHERE place='Quincho'`).catch(console.log);
    return results.rows;
  }
  // async getReservasSalaeventos() {
  //   let results = await db.query('SELECT * FROM bookings where place = "Sala de eventos"').catch(console.log);
  //   return results.rows;
  // }
  // async getReservasTenis() {
  //   let results = await db.query('SELECT * FROM bookings where place = "Cancha de Tenis"').catch(console.log);
  //   return results.rows;
  // }
  // async getReservasGimnasio() {
  //   let results = await db.query('SELECT * FROM bookings where place = "Gimnasio"').catch(console.log);
  //   return results.rows;
  // }

  async postReservas(reserva) {
    await db
      .query("INSERT INTO bookings (place, rank_of_time, name, rut, day) VALUES ($1, $2, $3, $4, $5)", [reserva.lugar, reserva.horas, reserva.nombre, reserva.rut, reserva.dia])
      .catch(console.log);
    return;
  }
  async deleteReserva(reservasRut, reservaLugar) {
    await db.query(`DELETE FROM bookings WHERE rut=$1 AND place=$2 `, [reservasRut, reservaLugar]).catch(console.log);
    return;
  }
}

module.exports = Reservas;
