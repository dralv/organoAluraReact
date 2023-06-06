import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({time,colaboradores,aoDeletar,mudarCor}) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: hexToRgba(time.cor,0.6)
        }}
      >
        <input onChange={evento=>mudarCor(evento.target.value,time.id)} value={time.cor} type='color' className='input-cor'></input>
        <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map(colaborador => {
          
            return (
              <Colaborador
                colaborador={colaborador}
                cor={time.cor}
                aoDeletar ={aoDeletar}
              />
            )
          })}
        </div>
      </section>
    )
  )
}

export default Time

