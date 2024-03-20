function movieMiddleware (req,res,next) {
    
    if(!title || !year || !director){
        throw new Error("Datos faltantes");
    }
    next()
}