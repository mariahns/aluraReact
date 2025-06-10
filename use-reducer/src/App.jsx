import { useReducer, useState } from 'react';
import './App.css';
import reducer, { ADICIONAR_FRASE, EXCLUIR_FRASE } from './reducer';

function App() {
  //lista de frases (estado)
  //o usuário pode adicionar novas frases, desde que:
  //a frase possua mais do que 20 caracteres
  //a frase seja única

  const [frase, setFrase] = useState('');
  //const [frases, setFrases] = useState([]); 
  const [frases, dispatch] = useReducer(reducer, [])

  function salvarFrase(evento) {

    evento.preventDefault()
    dispatch({
      tipo: ADICIONAR_FRASE,
      frase: frase

    })

    /*   if (frase.length < 20){
        alert('Não são permitidas frases com menos de 20 caracteres.')
      }
  
      if (frases.includes(frase)){
        alert('Não são permitidas frases duplicadas!')
        return
      } */

    //setFrases([...frases, frase])



  }

  function excluirFrase(fraseExcluida) {
    dispatch({
      tipo: EXCLUIR_FRASE,
      frase: fraseExcluida

    })
  }

  return (
    <>
      <div className="App">
        <form onSubmit={salvarFrase}>
          <textarea
            value={frase}
            onChange={evento => setFrase(evento.target.value)}
            placeholder="Digite sua frase..."
            required
          />
          <br />
          <button>Salvar frase</button>
        </form>
        {frases.map((fraseAtual, index) => <p key={index}>{fraseAtual} - <button onClick={() => excluirFrase(fraseAtual)}>Excluir</button></p>)}
      </div>
    </>
  )
}

export default App
