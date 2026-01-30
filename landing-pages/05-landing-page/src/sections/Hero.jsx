import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiPlay, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Hero.css';

/**
 * Hero Section Component
 * Features: Animated carousel, parallax scrolling, gradient text
 */
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef(null);

    // Carousel slides data
    const slides = [
        {
            badge: '🚀 Innovation',
            title: 'Transform Your Business',
            highlight: 'Cutting-Edge Tech',
            subtitle: 'We deliver innovative AI-powered solutions that drive growth, efficiency, and digital transformation for enterprises worldwide.',
            gif: 'https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif' // Tech/AI animation
        },
        {
            badge: '⚡ Performance',
            title: 'Scale Your Operations',
            highlight: 'Cloud Solutions',
            subtitle: 'Harness the power of cloud computing with our scalable infrastructure that grows with your business needs.',
            gif: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif' // Cloud/network animation
        },
        {
            badge: '🔒 Security',
            title: 'Protect Your Data',
            highlight: 'Enterprise Security',
            subtitle: 'Advanced cybersecurity solutions with 24/7 monitoring to keep your business safe from evolving threats.',
            gif: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif' // Security/lock animation
        },
        {
            badge: '📊 Analytics',
            title: 'Data-Driven Insights',
            highlight: 'Smart Analytics',
            subtitle: 'Transform raw data into actionable insights with our advanced machine learning and analytics platform.',
            gif: 'https://media.giphy.com/media/xT9C25UNTwfZuk85WP/giphy.gif' // Data/analytics animation
        }
    ];

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    // Parallax effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="hero" className="hero" ref={sectionRef}>
            {/* Animated Background Elements */}
            <div className="hero__background">
                <motion.div
                    className="hero__bg-gradient hero__bg-gradient--1"
                    style={{ y: y1 }}
                />
                <motion.div
                    className="hero__bg-gradient hero__bg-gradient--2"
                    style={{ y: y2 }}
                />

                {/* Floating particles */}
                <div className="hero__particles">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="hero__particle"
                            initial={{
                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                                scale: Math.random() * 0.5 + 0.5
                            }}
                            animate={{
                                y: [null, Math.random() * -100 - 50],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Carousel Content */}
            <motion.div
                className="hero__content container"
                style={{ opacity }}
            >
                <div className="hero__carousel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            className="hero__slide"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Left side - Text content */}
                            <div className="hero__text-content">
                                {/* Badge */}
                                <motion.div
                                    className="hero__badge"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <span className="hero__badge-text">{slides[currentSlide].badge}</span>
                                </motion.div>

                                {/* Main Heading */}
                                <motion.h1
                                    className="hero__title"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    {slides[currentSlide].title}
                                    <br />
                                    With <span className="hero__title-highlight">{slides[currentSlide].highlight}</span>
                                </motion.h1>

                                {/* Subtitle */}
                                <motion.p
                                    className="hero__subtitle"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    className="hero__cta"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <motion.button
                                        className="hero__cta-primary btn-primary"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get Started
                                        <HiArrowRight className="hero__cta-icon" />
                                    </motion.button>

                                    <motion.button
                                        className="hero__cta-secondary btn-glass"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <HiPlay className="hero__cta-icon" />
                                        Watch Demo
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Right side - GIF */}
                            <motion.div
                                className="hero__gif-container"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="hero__gif-wrapper glass">
                                    <img
                                        src={slides[currentSlide].gif}
                                        alt={slides[currentSlide].title}
                                        className="hero__gif"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Controls */}
                    <div className="hero__carousel-controls">
                        <motion.button
                            className="hero__carousel-btn hero__carousel-btn--prev"
                            onClick={prevSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <HiChevronLeft />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="hero__carousel-dots">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`hero__carousel-dot ${index === currentSlide ? 'hero__carousel-dot--active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>

                        <motion.button
                            className="hero__carousel-btn hero__carousel-btn--next"
                            onClick={nextSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <HiChevronRight />
                        </motion.button>
                    </div>
                </div>

                {/* Stats Preview */}
                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="hero__stat">
                        <div className="hero__stat-value">500+</div>
                        <div className="hero__stat-label">Enterprise Clients</div>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <div className="hero__stat-value">98%</div>
                        <div className="hero__stat-label">Client Satisfaction</div>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <div className="hero__stat-value">24/7</div>
                        <div className="hero__stat-label">Global Support</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero__scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="hero__scroll-mouse"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
