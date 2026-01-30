const TAGS = [
  { k: 'CARBON', v: 'forged weave', x: '8%', y: '27%' },
  { k: 'ALLOY', v: 'knurled toggles', x: '45%', y: '15%' },
  { k: 'GLASS', v: 'holo HUD', x: '44%', y: '90%' },
]

export default function Interior() {
  return (
    <section className="section section--interior" id="interior">
      <div className="container">
        <div className="section__head">
          <div className="eyebrow">INTERIOR</div>
          <h2 className="h2">
            Glass, metal, and a <span className="textGlow">quiet</span> kind of precision.
          </h2>
          <p className="lede">
            The cockpit is engineered like a control room: layered depth, clean sight-lines, and information that only appears when it matters.
          </p>
        </div>

        <div className="interior">
          <div className="stack" aria-hidden="true">
            <div className="stack__card stack__card--a" />
            <div className="stack__card stack__card--b" />
            <div className="stack__card stack__card--c" />
            <div className="stack__shine" />
          </div>

          <div className="tags" aria-hidden="true">
            {TAGS.map((t) => (
              <div
                key={t.k}
                className="tag"
                style={{
                  left: t.x,
                  top: t.y,
                }}
              >
                <div className="tag__k">{t.k}</div>
                <div className="tag__v">{t.v}</div>
              </div>
            ))}
          </div>

          <div className="interior__copy">
            <div className="bullet">
              <div className="bullet__dot" aria-hidden="true" />
              <div>
                <div className="bullet__t">Depth that reads instantly</div>
                <div className="bullet__p">A layered glass stack that keeps the horizon clear and the data calm.</div>
              </div>
            </div>
            <div className="bullet">
              <div className="bullet__dot" aria-hidden="true" />
              <div>
                <div className="bullet__t">Tactile switchgear</div>
                <div className="bullet__p">Knurled metal controls where your hands naturally fall—no hunting in menus.</div>
              </div>
            </div>
            <div className="bullet">
              <div className="bullet__dot" aria-hidden="true" />
              <div>
                <div className="bullet__t">Silent UI</div>
                <div className="bullet__p">The HUD pulses on intent (brake, load, apex) and stays dark otherwise.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

