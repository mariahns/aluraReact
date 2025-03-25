import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <input type='color' value={time.corSecundaria} className='input-cor' />
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                   //console.log(<Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={() => {}} /> ) 
                   return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} aoDeletar={aoDeletar}/> 
                })}
            </div>
        </section>
    )
}

export default Time