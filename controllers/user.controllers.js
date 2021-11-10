const ctrlUsuarios = {};
const Usuario = require('../models/users');


//ruta mostrar usuarios 
ctrlUsuarios.rutaLogin = async (req,res)=>{

    const {email, password}= req.body;
    const user =findOne({email, password})
    

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
}



//ver usuarios
ctrlUsuarios.rutaGet = async (req,res)=>{

    const user = await Usuario.findById();

    res.json(user);
}

//ruta agregar users



ctrlUsuarios.rutaPost = async (req,res)=>{
     
    const {email,password,} = req.body;
    const usuario = new Usuario({email,password})

    await usuario.save();
    res.json({msg: 'Usuario agregado'})
};

//ruta eliminar users
ctrlUsuarios.rutaDelete = async (req,res)=>{
    const {id}= req.body;

    try{
        await Usuario.findByIdAndDelete(req.params.id);

        return res.json({msg: 'user removed'})
    } catch(error){
        console.log('error al eliminar user ',error)
    }
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


module.exports = ctrlUsuarios;
