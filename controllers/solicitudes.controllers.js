const ctrlSolicitudes = {};
const SolicitudAfiliado = require('../models/solicitudAfiliado');
const SolicitudPrestador= require('../models/solicitudPrestador');
const Personas = require('../models/personas');
const Usuario = require('../models/users');
const {createPassword} = require('../helpers/generatepassword');


//RUTAS GET:
//get afiliados
ctrlSolicitudes.rutaGetAfiliado = async (req,res)=>{

    const soliAfiliado = await SolicitudAfiliado.find()

    res.json(soliAfiliado);
}
//get prestadores
ctrlSolicitudes.rutaGetPrestador = async (req,res)=>{

    const soliPrestador = await SolicitudPrestador.find()

    res.json(soliPrestador);
}

//RUTAS POST 
//agregar solicitud afiliados


ctrlSolicitudes.rutaPostAfiliado = async (req,res)=>{
     
    const {nombre,email,dni,celular,direccion} = req.body;

    const soliAfiliado = new SolicitudAfiliado({nombre,email,dni,celular,direccion})

    await soliAfiliado.save();
    res.json({msg: 'nueva Persona agregada'})
};

//agregar solicitud prestadores
ctrlSolicitudes.rutaPostPrestador = async (req,res)=>{
     
    const {nombre,email,dni,celular,direccion, profecion,especialidad} = req.body;

    const soliPrestador = new SolicitudPrestador({nombre,email,dni,celular,direccion, profecion,especialidad})

    await soliPrestador.save();
    res.json({msg: 'nueva Persona agregada'})
};

//RUTA PUT para editar LOS ESTADOS DE LAS SOLICITUDES

ctrlSolicitudes.rutaAceptarAfiliado= async (req,res)=>{

    const {id} = req.params;

    const solicitudAceptada = await SolicitudAfiliado.findByIdAndUpdate(id,{estado:'aceptado'});

    const {nombre, email, dni, celular, direccion}= solicitudAceptada
            //Si es aceptado se crea una persona con la informacion

            const persona = new Personas({nombre,email,dni,celular,direccion})
            await persona.save() 

            //se crea el usuario automaticamente

            const password = createPassword(); //funcion para crear password

            let user = new Usuario({email,password, role:'afiliado',tipoRole:'user'});
            
            await user.save() 
            

            return res.status(201).json({
                personaCreada:persona,
                usuario:user
            })

}



//ruta editar estado de la solicitud de Prestador

ctrlSolicitudes.rutaAceptarPrestador = async (req,res)=>{

    const {id} = req.params;

    const solicitudAceptada = await SolicitudPrestador.findByIdAndUpdate(id,{estado:'aceptado'});

    const {nombre, email, dni, celular, direccion,}= solicitudAceptada
            
            //Si es aceptado se crea una persona con la informacion
            const persona = new Personas({nombre,email,dni,celular,direccion})
            await persona.save() 

            //se crea el usuario automaticamente

            const password = createPassword(); //funcion para crear password
            
            //crea usuario automaticamente con el correo y la contrasena generada automaticamente
            let user = new Usuario({email,password, role:'prestador',tipoRole:'user'});
            
            await user.save()
            //crea prestador con los datos ingresados
            

            return res.status(201).json({
                personaCreada:persona,
                usuario:user
            })

}

//rechaza afiliado
ctrlSolicitudes.rutaRechazarAfiliado= async (req,res)=>{

    const {id} = req.params;

    const soliRechazada = await SolicitudAfiliado.findByIdAndUpdate(id,{estado:'rechazado'});

    
    return res.status(201).json({
        msg: "usuario rechazado", soliRechazada
    })
               
        
}

//rechaza prestador

ctrlSolicitudes.rutaRechazarPrestador= async (req,res)=>{

    const {id} = req.params;

    const soliRechazada = await SolicitudPrestador.findByIdAndUpdate(id,{estado:'rechazado'});

    
    return res.status(201).json({
        msg: "usuario rechazado", soliRechazada
    })
               
        
}

module.exports = ctrlSolicitudes;