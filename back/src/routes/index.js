const { Router } = require("express");

const router = Router(); 

const moviesRoute = require("./moviesRoute")

router.use('/movies',moviesRoute) 


module.exports = router; // exportamos para la utilizacion