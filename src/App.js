import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';
import BuscarMedicamento from './componentes/BuscarMedicamento/buscarmedicamento';
import ListaMedicamentos from './componentes/ListaMedicamentos/listamedicamentos';
import DetallesMedicamento from './componentes/DetallesMedicamento/detallesmedicamento';
import Contacto from './componentes/Contacto/contacto';
import Carrito from './componentes/Carrito/carrito';
import BuscarDrogueria from './componentes/BuscarDrogueria/buscardrogueria';

function App() {
  const [medicamentoSeleccionado, setMedicamentoSeleccionado] = useState(null);
  const [carritoItems, setCarritoItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <BuscarMedicamento onMedicamentoSeleccionado={setMedicamentoSeleccionado} />
              <ListaMedicamentos onMedicamentoSeleccionado={setMedicamentoSeleccionado} />
              <DetallesMedicamento medicamento={medicamentoSeleccionado} />
            </>
          } />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/drogueria" element={<BuscarDrogueria />} />
          <Route path="/carrito" element={<Carrito items={carritoItems} />} />
          <Route path="/buscardrogueria" element={<BuscarDrogueria />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;