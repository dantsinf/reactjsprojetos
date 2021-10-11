import React from 'react';
import axios from 'axios';

const ListasCarros = () => {
  //quando era com class
  // const state = {
  //   carros: [],
  // };
  const [carros, setCarros] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://cfbcursosapireactexemplo1.brcampos.repl.co/')
      .then((res) => {
        const dadosCarros = res.data;
        setCarros(dadosCarros);
      });
  }, []);

  //quando era com class
  // function componentDidMount() {
  //   axios
  //     .get('https://cfbcursosapireactexemplo1.brcampos.repl.co/')
  //     .then((res) => {
  //       const dadosCarros = res.data;
  //       this.setState({ carros: dadosCarros });
  //     });
  // }

  return (
    <div>
      {carros.map((carro) => (
        <div key={carro.id}>
          {carro.marca} - {carro.modelo}
        </div>
      ))}
    </div>
  );
};

export default ListasCarros;
