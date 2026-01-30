import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiUsers, HiGlobe, HiTrendingUp, HiStar } from 'react-icons/hi';
import './Statistics.css';

/**
 * Statistics Section
 * Displays key metrics with animated counters and background GIF
 */
const Statistics = () => {
    const stats = [
        {
            icon: HiUsers,
            value: 500,
            suffix: '+',
            label: 'Enterprise Clients',
            color: 'var(--primary-color)'
        },
        {
            icon: HiGlobe,
            value: 50,
            suffix: '+',
            label: 'Countries Served',
            color: 'var(--secondary-color)'
        },
        {
            icon: HiTrendingUp,
            value: 98,
            suffix: '%',
            label: 'Client Satisfaction',
            color: 'var(--accent-neon-pink)'
        },
        {
            icon: HiStar,
            value: 15,
            suffix: '+',
            label: 'Years of Excellence',
            color: 'var(--accent-neon-green)'
        }
    ];

    return (
        <section id="statistics" className="statistics section">
            {/* Background GIF */}
            <div className="statistics__bg-gif">
                <img
                    src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif"
                    alt="Statistics background"
                    className="statistics__gif"
                />
            </div>

            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="statistics__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="statistics__title">
                        Trusted by Industry Leaders Worldwide
                    </h2>
                    <p className="statistics__subtitle">
                        Our track record speaks for itself
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="statistics__grid">
                    {stats.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Individual Stat Card with Counter Animation
 */
const StatCard = ({ stat, index }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = stat.value;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, stat.value]);

    return (
        <motion.div
            ref={ref}
            className="statistics__card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ '--stat-color': stat.color }}
        >
            <div className="statistics__icon-wrapper">
                <stat.icon className="statistics__icon" />
            </div>
            <div className="statistics__value">
                {count}{stat.suffix}
            </div>
            <div className="statistics__label">{stat.label}</div>
        </motion.div>
    );
};

export default Statistics;
