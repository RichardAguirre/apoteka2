import React from 'react';
import './detallesmedicamentostyle.css';

function DetallesMedicamento({ medicamento }) {
  return (
    <div className="detalles-medicamento">
      <h2>Detalles del Medicamento</h2>
      {medicamento ? (
        <div>
          <h3>{medicamento.nombre}</h3>
          <p>{medicamento.descripcion}</p>
        </div>
      ) : (
        <p>Seleccione un medicamento para ver los detalles.</p>
      )}
    </div>
  );
}

export default DetallesMedicamento;