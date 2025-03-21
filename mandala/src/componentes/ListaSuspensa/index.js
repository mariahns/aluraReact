import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value="" disabled selected>Selecione...</option>
                {/* percorre itens e para cada item (para cada item executa uma arrow function) retorna uma option */}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa