import React from 'react';
import './App.css';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';
import BuscarMedicamento from './componentes/BuscarMedicamento/buscarmedicamento';
import ListaMedicamentos from './componentes/ListaMedicamentos/listamedicamentos';
import DetallesMedicamento from './componentes/DetallesMedicamento/detallesmedicamento';


function App() {
  return (
    <div className="App">
      <Header />
      <BuscarMedicamento />
      <ListaMedicamentos />
      <DetallesMedicamento medicamento={null} />
      <Footer />
    </div>
  );
}

export default App;