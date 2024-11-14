import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/css/index.css'
import { MapView } from '../views/Map/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MapView />
  </StrictMode>,
)
