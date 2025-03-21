import Dia from '../Dia'

import './Fase.css'

const Fase = (props) => {
    
    return (
        (props.dias.length > 0) && <section className='fase' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>  
             <div className='dias'>
                {props.dias.map( dia => <Dia data={dia.data}/>)} 
             </div>                                   
        </section> 
    )
}

export default Fase