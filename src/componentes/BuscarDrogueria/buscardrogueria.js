import React, { useState } from 'react';
import './buscardrogueriastyle.css';

function BuscarDrogueria() {
  const [direccion, setDireccion] = useState('');
  const [ubicacion, setUbicacion] = useState(null);

  const buscarDrogueria = async () => {
    setUbicacion('Ubicación encontrada para: Medellín');
  };

  return (
    <div className="buscar-drogueria">
      <h2>Buscar Droguería</h2>
      <input
        type="text"
        placeholder="Ingrese una dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <button onClick={buscarDrogueria}>Buscar</button>
      {ubicacion && <p>{ubicacion}</p>}
    </div>
  );
}

export default BuscarDrogueria;