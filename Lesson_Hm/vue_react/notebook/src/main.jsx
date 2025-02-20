import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'lib-flexible/flexible'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
