// const ctrlPersonas = {};
// const Personas = require('../models/personas');

// // Mostrar personas
// ctrlPersonas.rutaGet = async (req,res)=>{

//     const persona = await Personas.find();

//     res.json(persona);
// }


// ctrlPersonas.rutaPost = async (req,res)=>{
     
//     const {dni,nombre,celular,ubicacion} = req.body;

//     const persona = new Personas({dni,nombre,celular,ubicacion})

//     await persona.save();
//     res.json({msg: 'nueva Persona agregada'})
// };

// module.exports = ctrlPersonas;