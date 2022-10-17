import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
      <div className='Contenedor'>
        <h1 className='Titulo'>Repa-4 | Matea</h1>
        <li>
        <Link className='Links' to={'Home'}>Inicio</Link>
        <Link className='Links' to={'Tareas'}>Tareas</Link>
        <Link className='Links' to={'Contacto'}>Contacto</Link>
        <Link className='Links' to={'Login'}>Login</Link>
        </li>
      </div>
    )
  }
}
