import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Specs.css';

const Specs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.spec-card');
            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: i * 0.1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const specs = [
        { label: "ACCELERATION", value: "1.9s", desc: "0-60 MPH" },
        { label: "TOP SPEED", value: "250+", desc: "MPH" },
        { label: "POWER", value: "1200", desc: "HP" },
        { label: "TORQUE", value: "1050", desc: "LB-FT" },
        { label: "RANGE", value: "400", desc: "MILES" },
        { label: "BATTERY", value: "120", desc: "KWH" },
    ];

    return (
        <section className="specs" id="performance" ref={sectionRef}>
            <div className="specs__container">
                <div className="specs__header">
                    <h2 className="specs__title">
                        PERFORMANCE <span className="text-gradient-cyan">METRICS</span>
                    </h2>
                    <p className="specs__subtitle">Numbers that redefine the impossible</p>
                </div>

                <div className="specs__grid">
                    {specs.map((spec, index) => (
                        <div key={index} className="spec-card glass-card">
                            <div className="spec-card__label">{spec.label}</div>
                            <div className="spec-card__value">{spec.value}</div>
                            <div className="spec-card__desc">{spec.desc}</div>
                            <div className="spec-card__glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specs;
