import styles from './Trust.module.css'

/**
 * Trust Component
 * 
 * Speaks directly to CEO mindset: responsibility, reliability, execution.
 * Builds confidence through clear value propositions without exaggeration.
 */
function Trust() {
  return (
    <section className={styles.trust} id="trust">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            What you can expect when we work together
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>✓</div>
              <h3 className={styles.cardTitle}>Ownership</h3>
              <p className={styles.cardText}>
                I take full responsibility for outcomes. When something needs 
                to be done, it gets done—no excuses, no handoffs.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>✓</div>
              <h3 className={styles.cardTitle}>Reliability</h3>
              <p className={styles.cardText}>
                Consistent delivery on time and within scope. You can count 
                on clear communication and proactive problem-solving.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>✓</div>
              <h3 className={styles.cardTitle}>Execution</h3>
              <p className={styles.cardText}>
                From concept to deployment, I handle the details so you can 
                focus on strategy. Quality code, thoughtful architecture, 
                scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
