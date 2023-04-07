
import Banner from './Componentes/Banner'
import CampoTexto from './Componentes/CampoTexto'

function App() {
  return (
    <div >
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o nome"/>
      <CampoTexto label="Cargo "placeholder="Digite o cargo"/>
      <CampoTexto label="Image" placeholder="Insira uma imagem"/>
    </div>
  )
}

export default App;
