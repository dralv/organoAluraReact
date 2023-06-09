import './campo.css'

const Campo = ({label,type='text',obrigatorio,placeholder,aoAlterado,valor}) => {
  const aoDigitado = evento => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={`${placeholder}...`}
      ></input>
    </div>
  )
}

export default Campo
