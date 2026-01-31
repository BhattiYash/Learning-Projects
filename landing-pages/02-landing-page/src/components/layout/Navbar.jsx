import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
    const navRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Initial fade in
        gsap.fromTo(navRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="navbar__glass glass-panel">
                <div className="navbar__brand">
                    <span className="navbar__logo-text">NOCTURNE</span>
                </div>

                <div className="navbar__menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`navbar__links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#design" className="navbar__link" onClick={() => setMenuOpen(false)}>Design</a></li>
                    <li><a href="#performance" className="navbar__link" onClick={() => setMenuOpen(false)}>Performance</a></li>
                    <li><a href="#vision" className="navbar__link" onClick={() => setMenuOpen(false)}>Vision</a></li>
                </ul>

                <div className="navbar__actions">
                    <button className="btn-reserve">
                        Reserve R1
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
