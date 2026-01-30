import React from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiUsers } from 'react-icons/hi';
import GlassCard from '../components/GlassCard';
import './Events.css';

/**
 * Events Section
 * Showcases tech events organized by the company
 */
const Events = () => {
    const events = [
        {
            title: 'AI Summit 2026',
            date: 'March 15-17, 2026',
            location: 'San Francisco, CA',
            attendees: '5000+',
            description: 'Join industry leaders to explore the future of artificial intelligence and machine learning.',
            tag: 'Upcoming'
        },
        {
            title: 'Cloud Innovation Conference',
            date: 'May 22-24, 2026',
            location: 'New York, NY',
            attendees: '3000+',
            description: 'Discover cutting-edge cloud technologies and network with top cloud architects.',
            tag: 'Upcoming'
        },
        {
            title: 'Cybersecurity Expo',
            date: 'July 10-12, 2026',
            location: 'Austin, TX',
            attendees: '4000+',
            description: 'Learn about the latest security threats and defense strategies from experts.',
            tag: 'Upcoming'
        },
        {
            title: 'DevOps World',
            date: 'September 5-7, 2026',
            location: 'Seattle, WA',
            attendees: '6000+',
            description: 'Master DevOps practices and tools with hands-on workshops and keynotes.',
            tag: 'Upcoming'
        }
    ];

    return (
        <section id="events" className="events section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="events__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="events__title">
                        Tech Events & Conferences
                    </h2>
                    <p className="events__subtitle">
                        Join us at world-class technology events shaping the future
                    </p>
                </motion.div>

                {/* Events Grid */}
                <div className="events__grid">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <GlassCard className="events__card">
                                {/* Event Tag */}
                                <div className="events__tag">{event.tag}</div>

                                {/* Event Title */}
                                <h3 className="events__card-title">{event.title}</h3>

                                {/* Event Info */}
                                <div className="events__info">
                                    <div className="events__info-item">
                                        <HiCalendar className="events__info-icon" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="events__info-item">
                                        <HiLocationMarker className="events__info-icon" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="events__info-item">
                                        <HiUsers className="events__info-icon" />
                                        <span>{event.attendees} Attendees</span>
                                    </div>
                                </div>

                                {/* Event Description */}
                                <p className="events__description">{event.description}</p>

                                {/* CTA Button */}
                                <motion.button
                                    className="events__cta btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Register Now
                                </motion.button>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
