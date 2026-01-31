import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Philosophy.css';

const Philosophy = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lines = gsap.utils.toArray('.philo__text-line');
            lines.forEach((line) => {
                gsap.fromTo(line,
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 1, scrollTrigger: {
                            trigger: line,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            gsap.to('.philo__image-reveal', {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: '.philo__image-wrap',
                    start: "top 70%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="philo" id="design" ref={sectionRef}>
            <div className="philo__container">
                <div className="philo__content">
                    <h2 className="philo__heading">
                        <span className="philo__text-line block">DESIGNED</span>
                        <span className="philo__text-line block text-gradient-cyan"> IN THE DARK</span>
                    </h2>
                    <div className="philo__body">
                        <p className="philo__text-line">
                            The Nocturne R1 isn't just a car; it's a shadow in motion.
                            Sculpted for aerodynamics, refined for stealth.
                        </p>
                        <p className="philo__text-line">
                            Every curve serves a purpose. Every surface reflects the night.
                            Glass-infused carbon fiber bodywork meets adaptive aerodynamics
                            to cut through the air with zero resistance.
                        </p>
                    </div>
                </div>

                <div className="philo__visual">
                    <div className="philo__image-wrap">
                        <div className="philo__image-reveal">
                            <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop" alt="Nocturne R1 Rear Profile" className="philo__img" />
                        </div>
                    </div>
                    <div className="glass-card philo__stat-card">
                        <span className="philo__stat-label">DRAG COEFFICIENT</span>
                        <span className="philo__stat-val">0.19 Cd</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
