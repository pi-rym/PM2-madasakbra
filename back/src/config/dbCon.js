require("dotenv").config();
const mongoose = require("mongoose");

const{ URI } = process.env

const dbCon = async () => {
//realizar la conexion con la base de datos;
await mongoose.connect(`${URI}`)
};

module.exports = dbCon;