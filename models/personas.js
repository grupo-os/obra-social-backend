const {model, Schema}= require('mongoose');


const PersonaShema = new Schema({
    
    nombre:{
        type: String,
        require:true
        },
    
    email:{
        type: String,
        require: true
    },
    dni:{
        type: String,
        require:true
        },
    celular:{
            type: String,
            require:true
        },
    direccion:{
        type: String,
        require:true
            
    },
    estado:{
        type:String,
        default: 'pendiente',
        require: true,
    }
});
module.exports = model('Personas', PersonaShema);
