import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';

const ListasCarros = () => {
  //quando era com class
  // const state = {
  //   carros: [],
  // };
  const [carros, setCarros] = React.useState([]);
  const [info, setInfo] = React.useState({});
  const [text, setText] = React.useState('');

  // ########################  USANDO FETCH
  React.useEffect(() => {
    if (text) {
      console.log(text);
      fetch('https://cfbcursosapireactexemplo1.brcampos.repl.co/')
        .then((res) => res.json())
        .then((resultado) => {
          setInfo(resultado);
        });
    }
  }, [text]);

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
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {carros.map((carro) => (
        <div key={carro.id}>
          {carro.marca} - {carro.modelo}
        </div>
      ))}
    </div>
  );
};

export default ListasCarros;
