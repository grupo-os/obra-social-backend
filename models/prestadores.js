const {model, Schema}= require('mongoose');

const PrestadorShema = new Schema({

    lugar_atencion:{

    },
    horario:{

    },
    profecion:{
        type: String,
        require:true
    },
    especialidad:{
        type: String,
        require:true
    },
    fecha_nacimiento:{
        type: String,
        require:true
    }
});

module.exports = model('Prestador', PrestadorShema);