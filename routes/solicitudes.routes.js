const router =require('express').Router();

const{
    rutaGetAfiliado, rutaGetPrestador, rutaPostAfiliado, rutaPostPrestador ,rutaAceptarAfiliado, rutaAceptarPrestador,rutaRechazarAfiliado,rutaRechazarPrestador
}=  require('../controllers/solicitudes.controllers')

//crear nuevo usuario
router.get('/prestador/ver-solicitudes',rutaGetPrestador)



//ruta agregar usuarios

router.post('/prestador/enviar-solicitudes',rutaPostPrestador)




//Si usuario es aceptado
router.put('/prestador/solicitud-aceptada/:id',rutaAceptarPrestador)



//Si usuario es rechazado
router.put('/prestador/solicitud-rechazada/:id',rutaRechazarPrestador)





router.get('/afiliado/ver-solicitudes',rutaGetAfiliado)





//ruta agregar usuarios
router.post('/afiliado/enviar-solicitudes',rutaPostAfiliado)




//Si usuario es aceptado
router.put('/afiliado/solicitud/:id',rutaAceptarAfiliado)



//Si usuario es rechazado
router.put('/afiliado/solicitud-rechazada/:id',rutaRechazarAfiliado)





module.exports =router;