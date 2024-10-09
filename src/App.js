import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';
import BuscarMedicamento from './componentes/BuscarMedicamento/buscarmedicamento';
import ListaMedicamentos from './componentes/ListaMedicamentos/listamedicamentos';
import DetallesMedicamento from './componentes/DetallesMedicamento/detallesmedicamento';

function App() {
  const [medicamentoSeleccionado, setMedicamentoSeleccionado] = useState(null);

  return (
    <div className="App">
      <Header />
      <BuscarMedicamento onMedicamentoSeleccionado={setMedicamentoSeleccionado} />
      <ListaMedicamentos onMedicamentoSeleccionado={setMedicamentoSeleccionado} />
      <DetallesMedicamento medicamento={medicamentoSeleccionado} />
      <Footer />
    </div>
  );
}

export default App;