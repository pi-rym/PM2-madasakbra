const express = require("express"); // importamos la bibblioteca

const router = require("./routes/index"); // Solicitamos

const morgan = require("morgan"); //solicitamos morgan

const cors = require("cors");

const app = express(); // creamos la funcion de express

app.use(morgan("dev"));
app.use(express.json())
app.use(cors());
app.use(router); // montamos el enrutados en la aplicacion principal de Express

module.exports = app;
