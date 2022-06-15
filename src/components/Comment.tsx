import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mayk Brito</strong>
                            <time title="07 de junho de 2022 às 10:05h" dateTime="2022-05-08 08:13:25">Cerca de 1h atrás</time>
                        </div>
                    <button title="Deletar Comentário">
                        <Trash size={24}/>
                    </button>
                    </header>

                    <p>Muito bom Leandro, parabéns!! 👏👏</p>
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