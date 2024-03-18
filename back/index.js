const app = require("../back/src/server");

//  app.listen(3000,()=>{
//     console.log("Server is listening on port 3000")
//  })


const PORT = 3000;

app.listen(PORT, ()=>
    console.log(`Server is listening on ${PORT}`)
);


