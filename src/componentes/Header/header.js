import React from 'react';
import './headerstyle.css';

function Header() {
  return (
    <header className="header">
      <h1>Apoteka React</h1>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Medicamentos</li>
          <li>Contacto</li>
          <li>Carrito</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;