import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>LLM</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#proof" className={styles.navLink}>Work</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
