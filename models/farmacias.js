const {model, Schema}= require('mongoose');


const FarmaciaShema = new Schema({
    
    nombreFarmacia:{
        type: String,
        require:true
        },
    
    email:{
        type: String,
        require: true
    },
    CUIL:{
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
            
    }
});
module.exports = model('Farmacia', FarmaciaShema);