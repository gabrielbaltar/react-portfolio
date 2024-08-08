import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Home/Main.jsx'
import Contact from './pages/Contact'
import Header from './components/Header/index.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/index.jsx" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>,
)
