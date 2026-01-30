import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function fadeRise(targets, opts = {}) {
  const {
    y = 18,
    duration = 0.9,
    ease = 'power3.out',
    stagger = 0.08,
    delay = 0,
    scrollTrigger,
    clearProps = 'transform,opacity',
  } = opts

  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      ease,
      stagger,
      delay,
      clearProps,
      scrollTrigger,
    },
  )
}

export function scaleIn(targets, opts = {}) {
  const { from = 0.965, duration = 0.85, ease = 'expo.out', delay = 0, scrollTrigger, clearProps = 'transform,opacity' } =
    opts

  return gsap.fromTo(
    targets,
    { opacity: 0, scale: from },
    { opacity: 1, scale: 1, duration, ease, delay, clearProps, scrollTrigger },
  )
}

export function parallaxY(target, opts = {}) {
  const { amount = 80, scrub = false, start = 'top bottom', end = 'bottom top' } = opts

  return gsap.to(target, {
    y: amount,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start,
      end,
      scrub,
    },
  })
}

