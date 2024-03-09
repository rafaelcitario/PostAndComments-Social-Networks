import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilSimpleLine } from '@phosphor-icons/react'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=60&w=200&h=200auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <strong>Rafael Citario</strong>
        <span>Desenvolvedor Web</span>
      </div>
      <footer>
        <button> <PencilSimpleLine size={24} weight='bold' />Editar seu perfil</button>
      </footer>
    </aside>
  )
}