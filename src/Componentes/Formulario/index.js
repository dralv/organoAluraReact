import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome" />
        <CampoTexto label="Cargo " placeholder="Digite o cargo" />
        <CampoTexto label="Image" placeholder="Insira uma imagem" />
      </form>
    </section>
  )
}

export default Formulario
