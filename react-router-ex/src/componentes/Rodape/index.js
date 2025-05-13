import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'; // pega a marca como se fosse um componente

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Desenvolvido pela Alura
        </footer>
    )
}