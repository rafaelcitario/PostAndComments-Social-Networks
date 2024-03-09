import { HandsClapping, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comments.module.css';
import { useState } from 'react';

const avatar = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=30&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface CommentsProps {
  content: string,
  deleteComment: (content: string) => void
}

export function Comments({ ...props }: CommentsProps) {
  const [clapsNumber, setClapsNumber] = useState(0);
  const [addClassToClapButton, setAddClassToClapButton] = useState('');
  function handleDeleteCommentary() {
    props.deleteComment(props.content);
  }

  function handleCountClapsComment(): void {
    setClapsNumber(clapsNumber + 1);
    setAddClassToClapButton(`${styles.clapped}`)
  }

  let isNotClaps: number | string = clapsNumber !== 0 ? clapsNumber : "";

  return (
    <div className={styles.commentBox}>
      <Avatar src={avatar} />
      <div>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Visitante</strong>
              <time>há 2 min</time>
            </div>
            <button onClick={handleDeleteCommentary} ><Trash size={24} weight='bold' /></button>
          </header>
          <p>{props.content}</p>
        </div>
        <div className={styles.clapsAndNumberClaps}>
          <button onClick={handleCountClapsComment}>
            <HandsClapping
              className={addClassToClapButton}
              size={20}
              weight='bold'
            />
          </button>
          <span>
            {isNotClaps}
          </span>
        </div>
      </div>


    </div>
  );
}