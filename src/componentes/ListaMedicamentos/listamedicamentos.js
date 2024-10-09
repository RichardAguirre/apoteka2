import React from 'react';
import './listamedicamentosstyle.css';

function ListaMedicamentos() {
  const medicamentos = [
    'Acetaminofen',
    'Ibuprofeno',
    'Aspirina',
    'Amoxicilina'
  ];

  return (
    <div className="lista-medicamentos">
      <h2>Medicamentos Disponibles</h2>
      <ul>
        {medicamentos.map((med, index) => (
          <li key={index}>{med}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaMedicamentos;