const ctrlProductos = {};
const Productos = require('../models/productos');



ctrlProductos.rutaGetProductos = async(req,res)=>{

    const productos = await Productos.find()

    res.json(productos);
}


ctrlProductos.rutaPostProducto=async (req,res)=>{

    const {farmacia,nombre_producto,descripcion,img,precio,descuento, stock}= await req.body
    const producto = new Productos({farmacia,nombre_producto,descripcion,img,precio,descuento, stock})

    await producto.save();
    res.json({msg: 'Producto agregado'})

}

ctrlProductos.rutaBajarStock=async (req,res)=>{
    
    const {id} = req.params;
    const producto = await Productos.findByIdAndUpdate(id,{$inc:{stock:-1}});
    if (stock=0){
     await Productos.findByIdAndUpdate(id,{$inc:{estado:"inactivo"}})
     
     return res.status(200).json({msg:"No hay estock del producto"})
    }
    return res.status(201).json({
        msg: "Stock -1", producto
    })
    
}

ctrlProductos.rutaSubirStock=async (req,res)=>{
    
    const {id} = req.params;
    const producto = await Productos.findByIdAndUpdate(id,{$inc:{stock:1}});

    return res.status(201).json({
        msg: "Stock +1", producto
    })

}

ctrlProductos.rutaVentaProducto = async(req,res)=>{

    const {id}=req.params;
    const {ventaProducto}=req.body;
    const producto = await Productos.findByIdAndUpdate(id,{$inc:{"stock":-ventaProducto, contadorVendidos:+ventaProducto}});
    return res.status(201).json({
        venta:`${ventaProducto}`,
        totalVendidos: ` ${producto.contadorVendidos+ventaProducto}`,
        producto: producto.nombre_producto,
    })

}

module.exports = ctrlProductos;