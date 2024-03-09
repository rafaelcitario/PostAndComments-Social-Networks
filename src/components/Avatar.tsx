import styles from './Avatar.module.css';
interface AvatarProps {
  src: string,
  hasBorder?: boolean
}
export function Avatar({ src, hasBorder }: AvatarProps) {

  return (
    <img className={hasBorder ? styles.avatar : styles.avatarHasNoBorder} src={src} alt="" />
  )
}