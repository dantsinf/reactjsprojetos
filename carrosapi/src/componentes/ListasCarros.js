import React from 'react';
import axios from 'axios';

const ListasCarros = () => {
  const state = {
    carros: [],
  };

  function componentDidMount() {
    axios
      .get('https://cfbcursosapireactexemplo1.brcampos.repl.co/')
      .then((res) => {
        const dadosCarros = res.data;
        this.setState({ carros: dadosCarros });
      });
  }

  return (
    <div>
      {state.carros.map((carro) => (
        <div key={carro.id}>
          {carro.marca} - {carro.modelo}
        </div>
      ))}
    </div>
  );
};

export default ListasCarros;
