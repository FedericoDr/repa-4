import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Header from './componentes/Header/Header';
import Login from './pages/Login/Login';
import Home from './pages/Inicio/Home';
import Contacto from './pages/Contacto/Contacto';
import Tareas from './pages/Tareas/Tareas';
import Footer from './componentes/Footer/Footer';
import Error404 from './pages/Error-404/Error404';
import Agradecimiento from './pages/Contacto/Agradecimiento';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
  <BrowserRouter>    
  <Header/>
    <Routes>
    <Route path="/Contacto" element={<Contacto />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Tareas" element={<Tareas />} />
    <Route path="/*" element={<Error404 />} />
    <Route path='/Agradecimiento' element={<Agradecimiento/>} />
    </Routes>
  <Footer/>
  </BrowserRouter>
  </>
);

reportWebVitals();

