import styles from './Header.module.css'
import note from '../assets/note-sticky-solid.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={note} alt="logo icone bloco de notas auto colante" />
    </header>
  )
}