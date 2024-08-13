import React, { useState, useEffect } from "react";
import Card from "../src/components/Card";
import Details from "../src/components/Details";
import '../src/style/App.css';

const App = () => {
  const [paises, setPaises] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setPaises(data))
      .catch(error => console.error(error));
  }, []);

  const IdentificadorPais = (pais) => {
    setPaisSelecionado(pais);
  };

  const fecharModal = () => {
    setPaisSelecionado(null);
  };

  return (
    <div className="main">
      <h1>Países do Mundo</h1>
      <div className="dashboard">
        {paises.map((pais) => (
          <Card 
            key={pais.cca3} 
            pais={pais} 
            onClick={IdentificadorPais} 
          />
        ))}
      </div>
      {paisSelecionado && (
        <Details pais={paisSelecionado} onClose={fecharModal} />
      )}
    </div>
  );
};

export default App;
