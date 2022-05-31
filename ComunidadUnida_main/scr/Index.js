const express = require("express");
const cors = require("cors");
var parser = require('body-parser');
const app = express();
const reservasRoutes = require('./Routes/reservas.js');

app.set("view engine","ejs");
app.set("views",__dirname+"\134public");

app.use('/static',express.static(`${__dirname}/public`));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(reservasRoutes);

app.use(cors());

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});