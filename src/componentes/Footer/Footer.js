import React, { Component } from 'react'
import './Footer.css';
import { FaTwitter, FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa' ;

export default class Footer extends Component {
  render() {
    return (
      <section className='Footer'>
        <div className='Social'>
          <a href='/'><i className='social'><FaTwitter/></i></a>
          <a href='/'><i className='social'><FaInstagram/></i></a>
          <a href='/'><i className='social'><FaFacebookF/></i></a>
          <a href='/'><i className='social'><FaGithub/></i></a>
        </div>

        <ul className='lista'>
          <li>
            <a >Home</a>
          </li>
          <li>
            <a >contacto</a>
          </li>
          <li>
            <a >Tareas</a>
          </li>
          <li>
            <a >Login</a>
          </li>
        </ul>
        <p className='Copyrigth'>
          Federico del Rio | Gaston | Federico Fernandez - Bootcamp Matea 2022
        </p>
      </section>
    )
  }
}
