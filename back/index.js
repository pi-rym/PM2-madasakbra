require("dotenv").config();

const { PORT } = process.env 


const app = require("../back/src/server");

const dbCon = require("./src/config/dbCon")




dbCon()
.then(()=>app.listen(PORT, ()=>
    console.log(`Server is listening on ${PORT}`))
    ).catch((err)=>console.log('Fallo en la conexión', err.message))
