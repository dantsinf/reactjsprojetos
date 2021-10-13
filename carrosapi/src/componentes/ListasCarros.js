import React from 'react';
import axios from 'axios';
import useDebounce from './useDebounce';

const ListasCarros = ({ value, onChange }) => {
  //quando era com class
  // const state = {
  //   carros: [],
  // };
  const [carros, setCarros] = React.useState([]);
  const [displayValue, setDisplayvalue] = React.useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  // ########################  USANDO FETCH
  React.useEffect(() => {
    fetch('https://cfbcursosapireactexemplo1.brcampos.repl.co/')
      .then((res) => res.json())
      .then((resultado) => {
        setCarros(resultado);
      });
  });

  function handleChange(event) {
    setDisplayvalue(event.target.value);
    debouncedChange(event.target.value);
  }

  // ######################## USANDO AXIOS
  // React.useEffect(() => {
  //   axios //instalei a extensão axios com npm install axios: npm install axios
  //     .get('https://cfbcursosapireactexemplo1.brcampos.repl.co/')
  //     .then((res) => {
  //       const dadosCarros = res.data;
  //       setCarros(dadosCarros);
  //     });
  // }, []);

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
      <input type="search" value={displayValue} onChange={handleChange} />
      {carros.map((carro) => (
        <div key={carro.id}>
          {carro.marca} - {carro.modelo}
        </div>
      ))}
    </div>
  );
};

export default ListasCarros;
