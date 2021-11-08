const ctrlHome = {};
const Usuario = require('../models/users');


//ruta mostrar usuarios 
 
ctrlHome.rutaGet = async (req,res)=>{

    const usuario = await Usuario.findById();

    res.json(usuario);
}

//ruta agregar users



ctrlHome.rutaPost = async (req,res)=>{
     
    const {email,password,} = req.body;
    const usuario = new Usuario({email,password})

    await usuario.save();
    res.json({msg: 'Usuario agregado'})
};

//ruta eliminar users
ctrlHome.rutaDelete = async (req,res)=>{
    const {id}= req.body;

    try{
        await Usuario.findByIdAndDelete(req.params.id);

        return res.json({msg: 'user removed'})
    } catch(error){
        console.log('error al eliminar user ',error)
    }
}



//ruta editar users
ctrlHome.rutaPut = async (req , res)=>{

    const { id } = req.params;


    try {
        const usuario = await Usuario.findByIdAndUpdate(id, {dni, password});
        return res.json(usuario)
    } catch (error) {
        console.log(`Error to update user: ${error}`)
    }

};


module.exports = ctrlHome;
