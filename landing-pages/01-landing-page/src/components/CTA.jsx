import styles from './CTA.module.css'

/**
 * CTA Component
 * 
 * Confident closing statement inviting collaboration or ownership.
 * Clear, direct, and professional.
 */
function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to build something exceptional?
          </h2>
          <p className={styles.description}>
            Let's discuss how we can work together to bring your vision to life. 
            I'm committed to delivering results that exceed expectations.
          </p>
          <div className={styles.buttonGroup}>
            <a href="mailto:yashbhattti@gmail.com" className={styles.primaryButton}>
              Get in Touch
            </a>
            <a href="#services" className={styles.secondaryButton}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
