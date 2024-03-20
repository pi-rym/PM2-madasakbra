require("dotenv").config();

const { PORT } = process.env 

console.log(process.env);

const app = require("../back/src/server");



app.listen(PORT, ()=>
    console.log(`Server is listening on ${PORT}`)
);


