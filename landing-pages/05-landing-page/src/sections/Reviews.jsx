import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import GlassCard from '../components/GlassCard';
import './Reviews.css';

/**
 * Reviews Section
 * Testimonial slider with client reviews
 */
const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            name: 'Sarah Johnson',
            position: 'CTO, TechVentures Inc.',
            company: 'TechVentures',
            rating: 5,
            text: 'Working with TechCorp transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs significantly.',
            avatar: '👩‍💼'
        },
        {
            name: 'Michael Chen',
            position: 'CEO, DataFlow Systems',
            company: 'DataFlow',
            rating: 5,
            text: 'The level of expertise and professionalism is unmatched. They delivered a complex data analytics platform ahead of schedule and under budget.',
            avatar: '👨‍💼'
        },
        {
            name: 'Emily Rodriguez',
            position: 'VP Engineering, CloudNine',
            company: 'CloudNine',
            rating: 5,
            text: 'Exceptional service and cutting-edge technology. Our digital transformation journey was seamless thanks to their dedicated team.',
            avatar: '👩‍💻'
        },
        {
            name: 'David Park',
            position: 'Director of IT, GlobalTech',
            company: 'GlobalTech',
            rating: 5,
            text: 'TechCorp\'s cybersecurity solutions gave us peace of mind. Their 24/7 monitoring and rapid response team is world-class.',
            avatar: '👨‍🔧'
        }
    ];

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section id="reviews" className="reviews section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="reviews__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="reviews__title">
                        What Our Clients Say
                    </h2>
                    <p className="reviews__subtitle">
                        Trusted by thousands of satisfied customers worldwide
                    </p>
                </motion.div>

                {/* Review Slider */}
                <div className="reviews__slider">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="reviews__slide"
                        >
                            <GlassCard className="reviews__card" strong>
                                {/* Rating Stars */}
                                <div className="reviews__stars">
                                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                        <HiStar key={i} className="reviews__star" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="reviews__text">
                                    "{reviews[currentIndex].text}"
                                </p>

                                {/* Reviewer Info */}
                                <div className="reviews__author">
                                    <div className="reviews__avatar">
                                        {reviews[currentIndex].avatar}
                                    </div>
                                    <div className="reviews__author-info">
                                        <div className="reviews__author-name">
                                            {reviews[currentIndex].name}
                                        </div>
                                        <div className="reviews__author-position">
                                            {reviews[currentIndex].position}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="reviews__controls">
                        <motion.button
                            className="reviews__control-btn btn-glass"
                            onClick={prevReview}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <HiChevronLeft />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="reviews__dots">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    className={`reviews__dot ${index === currentIndex ? 'reviews__dot--active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>

                        <motion.button
                            className="reviews__control-btn btn-glass"
                            onClick={nextReview}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <HiChevronRight />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
