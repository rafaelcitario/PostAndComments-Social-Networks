import styles from './Avatar.module.css';
interface AvatarProps {
  src: string,
  hasBorder?: boolean
}
export function Avatar({ src, ...props }: AvatarProps) {

  return (
    <img className={styles.avatar} src={src} alt="" />
  )
}