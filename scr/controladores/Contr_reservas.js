const db = require("../config/bbdd");
//const Mail = require('../sendgrid');

class Reservas {
  //consultar reservas.
  async getReservas() {
    let results = await db.query('SELECT * FROM bookings').catch(console.log);
    return results.rows;
  }

}

module.exports = Reservas;
