import { useState } from 'react'
import './App.css'

function App({ altFont = false }) {
  const [imprintOpen, setImprintOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <div className="page">
      <main className={`content${imprintOpen || privacyOpen ? ' content--hidden' : ''}`}>
        {altFont ? (
          <img
            className="logo-svg"
            src="/FAVICONS (29).png"
            alt="Bramlen"
          />
        ) : (
          <div className="logo" aria-label="Bramlen">Bramlen</div>
        )}

        <p className="tagline">
          The mother of thoughtfully built software applications.
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

      <div className={`footer-btns${imprintOpen || privacyOpen ? ' footer-btns--hidden' : ''}`}>
        <button className="footer-btn" onClick={() => setImprintOpen(true)}>Imprint</button>
        <span className="footer-sep">·</span>
        <button className="footer-btn" onClick={() => setPrivacyOpen(true)}>Privacy Policy</button>
      </div>

      {imprintOpen && (
        <div
          className="modal-overlay"
          onClick={() => setImprintOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Imprint"
        >
          <div className="modal-glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setImprintOpen(false)} aria-label="Close">×</button>
            <h2 className="modal-title">Imprint</h2>
            <div className="modal-body">
              <p>Bramlen by Half Odd</p>
              <p>
                Købmagergade 45, 3tv.<br />
                1150 Copenhagen<br />
                Denmark
              </p>
              <p>CVR-/SE-Nr. 46480023</p>
              <p>
                E-Mail: <a href="mailto:hi@bramlen.com">hi@bramlen.com</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {privacyOpen && (
        <div
          className="modal-overlay"
          onClick={() => setPrivacyOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Privacy Policy"
        >
          <div className="modal-glass modal-glass--large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setPrivacyOpen(false)} aria-label="Close">×</button>
            <h2 className="modal-title">Privacy Policy</h2>
            <div className="modal-body">
              <p>
                Bramlen, Købmagergade 45, 3tv., 1150 Copenhagen, Denmark is the data controller for this website.
              </p>
              <p>
                When you visit this website, our hosting provider automatically records standard server log data —
                including your IP address, browser type, and pages visited. This data is used solely for the
                technical operation and security of the website and is not used to identify you personally.
              </p>
              <p>
                We process this data on the basis of our legitimate interest in operating a secure and functional
                website (GDPR Art. 6(1)(f)). Server logs are retained for up to 30 days and then automatically deleted.
              </p>
              <p>
                We use a third-party hosting provider to serve this website. They process server log data on our
                behalf under a data processing agreement and do not use it for their own purposes.
              </p>
              <p>
                Under GDPR you have the right to access, correct, delete, or restrict processing of your personal
                data, as well as the right to data portability and to object to processing. To exercise any of
                these rights, contact us at <a href="mailto:hi@bramlen.com">hi@bramlen.com</a>.
              </p>
              <p>
                You also have the right to lodge a complaint with the Danish Data Protection Agency:<br />
                Datatilsynet — <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">datatilsynet.dk</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
