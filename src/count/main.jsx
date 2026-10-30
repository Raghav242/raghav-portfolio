import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './Dashboard.jsx'
import '../index.css'
import './Dashboard.css'

// Deliberately doesn't call recordVisit() — checking the stats isn't a visit.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
