
import { useState } from 'react';
import Banner from './Componentes/Banner'
import Formulario from './Componentes/Formulario';

function App() {
  const [colaboradores,setColaboradores]=useState([]);

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador);
    setColaboradores([...colaboradores,colaborador]);
  }
  
  return (
    <div >
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador=>aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  )
}

export default App;
