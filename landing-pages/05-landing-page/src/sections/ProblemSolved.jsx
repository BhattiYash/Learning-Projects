import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiChartBar, HiShieldCheck, HiClock } from 'react-icons/hi';
import GlassCard from '../components/GlassCard';
import './ProblemSolved.css';

/**
 * ProblemSolved Section
 * Showcases real-world problems the company solves with GIF animations
 */
const ProblemSolved = () => {
    const problems = [
        {
            icon: HiLightBulb,
            title: 'Digital Transformation',
            description: 'Modernize legacy systems with AI-powered solutions that scale with your business growth.',
            color: 'var(--primary-color)',
            gif: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif'
        },
        {
            icon: HiChartBar,
            title: 'Data Analytics',
            description: 'Transform raw data into actionable insights with advanced machine learning algorithms.',
            color: 'var(--secondary-color)',
            gif: 'https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif'
        },
        {
            icon: HiShieldCheck,
            title: 'Cybersecurity',
            description: 'Protect your digital assets with enterprise-grade security solutions and 24/7 monitoring.',
            color: 'var(--accent-neon-pink)',
            gif: 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif'
        },
        {
            icon: HiClock,
            title: 'Process Automation',
            description: 'Streamline operations and reduce costs with intelligent automation and workflow optimization.',
            color: 'var(--accent-neon-green)',
            gif: 'https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif'
        }
    ];

    return (
        <section id="problem-solved" className="problem-solved section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="problem-solved__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="problem-solved__title">
                        Real-World Solutions for Modern Challenges
                    </h2>
                    <p className="problem-solved__subtitle">
                        We tackle the most complex technological challenges facing businesses today
                    </p>
                </motion.div>

                {/* Problems Grid */}
                <div className="problem-solved__grid">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <GlassCard className="problem-solved__card">
                                {/* GIF Background */}
                                <div className="problem-solved__gif-bg">
                                    <img src={problem.gif} alt={problem.title} className="problem-solved__gif" />
                                </div>

                                {/* Content overlay */}
                                <div className="problem-solved__content">
                                    <div
                                        className="problem-solved__icon-wrapper"
                                        style={{ '--icon-color': problem.color }}
                                    >
                                        <problem.icon className="problem-solved__icon" />
                                    </div>
                                    <h3 className="problem-solved__card-title">{problem.title}</h3>
                                    <p className="problem-solved__card-description">{problem.description}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolved;
