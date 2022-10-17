import './Login.css';
import { useState } from "react"
import { Link } from 'react-router-dom';


function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const mensaje = valido(email)
  const mensaje2 = valido2(password)
  const mensaje3 = login(email, password)
  const mensaje4 = mirar(password)


  return ( 
    <div class='contenedorFormulario'>
      <div id="contenedorImagen">
        <img id="imagen" src={mensaje4} alt="foto"></img>
        
      </div>
      <form class='formulario'>
        <input className='ContenidoEC' name='email' type="text" placeholder='ingrese su email' value={email} onChange={ev => setEmail(ev.target.value)}/>
        {mensaje}
        <p><br></br>
        </p>
        <input className='ContenidoEC' name='password' type="password" placeholder='ingrese su contraseña' value={password} onChange={ev => setPassword(ev.target.value)}/>
        {mensaje2}
        <div className='botonee' id='checkbox'>
        <input className='check' type="checkbox"></input>
        <p className='Recordar'>Recordar</p>
        </div>

      
        <button className='BotonLog'> <Link to={mensaje3}>ENVIAR</Link>
      </button>
      </form>
      
    </div>
  );
}
const emailRegexp = new RegExp(/^[a-zA-z0-9-_]{2,20}@[a-zA-z0-9-_]{2,20}\.[a-z]{2,8}$/);
const passwordRegexp = new RegExp(/^[a-zA-z0-9-_@,-<>]{7,20}$/);
const login = (email, password) => {
  if (emailRegexp.test(email)  && passwordRegexp.test(password))
  return "/Tareas"
  else 
  return "/*"
}
const mirar = (password) => {
  if (password.length < 1)
  return "aaa.svg"
  else if (password.length === 3 || password.length === 2) 
  return "ccc.svg"
  else if (password.length > 4)
  return "aaa.svg"
  else
  return "bbb.svg"
}
const valido = (email) => {
  if (emailRegexp.test(email)) return (<p className='mensajeCorrecto'>Email correcto </p>)
  else return (<p></p>)
  
}
const valido2 = (password) => {
     
  if (passwordRegexp.test(password)) return (<p className='mensajeCorrecto'>Contraseña correcta</p>)
  else return (<p></p>)
}
export default Login;