import { useLayoutEffect, useRef } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Philosophy from './components/Philosophy.jsx'
import Performance from './components/Performance.jsx'
import Interior from './components/Interior.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import { ScrollTrigger, fadeRise, gsap, parallaxY, scaleIn } from './gsap/gsap.js'

function App() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        reduce: '(prefers-reduced-motion: reduce)',
        ok: '(prefers-reduced-motion: no-preference)',
        desktop: '(min-width: 981px)',
      },
      (context) => {
        const { reduce, desktop } = context.conditions

        const ctx = gsap.context(() => {
          if (reduce) {
            ScrollTrigger.getAll().forEach((t) => t.kill())
            gsap.set(
              [
                '.nav',
                '.hero__copy > *',
                '.car',
                '.hero__badge',
                '.scrollCue',
                '.card',
                '.tile',
                '.stack__card',
                '.tag',
                '.bullet',
                '.ctaCard',
                '.philo__lineProgress',
              ],
              { opacity: 1, clearProps: 'all' },
            )
            return
          }

          // NAV: soft fade + glass on scroll
          fadeRise('.nav', { y: -10, duration: 0.75, stagger: 0 })
          gsap.fromTo(
            '.nav',
            { '--navA': 0.06, '--navB': 0.12, '--navBlur': '8px' },
            {
              '--navA': 0.18,
              '--navB': 0.18,
              '--navBlur': '14px',
              ease: 'none',
              scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=280', scrub: true },
            },
          )

          // HERO: entrance
          gsap
            .timeline({ defaults: { ease: 'power3.out' } })
            .add(
              fadeRise('.hero__copy > *', {
                y: 26,
                duration: 1.1,
                stagger: 0.09,
              }),
              0,
            )
            .add(
              scaleIn('.car', {
                from: 0.9,
                duration: 1.3,
                ease: 'expo.out',
                delay: 0.1,
              }),
              0.1,
            )
            .add(
              fadeRise('.hero__badge', {
                y: 10,
                duration: 0.9,
                delay: 0.4,
                stagger: 0,
              }),
              0,
            )

          // HERO: subtle parallax
          gsap.to('.hero__speedlines', {
            y: 90,
            ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
          })
          gsap.to('.hero__bgGlow--a', {
            y: 70,
            ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
          })
          gsap.to('.hero__bgGlow--b', {
            y: 110,
            ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
          })
          parallaxY('.car__photoLayer', { amount: 60 })

          gsap.fromTo(
            '.scrollCue',
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.45 },
          )
          gsap.to('.scrollCue__dot', { y: 10, duration: 1.15, ease: 'power1.inOut', yoyo: true, repeat: -1 })

          // DESIGN: cards + panel
          fadeRise('.section--design .section__head > *', {
            y: 16,
            duration: 1.0,
            stagger: 0.08,
            scrollTrigger: { trigger: '.section--design', start: 'top 75%' },
          })
          fadeRise('.section--design .card', {
            y: 18,
            duration: 0.9,
            stagger: 0.12,
            scrollTrigger: { trigger: '.philo__cards', start: 'top 78%' },
          })
          gsap.to('.panel__frame', {
            scale: 1.02,
            y: 12,
            ease: 'none',
            scrollTrigger: { trigger: '.philo__panel', start: 'top 85%', end: 'bottom 10%', scrub: true },
          })
          gsap.fromTo(
            '.philo__lineProgress',
            { scaleY: 0, transformOrigin: '50% 0%' },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: { trigger: '.section--design', start: 'top 70%', end: 'bottom 35%', scrub: true },
            },
          )
          gsap.to('.philo__dot', {
            y: 260,
            ease: 'none',
            scrollTrigger: { trigger: '.section--design', start: 'top 70%', end: 'bottom 35%', scrub: true },
          })
          if (desktop) {
            gsap.to('.philo__rail', {
              opacity: 1,
              scrollTrigger: { trigger: '.section--design', start: 'top 80%', end: 'bottom 20%', scrub: true },
            })
          }

          // PERFORMANCE: tiles + underline
          fadeRise('.section--perf .section__head > *', {
            y: 16,
            duration: 1.0,
            stagger: 0.08,
            scrollTrigger: { trigger: '.section--perf', start: 'top 75%' },
          })
          fadeRise('.tile', {
            y: 18,
            duration: 1.05,
            stagger: 0.09,
            scrollTrigger: { trigger: '.stats', start: 'top 80%' },
          })
          gsap.fromTo(
            '.tile__underline',
            { scaleX: 0, transformOrigin: '0% 50%' },
            {
              scaleX: 1,
              duration: 1.1,
              ease: 'power3.out',
              stagger: 0.08,
              scrollTrigger: { trigger: '.stats', start: 'top 80%' },
            },
          )
          if (desktop) {
            // Performance gallery: cinematic horizontal drift
            gsap.to('.perfGallery__track', {
              xPercent: -40,
              ease: 'none',
              scrollTrigger: {
                trigger: '.perfGallery',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            })
          }

          // INTERIOR: depth stack
          fadeRise('.section--interior .section__head > *', {
            y: 16,
            duration: 1.0,
            stagger: 0.08,
            scrollTrigger: { trigger: '.section--interior', start: 'top 75%' },
          })
          scaleIn('.stack', {
            from: 0.965,
            duration: 0.95,
            ease: 'expo.out',
            scrollTrigger: { trigger: '.stack', start: 'top 80%' },
          })
          gsap.to('.stack__card--a', {
            y: 38,
            ease: 'none',
            scrollTrigger: { trigger: '.stack', start: 'top bottom', end: 'bottom top', scrub: true },
          })
          gsap.to('.stack__card--b', {
            y: 22,
            ease: 'none',
            scrollTrigger: { trigger: '.stack', start: 'top bottom', end: 'bottom top', scrub: true },
          })
          parallaxY('.stack__shine', { amount: 95 })
          fadeRise('.tag', {
            y: 10,
            duration: 0.75,
            stagger: 0.08,
            scrollTrigger: { trigger: '.stack', start: 'top 72%' },
          })
          fadeRise('.bullet', {
            y: 12,
            duration: 0.85,
            stagger: 0.08,
            scrollTrigger: { trigger: '.interior__copy', start: 'top 82%' },
          })

          // CTA: arrive + glow
          fadeRise('.section--cta .section__head > *', {
            y: 14,
            duration: 0.8,
            stagger: 0.08,
            scrollTrigger: { trigger: '.section--cta', start: 'top 75%' },
          })
          scaleIn('.ctaCard', {
            from: 0.96,
            duration: 0.95,
            ease: 'expo.out',
            scrollTrigger: { trigger: '.ctaCard', start: 'top 82%' },
          })
          gsap.to('.cta__ring', {
            rotate: 12,
            ease: 'none',
            scrollTrigger: { trigger: '.section--cta', start: 'top bottom', end: 'bottom top', scrub: true },
          })
        }, rootRef)

        return () => ctx.revert()
      },
    )

    return () => mm.revert()
  }, [])

  return (
    <div ref={rootRef} className="page">
      <Navbar />
      <main id="content">
      <Hero />
      <Philosophy />
      <Performance />
      <Interior />
      <FinalCTA />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <div className="footer__mark" aria-hidden="true" />
            <div>
              <div className="footer__title">NOCTURNE R1</div>
              <div className="footer__meta">Cinematic hypercar concept landing page.</div>
            </div>
          </div>

          <div className="footer__links">
            <a className="footer__link" href="#design">
              Design
            </a>
            <a className="footer__link" href="#performance">
              Performance
            </a>
            <a className="footer__link" href="#interior">
              Interior
            </a>
            <a className="footer__link" href="#reserve">
              Reserve
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
