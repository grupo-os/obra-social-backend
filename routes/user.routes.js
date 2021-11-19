const router =require('express').Router();


const{
    rutaPost,rutaLogin,rutaDelete,rutaGet, rutaPut
}=  require('../controllers/user.controllers')





//Ruta Login
router.post('/login/usuarios', rutaLogin)



//crear nuevo usuario
router.get('/usuarios/get-user',rutaGet)

//ruta agregar usuarios
router.post('/usuario/create-user',rutaPost)


//ruta editar usuario
router.put('/usuario/edit-user/:id',rutaPut)


//ruta eliminar usuarios
router.delete('/usuario/delete-user/:id',rutaDelete)




module.exports =router;