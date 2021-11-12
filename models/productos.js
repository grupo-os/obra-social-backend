const {model, Schema}= require('mongoose');

const ProductosShema = new Schema({
    farmacia:{
        type: String,
        require:true
    },
    nombre_producto:{
        type: String,
        require:true
    },
    
    img:{
        type: String,
        require: false
    },
    descripcion:{
        type: String,
        require: true
    },

    precio:{
        type: Number,
        require:true
    },

    descuento:{
            type: Number,
            require:true
        },
    stock:{
        type: Number,
        require:true
    },
    contadorVendidos:{
        type:Number,
        default:0,
        require:true
    },
    ventaProducto:{
        type:Number,
        default:0,
        require:true
    },
    estado:{
        type:String,
        default: 'activo',
        require: true,
    },

    activo:{
        type:Boolean,
        default: true
    }
    
});

module.exports = model('Productos', ProductosShema);