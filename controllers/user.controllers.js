const ctrlUsuarios = {};

const Usuario = require('../models/users');
const bcryptjs = require('bcryptjs');
const {generate_jwt}= require('../helpers/generate_jwt')
//ruta mostrar usuarios 


ctrlUsuarios.rutaLogin = async (req,res)=>{

    const {email, password}= req.body;
    const user =Usuario.findOne({email, password, role:'admin'})
    

    if(!user){
        return res.status(401).json({
            mensaje:"No existe:",
            email: email
        })
    }
    if(!user.activo){
        return res.status(401).json({
            mensaje:"No existe:",
            email: email
        })
    }
    if(!user.role){
        return res.status(401).json({
            mensaje:"No tiene permisos",
            email: email
        })
    }

    //verificar contrasenia

    const passwordTrue = bcryptjs.compareSync(password,user.password)

    if(!passwordTrue){
        return res.status(401).json({msg:'contrasena invalida'})
    }

    //generar Token
    const token = await generate_jwt(user.id);


    res.json({msg:'inicio de session exitoso',
              token:token});
}


ctrlUsuarios.rutaLogin = async (req,res)=>{

    const {email, password}= req.body;
    const user =Usuario.findOne({email, password})
    

    if(!user){
        return res.status(401).json({
            mensaje:"No existe:",
            email: email
        })
    }
    if(!user.activo){
        return res.status(401).json({
            mensaje:"No existe:",
            email: email
        })
    }

    //verificar contrasenia

    const passwordTrue = bcryptjs.compareSync(password,user.password)

    if(!passwordTrue){
        return res.status(401).json({msg:'contrasena invalida'})
    }
    //generar token
    const token = await generate_jwt(user.id);

    res.json({msg:'inicio de session exitoso',
              token:token})
}


//ruta agregar users
ctrlUsuarios.rutaPost = async (req,res)=>{
     
    const {email,password,} = req.body;
    const usuario = new Usuario({email,password})

    await usuario.save();
    res.json({msg: 'Usuario agregado'})
};



//ver usuarios
ctrlUsuarios.rutaGet = async (req,res)=>{

    const user = await Usuario.findById();

    res.json(user);
}

//ruta editar users
ctrlUsuarios.rutaPut = async (req , res)=>{

    const { id } = req.params;


    try {
        const usuario = await Usuario.findByIdAndUpdate(id, {dni, password});
        return res.json(usuario)
    } catch (error) {
        console.log(`Error to update user: ${error}`)
    }

};


//ruta eliminar users
ctrlUsuarios.rutaDelete = async (req,res)=>{

    const {id} = req.params;

    const user =await Usuario.findByIdAndUpdate(id,{ activo: false });

    
    //responde si fue eliminado correctamente

    return res.status(201).json({
        msg: "user removido logicamente", user
    })
}


module.exports = ctrlUsuarios;
