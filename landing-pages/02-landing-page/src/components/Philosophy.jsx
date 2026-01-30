const CARDS = [
  {
    k: 'AERO',
    title: 'Air doesn’t flow. It’s directed.',
    body: 'Venturi tunnels and pressure bridges turn the underbody into grip. We design the voids as carefully as the skin.',
  },
  {
    k: 'MATERIAL',
    title: 'Forged carbon. Brushed alloy. Zero gloss.',
    body: 'A matte exterior that drinks light. Heat-tinted details where the eye expects danger, not decoration.',
  },
  {
    k: 'LIGHT',
    title: 'Light as telemetry.',
    body: 'Edge glows communicate intent: braking, charging, and dynamic balance. Beauty that carries meaning.',
  },
  {
    k: 'HUMAN',
    title: 'Touchpoints over touchscreen.',
    body: 'Cold metal toggles. Wrapped grip zones. A cockpit that feels engineered, not app-designed.',
  },
]

export default function Philosophy() {
  return (
    <section className="section section--design" id="design">
      <div className="container">
        <div className="section__head">
          <div className="eyebrow">DESIGN PHILOSOPHY</div>
          <h2 className="h2">
            A marque built on <span className="textGlow">silence</span> and <span className="textLava">heat</span>.
          </h2>
          <p className="lede">
            The R1 is drawn like a thriller: restrained framing, then motion. Every surface either cools, grips, or disappears.
          </p>
        </div>

        <div className="philo">
          <div className="philo__rail" aria-hidden="true">
            <div className="philo__dot" />
            <div className="philo__line">
              <div className="philo__lineProgress" />
            </div>
          </div>

          <div className="philo__cards">
            {CARDS.map((c) => (
              <article key={c.k} className="card card--glass">
                <div className="card__k">{c.k}</div>
                <h3 className="card__title">{c.title}</h3>
                <p className="card__body">{c.body}</p>
              </article>
            ))}
          </div>

          <div className="philo__panel" aria-hidden="true">
            <div className="panel">
              <div className="panel__frame" />
              <div className="panel__label">SILHOUETTE STUDY · R1</div>
              <div className="panel__chip">aero surfaces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

