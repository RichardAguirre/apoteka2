import React, { useState } from 'react';
import './buscarmedicamentostyle.css';

function BuscarMedicamento({ onMedicamentoSeleccionado }) {
  const [medicamento, setMedicamento] = useState('');
  const [informacion, setInformacion] = useState(null);

  const buscarMedicamento = async (nombre) => {
    try {
      const response = await fetch(`https://api.fda.gov/drug/label.json?search=${nombre || medicamento}`);
      const data = await response.json();
      setInformacion(data.results[0]);
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
    <div className="buscar-medicamento">
      <input 
        type="text" 
        placeholder="Ingrese el nombre del medicamento" 
        value={medicamento} 
        onChange={(e) => setMedicamento(e.target.value)} 
      />
      <button onClick={() => buscarMedicamento()}>Buscar</button>
      {informacion && (
        <div className="informacion-medicamento">
          <h3>{informacion.openfda.brand_name}</h3>
          <p>{informacion.purpose}</p>
        </div>
      )}
    </div>
  );
}

export default BuscarMedicamento;