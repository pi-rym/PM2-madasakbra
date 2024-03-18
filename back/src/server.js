const express = require("express"); // importamos la bibblioteca 

 const router = require("./routes/index"); // Solicitamos

const app = express(); // creamos la funcion de express

app.use(router) // montamos el enrutados en la aplicacion principal de Express

module.exports = app;