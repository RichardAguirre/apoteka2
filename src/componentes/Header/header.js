import React from 'react';
import './headerstyle.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>Droguería React</h1>
      <nav>
        <ul>
          <li onClick={() => navigate('/')}>Inicio</li>
          <li onClick={() => navigate('/drogueria')}>Droguerias</li>
          <li onClick={() => navigate('/contacto')}>Contacto</li>
          <li onClick={() => navigate('/carrito')}>Carrito</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;