import styles from './Footer.module.css'

/**
 * Footer Component
 * 
 * Clean, minimal footer with essential links and copyright.
 * Maintains professional tone without clutter.
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            <a href="https://github.com/bhattiyash" target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/imyashbhatti" target="_blank" rel="noopener noreferrer" className={styles.link}>
              LinkedIn
            </a>
            <a href="mailto:yashbhattti@gmail.com" className={styles.link}>
              Email
            </a>
          </div>
          <div className={styles.copyright}>
            © {currentYear} LLM. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
