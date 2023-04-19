import { useState } from 'react'
import Banner from './Componentes/Banner'
import Formulario from './Componentes/Formulario'
import Time from './Componentes/Time'

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={colaborador =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação"></Time>
      <Time nome="Front-End"></Time>
      <Time nome="Ux Design"></Time>
    </div>
  )
}

export default App
