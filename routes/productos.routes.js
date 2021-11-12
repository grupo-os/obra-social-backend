const router =require('express').Router();


const{
    rutaPostProducto,rutaVentaProducto,rutaSubirStock,rutaBajarStock,rutaGetProductos
}=  require('../controllers/productos.controllers')




//ver productos
router.get('/productos/todos', rutaGetProductos)


router.post('/productos/subir-producto', rutaPostProducto)




router.put('/productos/venta/:id',rutaVentaProducto)


router.put('/productos/subirUno/:id',rutaSubirStock)



router.put('/productos/bajarUno/:id',rutaBajarStock)






module.exports =router;