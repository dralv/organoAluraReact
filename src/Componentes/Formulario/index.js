import CampoTexto from '../CampoTexto'
import './Formulario.css'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
  const times = [
    'Programação',
    'Front End',
    'Data Science',
    'Devops',
    'Ux Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome" />
        <CampoTexto label="Cargo " placeholder="Digite o cargo" />
        <CampoTexto label="Image" placeholder="Insira uma imagem" />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario
