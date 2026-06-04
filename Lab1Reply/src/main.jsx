import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Reply from './Reply.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reply />
  </StrictMode>,
)
