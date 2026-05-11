import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const isAlt = window.location.pathname.startsWith('/alt')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App altFont={isAlt} />
  </StrictMode>,
)
