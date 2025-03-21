import './Banner.css'

function Banner() {
    
    {/* JSX -> parece html mas nao é. É como o react lê o html e faz o append no DOM */}
    return (
        <header className="banner"> {/* no react se usa className ao invés de class pq class é uma palavra reservada do js */}
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
        
     )
}

export default Banner