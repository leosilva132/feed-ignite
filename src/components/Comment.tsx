import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/leosilva132.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leandro Viana</strong>
                            <time title="07 de junho de 2022 às 10:05h" dateTime="2022-05-08 08:13:25">Cerca de 1h atrás</time>
                        </div>
                    <button title="Deletar Comentário">
                        <Trash size={24}/>
                    </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    );
}