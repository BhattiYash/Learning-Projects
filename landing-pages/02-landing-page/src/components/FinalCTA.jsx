export default function FinalCTA() {
  return (
    <section className="section section--cta" id="reserve">
      <div className="cta__bg" aria-hidden="true">
        <div className="cta__wash" />
        <div className="cta__ring" />
      </div>

      <div className="container cta__inner">
        <div className="cta__left">
          <div className="eyebrow">LIMITED RUN</div>
          <h2 className="h2">
            Request an <span className="textLava">allocation</span>.
          </h2>
          <p className="lede">
            Twenty-four chassis. The deposit doesn’t buy a car—it starts a conversation with engineering and design.
          </p>
        </div>

        <div className="cta__right">
          <div className="ctaCard">
            <div className="ctaCard__top">
              <div className="ctaCard__title">NOCTURNE R1 · Allocation</div>
              <div className="ctaCard__chip">24 chassis</div>
            </div>
            <div className="ctaCard__meta">
              Deposit: <strong>Refundable</strong> · Build review: <strong>48 hours</strong>
            </div>
            <div className="ctaCard__actions">
              <a className="btn btn--primary btn--wide" href="#top">
                Request allocation
              </a>
              <a className="btn btn--ghost btn--wide" href="#design">
                Review design brief
              </a>
            </div>
            <div className="ctaCard__fine">
              One confirmation email only. No mailing list, no noise.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

