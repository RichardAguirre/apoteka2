import React, { useState } from 'react';
import './contactostyle.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarMensaje = () => {
    alert(`Mensaje enviado por ${nombre}: ${mensaje}`);
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <textarea
        placeholder="Ingrese su mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button onClick={enviarMensaje}>Enviar</button>
    </div>
  );
}

export default Contacto;