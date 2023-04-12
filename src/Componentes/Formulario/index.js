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

  const aoSalvar = evento => {
    evento.preventDefault()
    console.log('From foi submetido')
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome" />
        <CampoTexto obrigatorio={true} label="Cargo " placeholder="Digite o cargo" />
        <CampoTexto  label="Imagem" placeholder="Insira uma imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario
