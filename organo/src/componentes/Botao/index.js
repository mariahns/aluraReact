import './botao.css'

const Botao = ({texto, formato}) => {
    
    let css = "botao";

    if(formato === 'redondo'){
        css = "botao-redondo"
    }
    
    return <button className={css}>
        {texto}
    </button>
}

export default Botao