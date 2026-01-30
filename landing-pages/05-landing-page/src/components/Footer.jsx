import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import './Footer.css';

/**
 * Footer Component
 * Multi-column footer with social links and contact info
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Blog', href: '#' },
        ],
        solutions: [
            { name: 'AI Solutions', href: '#' },
            { name: 'Cloud Services', href: '#' },
            { name: 'Data Analytics', href: '#' },
            { name: 'Cybersecurity', href: '#' },
        ],
        support: [
            { name: 'Documentation', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Contact Us', href: '#' },
            { name: 'Status', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FaGithub, href: '#', label: 'GitHub' },
        { icon: FaFacebook, href: '#', label: 'Facebook' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
    ];

    return (
        <footer className="footer">
            <div className="footer__container container">
                {/* Top Section */}
                <div className="footer__top">
                    {/* Brand Column */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-text">TechCorp</span>
                            <span className="footer__logo-dot">.</span>
                        </div>
                        <p className="footer__tagline">
                            Innovating the future with cutting-edge technology solutions.
                        </p>

                        {/* Social Links */}
                        <div className="footer__social">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    className="footer__social-link"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, y: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer__links-grid">
                        {/* Company Links */}
                        <div className="footer__links-column">
                            <h4 className="footer__links-title">Company</h4>
                            <ul className="footer__links-list">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer__link">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions Links */}
                        <div className="footer__links-column">
                            <h4 className="footer__links-title">Solutions</h4>
                            <ul className="footer__links-list">
                                {footerLinks.solutions.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer__link">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div className="footer__links-column">
                            <h4 className="footer__links-title">Support</h4>
                            <ul className="footer__links-list">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer__link">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer__links-column">
                            <h4 className="footer__links-title">Contact</h4>
                            <ul className="footer__contact-list">
                                <li className="footer__contact-item">
                                    <HiMail className="footer__contact-icon" />
                                    <span>info@techcorp.com</span>
                                </li>
                                <li className="footer__contact-item">
                                    <HiPhone className="footer__contact-icon" />
                                    <span>+1 (555) 123-4567</span>
                                </li>
                                <li className="footer__contact-item">
                                    <HiLocationMarker className="footer__contact-icon" />
                                    <span>San Francisco, CA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} TechCorp. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <a href="#" className="footer__legal-link">Privacy Policy</a>
                        <span className="footer__legal-divider">•</span>
                        <a href="#" className="footer__legal-link">Terms of Service</a>
                        <span className="footer__legal-divider">•</span>
                        <a href="#" className="footer__legal-link">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
