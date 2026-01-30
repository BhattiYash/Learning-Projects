import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30; // 30px movement
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(titleRef.current, {
        x: xPos,
        y: yPos,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <header className="hero" >
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bgGlow hero__bgGlow--a" />
        <div className="hero__bgGlow hero__bgGlow--b" />
        <div className="hero__speedlines" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="eyebrow">NOCTURNE MOTOR WORKS · CHASSIS 24 · HOMOLOGATED CONCEPT</div>
          <h1 ref={titleRef} className="hero__title">
            NOCTURNE <span className="hero__titleAccent">R1</span>
          </h1>
          <p className="hero__subtitle">
            Matte carbon skin. Molten edge lighting. Torque vectoring tuned like a camera pan—smooth, controlled, and
            devastating when you commit.
          </p>

          <div className="hero__ctas">
            <a className="btn btn--primary" href="#reserve">
              Request allocation
            </a>
            <a className="btn btn--ghost" href="#design">
              Read the design brief
            </a>
          </div>

          <div className="hero__specs" role="list">
            <div className="spec" role="listitem">
              <div className="spec__k">0–100 km/h</div>
              <div className="spec__v">2.1s</div>
            </div>
            <div className="spec" role="listitem">
              <div className="spec__k">Peak power</div>
              <div className="spec__v">1,250 hp</div>
            </div>
            <div className="spec" role="listitem">
              <div className="spec__k">Tri-motor</div>
              <div className="spec__v">vectoring</div>
            </div>
            <div className="spec" role="listitem">
              <div className="spec__k">Active aero</div>
              <div className="spec__v">venturi floor</div>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="car">
            <div className="car__glow" />
            <div className="car__silhouette" />
            <div className="car__sheen" />
            <div className="car__photoLayer" />
          </div>
          <div className="hero__badge">
            <div className="hero__badgeTop">ENGINEERED</div>
            <div className="hero__badgeMid">for</div>
            <div className="hero__badgeBot">DEPTH</div>
          </div>
        </div>
      </div>

      <a className="scrollCue" href="#design" aria-label="Scroll to design section">
        <span className="scrollCue__label">SCROLL</span>
        <span className="scrollCue__track" aria-hidden="true">
          <span className="scrollCue__dot" />
        </span>
      </a>
    </header>
  )
}

