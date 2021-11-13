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
    hola:{
        type: String,
        require:true
    },
    hola:{
        type: String,
        require:true
    },
    hola:{
        type: String,
        require:true
    },
    hola:{
        type: String,
        require:true
    },
    hola:{
        type: String,
        require:true
    },
    hola:{
        type: String,
        require:true
    },
    hola:{
        type: String,
        require:true
    }

    
});

module.exports = model('Prestador', PrestadorShema);