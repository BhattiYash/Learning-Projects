import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(textRef.current.querySelectorAll('.hero__char'),
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out", delay: 0.2 }
        );

        tl.fromTo('.hero__subtitle',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.5"
        );

        gsap.to('.hero__bg-image', {
            scale: 1.1,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

    }, []);

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero__bg">
                <div className="hero__bg-image"></div>
                <div className="hero__overlay"></div>
            </div>

            <div className="hero__content">
                <h1 className="hero__title" ref={textRef}>
                    {/* Breaking text for animation */}
                    {"NOCTURNER1".split('').map((char, i) => (
                        <span key={i} className={`hero__char ${i >= 8 ? 'text-cyan' : ''}`}>
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
                <p className="hero__subtitle">
                    BEYOND THE HORIZON OF PERFORMANCE
                </p>

                <div className="hero__specs-mini">
                    <div className="spec-item">
                        <span className="spec-item__val">1.9s</span>
                        <span className="spec-item__label">0-60 MPH</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-item__val">250+</span>
                        <span className="spec-item__label">TOP SPEED</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-item__val">1200</span>
                        <span className="spec-item__label">HP</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <span>SCROLL</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
