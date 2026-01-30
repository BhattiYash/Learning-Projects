import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

/**
 * Navbar Component
 * Sticky navigation with glassmorphism effect
 * Features: Mobile hamburger menu, smooth scroll to sections
 */
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Track scroll position for navbar background effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation links
    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Solutions', href: '#problem-solved' },
        { name: 'Stats', href: '#statistics' },
        { name: 'Partners', href: '#mncs' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Events', href: '#events' },
        { name: 'Vision', href: '#vision' },
    ];

    // Close mobile menu when link is clicked
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar__container container">
                {/* Logo */}
                <motion.div
                    className="navbar__logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="navbar__logo-text">TechCorp</span>
                    <span className="navbar__logo-dot">.</span>
                </motion.div>

                {/* Desktop Navigation Links */}
                <ul className="navbar__links">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a href={link.href} className="navbar__link">
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                    className="navbar__cta btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>

                {/* Mobile Menu Toggle */}
                <button
                    className="navbar__mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}
                initial={false}
                animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
            >
                <ul className="navbar__mobile-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="navbar__mobile-link"
                                onClick={handleLinkClick}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="navbar__mobile-cta btn-primary" onClick={handleLinkClick}>
                            Get Started
                        </button>
                    </li>
                </ul>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
