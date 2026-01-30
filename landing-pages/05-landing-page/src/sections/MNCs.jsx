import React from 'react';
import { motion } from 'framer-motion';
import './MNCs.css';

/**
 * MNCs Section
 * Displays logos of big companies and collaborations
 * Features infinite marquee animation
 */
const MNCs = () => {
    // Company logos (using text placeholders - can be replaced with actual logos)
    const companies = [
        'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta',
        'IBM', 'Oracle', 'SAP', 'Salesforce', 'Adobe',
        'Intel', 'NVIDIA', 'Tesla', 'SpaceX', 'Netflix'
    ];

    return (
        <section id="mncs" className="mncs section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="mncs__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mncs__title">
                        Trusted by Global Industry Leaders
                    </h2>
                    <p className="mncs__subtitle">
                        Partnering with Fortune 500 companies to drive innovation
                    </p>
                </motion.div>

                {/* Infinite Marquee */}
                <div className="mncs__marquee-container">
                    <div className="mncs__marquee">
                        {/* First set of logos */}
                        {companies.map((company, index) => (
                            <div key={`${company}-1-${index}`} className="mncs__logo-card">
                                <span className="mncs__logo-text">{company}</span>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {companies.map((company, index) => (
                            <div key={`${company}-2-${index}`} className="mncs__logo-card">
                                <span className="mncs__logo-text">{company}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Collaborations Section */}
                <motion.div
                    className="mncs__collaborations"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="mncs__collab-title">Strategic Partnerships</h3>
                    <div className="mncs__collab-grid">
                        {companies.slice(0, 6).map((company, index) => (
                            <motion.div
                                key={company}
                                className="mncs__collab-card glass"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="mncs__collab-name">{company}</span>
                                <span className="mncs__collab-badge">Partner</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MNCs;
