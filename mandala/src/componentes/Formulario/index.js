import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

import './Formulario.css'


const Formulario = (props) => {   

    //useState é um hook do react para se manter um estado dentro de uma função
    //no exemplo abaixo o useState é iniciado com uma string vazia e retorna um array com o valor em si, e um seter que é uma forma de definir esse valor
    //conforme o valor muda o estado muda junto e se o estado muda o react sabe que precisa renderizar esse componente
    const [data, setData] = useState('');  
    const [faseLua, setFaseLua] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault() //bloqueia o comportamento padrao do submit de carregar a pagina
        //console.log('formulario submetido=> ' , data, faseLua)
        props.aoDiaCadastrado({
            data,           
            faseLua
        })
        setData('')       
        setFaseLua('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para incluir um novo dia</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Data"
                    placeholder="Digite a data"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />                                    
                <ListaSuspensa
                    obrigatorio={true}                  
                    label="Fase da lua"
                    itens={props.fasesLua}
                    valor={faseLua}
                    aoAlterado={valor => setFaseLua(valor)}
                />  
                <Botao>
                    Adicionar       
                </Botao>                               
           
            </form>
        </section>
    )
}

export default Formulario