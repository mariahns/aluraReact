import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"

import fotos from './fotos.json'
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtro, setFiltro] = useState(null)

  // Atualiza fotosDaGaleria quando o filtro mudar
  useEffect(() => {
   
    if (filtro === null || filtro === 0) {
      setFotosDaGaleria(fotos)
    } else {
      const fotosFiltradas = fotos.filter(foto => foto.tagId === filtro)
      setFotosDaGaleria(fotosFiltradas)
    }
  }, [filtro])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(prevFotos =>
      prevFotos.map(fotoDaGaleria => ({
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }))
    )
  }

  const aoClicarTag = (tagId) => {
    // Se `tagId` for null ou undefined, zera o filtro
    setFiltro(tagId ?? null)
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
              aoFotoSelecionada={setFotoSelecionada}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
              aoClicarTag={aoClicarTag}
              filtro={filtro}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
