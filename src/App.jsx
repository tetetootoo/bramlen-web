import { useState } from 'react'
import './App.css'

function App() {
  const [impressumOpen, setImpressumOpen] = useState(false)

  return (
    <div className="page">
      <div className="gradient-bg" aria-hidden="true">
        <div className="blob blob-blue" />
        <div className="blob blob-purple" />
        <div className="blob blob-magenta" />
        <div className="blob blob-cyan" />
        <div className="blob blob-red" />
        <div className="blob blob-pink" />
      </div>

      <main className="content">
        <div className="logo" aria-label="Blise">Blise</div>

        <p className="tagline">
          The parent company for thoughtfully built software applications.
        </p>

        <a
          className="product-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Product
        </a>

        <nav className="footer-nav">
          <button
            className="impress-btn"
            onClick={() => setImpressumOpen(true)}
          >
            Impress
          </button>
        </nav>
      </main>

      {impressumOpen && (
        <div
          className="modal-overlay"
          onClick={() => setImpressumOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Impressum"
        >
          <div
            className="modal-glass"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setImpressumOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="modal-title">Impressum</h2>
            <div className="modal-body">
              <p><strong>Blise</strong></p>
              <p>
                [Street & Number]<br />
                [ZIP Code] [City]<br />
                [Country]
              </p>
              <p>
                E-Mail: <a href="mailto:hello@blise.io">hello@blise.io</a>
              </p>
              <p>
                Responsible for content:<br />
                [Name of responsible person]
              </p>
              <p className="modal-note">
                Liability for content and links: Despite careful review, we assume
                no liability for external links. The respective operators are solely
                responsible for the content of linked pages.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
