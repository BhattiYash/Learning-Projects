import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__brand">
                    <h3 className="footer__logo">NOCTURNE R1</h3>
                    <p className="footer__tagline">The future of stealth performance</p>
                </div>

                <div className="footer__links">
                    <div className="footer__column">
                        <h4 className="footer__heading">Explore</h4>
                        <a href="#design" className="footer__link">Design</a>
                        <a href="#performance" className="footer__link">Performance</a>
                        <a href="#vision" className="footer__link">Vision</a>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Connect</h4>
                        <a href="#" className="footer__link">Instagram</a>
                        <a href="#" className="footer__link">Twitter</a>
                        <a href="#" className="footer__link">YouTube</a>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Legal</h4>
                        <a href="#" className="footer__link">Privacy</a>
                        <a href="#" className="footer__link">Terms</a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">© 2026 Nocturne Motors. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
