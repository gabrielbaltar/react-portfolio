import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Home/Main.jsx'
import Contact from './pages/Contact/index.jsx'
import Projects from './pages/Projects/projects.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/footer.jsx'
import { SnackbarProvider } from 'notistack';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/index.jsx" element={<Contact />} />
          <Route path="/projects.jsx" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </SnackbarProvider>
  </StrictMode>,
)
