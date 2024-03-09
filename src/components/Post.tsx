import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import styles from "./Post.module.css";
import { ptBR } from "date-fns/locale/pt-BR";
import { Comments } from "./Comments";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [commentsList, setCommentsList] = useState<string[]>([]);
  const [currentComment, setCurrentComment] = useState<string>("");

  const postAtDate = format(new Date(publishedAt), "MM/dd/yyyy kk:mm:ss");
  const postFewDatesAgo = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    includeSeconds: true,
    addSuffix: true,
  });

  function handleSubmitComment(event: FormEvent): void {
    event.preventDefault();
    setCommentsList([...commentsList, currentComment]);
    setCurrentComment("");
  }

  function handleCommentPassToState(
    event: ChangeEvent<HTMLTextAreaElement>
  ): void {
    setCurrentComment(event.target.value);
    event.target.setCustomValidity("");
  }

  function handleIsInvalidComment(
    event: InvalidEvent<HTMLTextAreaElement>
  ): void {
    const validityMessage =
      "Como é amigo? 🤨 Deixa isso aqui vazio não, por favor!";
    event.target.setCustomValidity(validityMessage);
  }



  function handleDeletComment(content: string) {
    const commentListWithoutDeleteOne = commentsList.filter(contentToDelete => {
      return content !== contentToDelete;
    })

    setCommentsList(commentListWithoutDeleteOne);
  }


  return (
    <div className={styles.post}>
      <header className={styles.postInfo}>
        <Avatar
          hasBorder
          src={author.avatarUrl} />

        <div className={styles.container}>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
          <time title={postAtDate} dateTime={postAtDate}>
            {postFewDatesAgo.concat(" atrás.")}
          </time>
        </div>
      </header>

      <div className={styles.content}>
        {content.map((content) => {
          if (content.type == "paragraph") {
            return <p key={content.content}>{content.content}</p>;
          } else {
            return (
              <p key={content.content}>
                <a href="">{content.content}</a>
              </p>
            );
          }
        })}
      </div>

      <footer>
        <form onSubmit={handleSubmitComment} className={styles.formFooter}>
          <strong>Deixe seu comentário</strong>

          <textarea
            required
            title="compartilhe suas idéias"
            value={currentComment}
            onInvalid={handleIsInvalidComment}
            onChange={handleCommentPassToState}
            placeholder="o que você pensa sobre isso?"
          ></textarea>

          <div className={styles.publishButtonContainer}>
            <button disabled={currentComment === "" ? true : false} type="submit">
              Publicar
            </button>
          </div>

        </form>
      </footer>

      {commentsList.map((comment) => {
        return <Comments
          key={comment}
          content={comment}
          deleteComment={handleDeletComment}
        />;
      })}
    </div>
  );
}
