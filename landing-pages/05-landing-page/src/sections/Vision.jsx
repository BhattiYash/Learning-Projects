import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiGlobe, HiSparkles, HiPaperAirplane } from 'react-icons/hi';
import './Vision.css';

/**
 * Vision Section
 * Showcases the company's future goals and vision
 */
const Vision = () => {
    const visionPoints = [
        {
            icon: HiLightningBolt,
            title: 'Accelerate Innovation',
            description: 'Push the boundaries of what\'s possible with AI and quantum computing'
        },
        {
            icon: HiGlobe,
            title: 'Global Impact',
            description: 'Expand our reach to serve 1 billion users across 100+ countries'
        },
        {
            icon: HiSparkles,
            title: 'Sustainable Tech',
            description: 'Lead the industry in carbon-neutral and eco-friendly solutions'
        },
        {
            icon: HiPaperAirplane,
            title: 'Next-Gen Solutions',
            description: 'Pioneer breakthrough technologies that transform industries'
        }
    ];

    return (
        <section id="vision" className="vision section">
            <div className="container">
                {/* Main Vision Statement */}
                <motion.div
                    className="vision__hero"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="vision__title">
                        Shaping the Future of Technology
                    </h2>
                    <p className="vision__statement">
                        Our vision is to create a world where technology empowers every person
                        and organization to achieve more. We're committed to building innovative
                        solutions that solve tomorrow's challenges today.
                    </p>
                </motion.div>

                {/* Vision Points Grid */}
                <div className="vision__grid">
                    {visionPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            className="vision__card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className="vision__icon-wrapper">
                                <point.icon className="vision__icon" />
                            </div>
                            <h3 className="vision__card-title">{point.title}</h3>
                            <p className="vision__card-description">{point.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="vision__cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="vision__cta-title">Join Us on This Journey</h3>
                    <p className="vision__cta-text">
                        Be part of the technological revolution. Let's build the future together.
                    </p>
                    <motion.button
                        className="vision__cta-btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started Today
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Vision;
