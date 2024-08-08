import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/Home/Main.jsx'
import Header from './components/Header/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
)
