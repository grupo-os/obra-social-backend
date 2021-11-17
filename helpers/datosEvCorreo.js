const nodemailer = require("nodemailer");

require('dotenv').config();

const enviarCorreo = async (email,password)=> {

  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: `'${process.env.MYGMAIL}'`, // generated ethereal user
      pass: `'${process.env.PGMAIL}'`, // generated ethereal password
    },
  });
  contentHTML=`
  <h1> Tu formulario fue aceptado</h1>
  <p>Tu email:${email}</p>
  <p>Tu contraseña:${password}</p>`

  await transporter.sendMail({
    from: `"Obra Social Agil" <${process.env.MYGMAIL}>`, // sender address
    to: `${email}`, // list of receivers
    subject: "Cuenta de Obra Social aceptada", // Subject line
    html: `${contentHTML}`
    
    
  })
  
}
module.exports ={enviarCorreo} ;