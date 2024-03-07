import { Trash, TrashSimple } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comments.module.css';

const avatar = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=30&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



// Button delete commentaries
// function handleDeleteCommentary(event: <HTMLButtonElement>): void {
//   console.log(event);

// }



interface CommentsProps {
  content: string,
}



export function Comments({ content }: CommentsProps) {
  return (
    <div className={styles.commentBox}>
      <Avatar src={avatar} />
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Rafael Citario</strong>
            <time>há 2 min</time>
          </div>
          <button ><Trash size={24} weight='bold' /></button>
        </header>
        <p>{content}</p>
      </div>





    </div>
  );
}