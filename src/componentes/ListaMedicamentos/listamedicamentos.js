import React from 'react';
import './listamedicamentosstyle.css';

function ListaMedicamentos({ onMedicamentoSeleccionado }) {
  const medicamentos = [
    { nombre: 'Acetaminofen', descripcion: 'Alivia el dolor y la fiebre' },
    { nombre: 'Ibuprofeno', descripcion: 'Antiinflamatorio y analgésico' },
    { nombre: 'Aspirina', descripcion: 'Reduce el dolor y la inflamación' },
    { nombre: 'Amoxicilina', descripcion: 'Antibiótico para infecciones bacterianas' }
  ];

  const manejarClick = async (med) => {
    try {
      const response = await fetch(`https://api.fda.gov/drug/label.json?search=${med.nombre}`);
      const data = await response.json();
      if (data.results[0]) {
        onMedicamentoSeleccionado({
          nombre: data.results[0].openfda.brand_name,
          descripcion: data.results[0].purpose
        });
      }
    } catch (error) {
      console.error('Error al obtener información del medicamento', error);
    }
  };

  return (
    <div className="lista-medicamentos">
      <h2>Medicamentos Disponibles</h2>
      <ul>
        {medicamentos.map((med, index) => (
          <li key={index} onClick={() => manejarClick(med)}>{med.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaMedicamentos;