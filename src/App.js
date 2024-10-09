import React from 'react';
import './App.css';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';
import BuscarMedicamento from './componentes/BuscarMedicamento/buscarmedicamento';


function App() {
  return (
    <div className="App">
      <Header />
      <BuscarMedicamento />   
      <Footer />
    </div>
  );
}

export default App;