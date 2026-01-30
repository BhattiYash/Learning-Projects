# Nocturne R1 — Cinematic Hypercar Landing Page

React + Vite single-page landing experience with GSAP + ScrollTrigger and a token-driven cinematic theme (matte black base, lava/electric highlights, glassy depth).

## Run locally

```bash
npm install
npm run dev
```

## Documentation

### Design approach (where to tweak the look)

- **Global tokens**: `src/index.css`
  - Palette: `--c-ink`, `--c-lava`, `--c-electric-red`, `--c-neon`
  - Gradients: `--g-bg`, `--g-lava`, `--g-metal`
  - Type: `--font-display`, `--font-body`, `--fs-*`
  - Motion: `--ease-*`, `--dur-*`
- **Section styling**: `src/App.css`
  - Hero split layout, glass cards, stat tiles, interior depth stack, CTA panel, hover micro-interactions.

If you want a different “DNA” (e.g. more red, less orange), start by adjusting the tokens in `src/index.css` and the gradient layers in `--g-bg`.

### Component map (content + structure)

- `src/App.jsx`: orchestrates sections + GSAP timelines.
- `src/components/Hero.jsx`: full-viewport hero with silhouette placeholder + specs + CTA.
- `src/components/Philosophy.jsx`: storytelling cards + “silhouette study” panel (parallax-ready).
- `src/components/Performance.jsx`: stat tiles + diagonal “speed line” background.
- `src/components/Interior.jsx`: depth stack + floating material tags + feature bullets.
- `src/components/FinalCTA.jsx`: final conversion panel.

To swap copy, edit the text/constants inside each component (look for `CARDS`, `STATS`, `TAGS`).

### Animation system (GSAP)

- **Core helpers**: `src/gsap/gsap.js`
  - `fadeRise(targets, opts)`: opacity + translateY reveal (supports `scrollTrigger`)
  - `scaleIn(targets, opts)`: subtle scale + fade reveal (supports `scrollTrigger`)
  - `parallaxY(target, opts)`: scrubbed scroll parallax
- **Orchestration**: `src/App.jsx`
  - Initial hero entrance timeline.
  - Section entrance triggers for headings/cards/tiles.
  - Parallax for hero background layers and interior stack sheen.

#### Tuning timing / intensity

Common knobs:
- **Reveal distance**: adjust `y` in `fadeRise(...)`.
- **Animation duration**: adjust `duration` in `fadeRise(...)` / `scaleIn(...)`.
- **Parallax strength**: adjust `amount` in `parallaxY(...)`.
- **Trigger points**: adjust `start` / `end` in each `scrollTrigger`.

### Reduced motion behavior

If the user has `prefers-reduced-motion: reduce`, `src/App.jsx` disables ScrollTriggers and clears animation transforms so the page remains readable and stable.
