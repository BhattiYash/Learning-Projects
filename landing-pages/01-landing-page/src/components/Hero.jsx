import styles from './Hero.module.css'

/**
 * Hero Component
 * 
 * The first impression section. Strong headline, clear value proposition,
 * and a single, confident call-to-action button.
 */
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Building products that
            <span className={styles.accent}> deliver results</span>
          </h1>
          <p className={styles.subheadline}>
            I transform complex challenges into elegant solutions. 
            Every project is an opportunity to exceed expectations 
            and drive measurable impact.
          </p>
          <div className={styles.ctaContainer}>
            <a href="#contact" className={styles.ctaButton}>
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
