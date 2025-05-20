import React from 'react';
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';
import styles from './Post.module.css'


export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        /*   <Routes>
              <Route path="*" element={<PaginaPadrao />}>
                 <Route index element={ */
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <div className="post-markdown-container">
                    <h1>Outros posts que você pode gostar</h1>                      
                 
                    <div>
                        <ul className={styles.posts}>
                            {posts
                                .filter((post) => post.id !== Number(parametros.id))
                                .slice(0, 4) // pega apenas os 4 primeiros
                                .map((post) => (
                                    <li key={post.id}>
                                        <PostCard post={post} />
                                    </li>
                                ))}
                        </ul>

                    </div>

                </div>


            </PostModelo>

        </PaginaPadrao>

        /*   }/>
          </Route>
      </Routes>
*/
    )
}