import React from 'react';
import './carritostyle.css';

function Carrito({ items }) {
  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.nombre} - {item.cantidad}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;
