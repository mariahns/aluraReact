import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim(){
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
           <h3 className={styles.subtitulo}>
                Olá, eu sou o Antônio!
           </h3>

           <img
              src={fotoSobreMim}
              alt="Foto sorrindo"
              className={styles.fotoSobreMim}
           />  

           <p className={styles.paragrafo}>
               Lorem ipsum dolor sit amet. Et porro consectetur nam aspernatur fugiat ut corporis ducimus est amet deleniti non dolor blanditiis. Et iure nihil vel quasi voluptate ea accusantium velit. Id nostrum exercitationem sit repellat reprehenderit sit tempora quis et nihil dolor 33 labore nulla et iste corrupti
           </p> 
           <p className={styles.paragrafo}>
                Sed praesentium quas et excepturi dolorem aut minus quia et maxime asperiores a iure veritatis sed nisi accusantium. A quisquam explicabo id quasi galisum quo aliquam nemo ut voluptate obcaecati non laboriosam veniam.
           </p>
           <p className={styles.paragrafo}>
                Est voluptas consequatur est amet illum qui iusto blanditiis est similique provident aut neque voluptatum. Ut autem libero a rerum quia cum eveniet nobis eum itaque odio eum aliquid repudiandae et eius ipsa. Et tenetur voluptate qui laudantium culpa ut ipsam iusto ut nobis iure.        
           </p>
           
          
        </PostModelo>

    )

}
   