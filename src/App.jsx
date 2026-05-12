import { useState } from 'react'
import './App.css'

function App({ altFont = false }) {
  const [imprintOpen, setImprintOpen] = useState(false)

  return (
    <div className="page">
      <div className="gradient-bg" aria-hidden="true">
        <div className="blob blob-blue" />
        <div className="blob blob-indigo" />
        <div className="blob blob-purple" />
        <div className="blob blob-magenta" />
        <div className="blob blob-cyan" />
        <div className="blob blob-red" />
        <div className="blob blob-pink" />
      </div>

      <main className="content">
        {altFont ? (
          <img
            className={`logo-svg${imprintOpen ? ' logo--hidden' : ''}`}
            src="/FAVICONS (29).png"
            alt="Brise"
          />
        ) : (
          <>
            <div className={`logo${imprintOpen ? ' logo--hidden' : ''}`} aria-label="Blijse">Blijse</div>
            <div className="pronunciation">[blaɪz]</div>
          </>
        )}

        <p className="tagline">
          The parent company for thoughtfully built software applications.
        </p>

        <a
          className="product-link"
          href="https://wrestlingoctopi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wrestling Octopi
          <svg className="product-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 13L13 3M6 3H13V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </main>

      <button
        className="impress-btn"
        onClick={() => setImprintOpen(true)}
      >
        Imprint
      </button>

      {imprintOpen && (
        <div
          className="modal-overlay"
          onClick={() => setImprintOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Imprint"
        >
          <div
            className="modal-glass"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setImprintOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="modal-title">Imprint</h2>
            <div className="modal-body">
              <p><strong>Blijse</strong></p>
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
