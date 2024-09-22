import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Home/Main.jsx'
import Contact from './pages/Contact/index.jsx'
import Projects from './pages/Projects/projects.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/footer.jsx'
import Personal from './pages/PersonalInformation/personal.jsx';
import { SnackbarProvider } from 'notistack';
import ProfesionalServices from './pages/ProfesionalServices/profesionalServices.jsx';
import ProjectDetails from './pages/ProjectDetails/projectsDetails.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<Personal />} />
          <Route path="/profesionalServices" element={<ProfesionalServices/>} />
          <Route path="/project" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </Router>
    </SnackbarProvider>
  </StrictMode>,
)
