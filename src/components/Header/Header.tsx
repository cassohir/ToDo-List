import styles from './Header.module.css';
import toDoListLogo from '../../assets/toDoListLogo.png';




export function Header(){



  return (
    <header className={styles.header}>

    <img  src={toDoListLogo} alt="toDoListLogo Logo" />
    <h2><strong>To</strong>Do</h2>

  </header>
  )

}