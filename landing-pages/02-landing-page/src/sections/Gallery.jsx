import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

const Gallery = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.gallery__item');
            items.forEach((item, i) => {
                gsap.fromTo(item,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop",
    ];

    return (
        <section className="gallery" ref={sectionRef}>
            <div className="gallery__container">
                <div className="gallery__header">
                    <h2 className="gallery__title">
                        VISUAL <span className="text-gradient-cyan">EXPERIENCE</span>
                    </h2>
                    <p className="gallery__desc">
                        Explore the Nocturne R1 from every angle
                    </p>
                </div>

                <div className="gallery__grid">
                    {images.map((img, index) => (
                        <div key={index} className="gallery__item">
                            <div className="gallery__frame">
                                <img src={img} alt={`Nocturne R1 View ${index + 1}`} className="gallery__img" />
                                <div className="gallery__overlay"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
