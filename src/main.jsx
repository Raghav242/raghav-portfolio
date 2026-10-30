import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { recordVisit } from './lib/visits.js'
import './index.css'

// Outside React so StrictMode's double-render can't count a visit twice.
recordVisit()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
