import React, {useState} from 'react'
import './Contacto.css';
import { Link } from 'react-router-dom';
//import Agradecimiento from './Agradecimiento';


const Contacto = ()=> {
  
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const errorMessage1 = validatecorreo(correo);
  const errorMessage2 = validatenombre(nombre);
  const errorMessage3 = validateasunto(asunto);
  const errorMessage4 = validatemensaje(mensaje);
  //const pagAgradecimiento = agradecimiento(errorMessage1, errorMessage2,errorMessage3,errorMessage4);
  
    return (


      
      <form className='Hola'>
        
        <div className='Cajas'> 

            <b><p className='Error'>{errorMessage2}</p></b>
        <input className='Texto' type='text' name='nombre' placeholder="Nombre" onChange={ev =>setNombre(ev.target.value)} /> <br></br> <br></br> 
          
            <b><p className='Error'>{errorMessage1}</p></b>
        <input className='Texto' type='text' name='correo' placeholder="Correo" onChange={ev =>setCorreo(ev.target.value)} /> <br></br><br></br> 
          
            <b><p className='Error'>{errorMessage3}</p></b>
        <input className='Texto' type='text' name='asunto' placeholder="Asunto" onChange={ev =>setAsunto(ev.target.value)} /><br></br><br></br> 
          
            <b><p className='Error'>{errorMessage4}</p></b>
        <input className='Texto' type='text' name='mensaje' placeholder="Mensaje" onChange={ev =>setMensaje(ev.target.value)} /><br></br><br></br> 
        
        
         <Link className='BotonCon' to={"/Agradecimiento"}>Enviar</Link>
          
        </div>
     </form>
      
    );
    };

  const validatecorreo = (correo) => {
    if (!correo.includes('@'))return 'Correo'
      };
  const validatenombre = (nombre) =>{
    if (nombre === ('')) return 'Nombre'
      };
  const validateasunto = (asunto) =>{
    if (asunto === ('')) return 'Asunto'
      };
  const validatemensaje = (mensaje) =>{
    if (mensaje === ('')) return 'Mensaje'
      };
      
    //const agradecimiento = (errorMessage1, errorMessage2,errorMessage3,errorMessage4) => {
//if ((errorMessage1 && errorMessage2 && errorMessage3 && errorMessage4) === true) return alert("complete los campos")
//else   return "/Agradecimiento"   };


   export default Contacto;