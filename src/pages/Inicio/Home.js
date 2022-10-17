import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div class="Body">

<div class="container">

      <div class="cabecera">
        <h1 class="titulo">Bienvenido</h1>
        <b><p> Para poder crear una nota precione el boton</p></b>
        <p>.</p>  
        <Link class="bottone" to={'/Tareas'}>Click aca</Link>
      </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="Crear">Crear</h2>
        <p class="Crear">Para poder crear una nota solo tenes que escribir en la Nota donde dice "Escriba para agregar una nota..." y luego en Guardar para crear dicha Nota.</p>
      </div>
    </div>
    <div class="face face2">
      <h2>Crear Notas</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="Borrar">Borrar</h2>
        <p class="Borrar">Para Poder Borrar una Nota/Tarea debras tocar el icono del canasto de basura y se eliminara de tus tareas</p>
      </div>
    </div>
    <div class="face face2">
      <h2>Borrar Notas</h2>
    </div>
  </div>

  <div class="card">
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="Buscar">Buscar</h2>
        <p class="Buscar">Para Poder Buscar/Filtrar deberas ir a la barra superior donde hay una lupa y buscar la nota que desee. </p>
      </div>
    </div>
    <div class="face face2">
      <h2>Buscar Notas</h2>
    </div>
  </div>
</div>

      </div>
    )
  }
}
