import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps {
    content: string;
    onDeleteComment: Function;
}

export function Comment( {content, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCount(){
        setLikeCount((like) => {
            return like + 1
        })
    }

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

                    <button onClick={handleDeleteComment} title="Deletar Comentário">
                        <Trash size={24}/>
                    </button>

                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    );
}