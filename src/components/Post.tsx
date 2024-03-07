import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns'
import styles from './Post.module.css';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Comments } from './Comments';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Author {
  name: string,
  role: string,
  avatarUrl: string,
}

interface Content {
  type: string,
  content: string
}

interface PostProps {
  author: Author,
  content: Content[]
  publishedAt: Date,
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [commentsList, setCommentsList] = useState<string[]>(['SALVE RAPAZIADA']);
  const [currentComment, setCurrentComment] = useState<string>('');


  const postAtDate = format(new Date(publishedAt), 'MM/dd/yyyy kk:mm:ss');
  const postFewDatesAgo = formatDistanceToNow(publishedAt, { locale: ptBR, includeSeconds: true, addSuffix: true })



  function handleSubmitComment(event: FormEvent) {
    event.preventDefault();
    setCommentsList([...commentsList, currentComment]);
    console.log(currentComment);
  }

  function handleCommentPassToState(event: ChangeEvent<HTMLTextAreaElement>) {
    setCurrentComment(event.target.value);
  }


  return (
    <div className={styles.post}>
      <header className={styles.postInfo}>
        <Avatar src={author.avatarUrl} />

        <div className={styles.container}>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
          <time title={postAtDate} dateTime={postAtDate}>
            {postFewDatesAgo.concat(' atrás.')}
          </time>
        </div>
      </header>
      <div className={styles.content}>
        {content.map(content => {
          if (content.type == 'paragraph') {
            return <p key={content.content}>{content.content}</p>
          } else {
            return <p key={content.content}><a href="">{content.content}</a></p>;
          }
        })}
      </div>

      <footer>
        <form
          onSubmit={handleSubmitComment}
          className={styles.formFooter}>
          <strong>Deixe seu comentário</strong>
          <textarea
            onChange={handleCommentPassToState}
            name='entryCommentField'
            placeholder='o que você pensa sobre isso?'></textarea>
          <button type='submit'>Publicar</button>
        </form>
      </footer>

      {commentsList.map((comment) => {
        return (
          <Comments
            key={comment}
            content={comment}
          />
        )
      })}
    </div>


  )

}