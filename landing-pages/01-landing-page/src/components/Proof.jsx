import styles from './Proof.module.css'

/**
 * Proof Component
 * 
 * Demonstrates credibility through projects, achievements, or metrics.
 * Professional presentation without exaggeration.
 */
function Proof() {
  const achievements = [
    {
      metric: '50+',
      label: 'Projects Delivered',
      description: 'From startups to enterprise solutions'
    },
    {
      metric: '99%',
      label: 'Client Satisfaction',
      description: 'Consistent delivery and communication'
    },
    {
      metric: '5+',
      label: 'Years Experience',
      description: 'Building products that matter'
    }
  ]

  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Built scalable React application handling 100K+ monthly users',
      tech: 'React • Node.js • PostgreSQL'
    },
    {
      name: 'SaaS Dashboard',
      description: 'Designed and developed analytics platform with real-time data visualization',
      tech: 'React • TypeScript • D3.js'
    },
    {
      name: 'Mobile Web App',
      description: 'Progressive web app with offline capabilities and push notifications',
      tech: 'React • PWA • Service Workers'
    }
  ]

  return (
    <section className={styles.proof} id="proof">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Track Record</h2>
          <p className={styles.subtitle}>
            Results speak louder than promises
          </p>
          
          {/* Metrics */}
          <div className={styles.metricsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={styles.metric}>{achievement.metric}</div>
                <div className={styles.metricLabel}>{achievement.label}</div>
                <div className={styles.metricDescription}>{achievement.description}</div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className={styles.projectsSection}>
            <h3 className={styles.sectionTitle}>Recent Work</h3>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <h4 className={styles.projectName}>{project.name}</h4>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>{project.tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proof
