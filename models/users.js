const {model, Schema}= require('mongoose');
const {} = require('./personas');
const UserShema = new Schema({
    idPersona:{type:Schema.Types.ObjectId,ref:'Personas'},
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    activo:{
        type: Boolean,
        default: true
    },
    role:{
        type: String,
        require:true

    },
    tipoRole:{
        type: String,
        require:true
    }
});

module.exports = model('Usuario', UserShema);