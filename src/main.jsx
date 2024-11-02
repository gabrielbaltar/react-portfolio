import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/scrollToTop.jsx';
import Main from './pages/Home/Main.jsx'
import Contact from './pages/Contact/index.jsx'
import Projects from './pages/Projects/projects.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/footer.jsx'
import Personal from './pages/PersonalInformation/personal.jsx';
import { SnackbarProvider } from 'notistack';
import ProfesionalServices from './pages/ProfesionalServices/profesionalServices.jsx';
import ProjectDetails from './pages/ProjectDetails/projectsDetails.jsx';
import ProjectTwo from './pages/ProjectTwo/projectTwo.jsx';
import ProjectThree from './pages/ProjectThree/projectThree.jsx';
import ProjectFour from './pages/ProjectFour/projectFour.jsx';
import ProjectFive from './pages/ProjectFive/projectFive.jsx';
import ProjectSix from './pages/ProjectSix/projectSix.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<Personal />} />
          <Route path="/profesionalServices" element={<ProfesionalServices/>} />
          <Route path="/project" element={<ProjectDetails />} />
          <Route path="/projectTwo" element={<ProjectTwo />} />
          <Route path="/projectThree" element={<ProjectThree />} />
          <Route path="/projectFour" element={<ProjectFour />} />
          <Route path="/projectFive" element={<ProjectFive />} />
          <Route path="/projectSix" element={<ProjectSix />} />
        </Routes>
        <Footer />

      </Router>
    </SnackbarProvider>
  </StrictMode>
)
