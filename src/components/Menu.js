import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/seccion2">Temas Importantes</Link></li>
        <li><Link to="/seccion3">Contacto</Link></li>
        <li><Link to="/formulario">Formulario</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;


