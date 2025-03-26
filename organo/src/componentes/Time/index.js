import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.2') }}>
            <input type='color' value={time.cor} className='input-cor' onChange={e => mudarCor(e.target.value, time.nome)} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                   //console.log(<Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={() => {}} /> ) 
                   return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar}/> 
                })}
            </div>
        </section>
    )
}

export default Time