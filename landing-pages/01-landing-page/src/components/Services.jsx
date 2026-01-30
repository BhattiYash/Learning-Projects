import styles from './Services.module.css'

function Services() {
  const services = [
    {
      icon: '⚡',
      title: 'Frontend Development',
      description: 'React, Vue, and modern JavaScript. Clean, maintainable code that scales.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that balances aesthetics with functionality and conversion.'
    },
    {
      icon: '🔧',
      title: 'Technical Architecture',
      description: 'System design that anticipates growth. Scalable, secure, and maintainable.'
    },
    {
      icon: '📊',
      title: 'Performance Optimization',
      description: 'Speed matters. I optimize for load times, responsiveness, and user experience.'
    },
    {
      icon: '🚀',
      title: 'Product Strategy',
      description: 'From MVP to scale. I help define roadmaps and prioritize features that drive value.'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Clear communication, code reviews, and documentation. I make teams better.'
    }
  ]

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>What I Do</h2>
          <p className={styles.subtitle}>
            A focused set of capabilities, executed at a high level
          </p>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
