export default function Navbar() {
  return (
    <div className="navWrap">
      <a className="skipLink" href="#content">
        Skip to content
      </a>

      <nav className="nav" aria-label="Primary">
        <div className="container nav__inner">
          <a className="nav__brand" href="#top" aria-label="Nocturne R1 home">
            <span className="nav__mark" aria-hidden="true" />
            <span className="nav__wordmark">
              <span className="nav__name">NOCTURNE</span>
              <span className="nav__model">R1</span>
            </span>
          </a>

          <div className="nav__links" aria-label="Sections">
            <a className="nav__link" href="#design">
              Design
            </a>
            <a className="nav__link" href="#performance">
              Performance
            </a>
            <a className="nav__link" href="#interior">
              Interior
            </a>
          </div>

          <div className="nav__actions">
            <a className="btn btn--ghost nav__btn" href="#reserve">
              Request allocation
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

