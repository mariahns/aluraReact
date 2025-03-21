import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Fase from "./componentes/Fase";

function App() {

  const fasesLua = [
    {
      nome: 'Nova',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
    {
      nome: 'Crescente',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Cheia',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Minguante',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    }

  ]

  const [dias, setDias] = useState([])

  const aoNovoDiaCadastrado = (dia) =>{
    console.log(dia)
    setDias([...dias, dia]) //coloca o dia que acabou de chegar no array de dias
  } 

  return (
    <div className="App">
      <Banner /> {/* parece uma tag html mas foi criado no arquivo Banner.js */}
      <Formulario fasesLua={fasesLua.map(faseLua => faseLua.nome)} aoDiaCadastrado={dia => aoNovoDiaCadastrado(dia)} />  {/* aoDiaCadastrado vai receber o dia novo e jogar pro aoNovoDiaCadastrado  */}

      {fasesLua.map(fase => <Fase 
        key={fase.nome} 
        nome={fase.nome} 
        corPrimaria={fase.corPrimaria} 
        corSecundaria={fase.corSecundaria}
        dias={dias.filter(dia => dia.faseLua == fase.nome)} 
      />)}  {/* exibe os cards dos dias porém filtrado pela fase.nome */}
    
      <Rodape />
    </div>
  );
}

export default App;
