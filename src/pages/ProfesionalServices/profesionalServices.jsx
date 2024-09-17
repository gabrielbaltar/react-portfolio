import './style.css';
import { useEffect } from 'react';
import About from '../../components/About/about.jsx';
import Services  from '../../components/Services/services.jsx';
import Button from '../../components/Button/button.jsx';
import Spotify from '../../assets/spotify.svg'
import GoogleIcon from '../../assets/google.svg';
import AppleIcon from '../../assets/apple.svg';

const ProfesionalServices = () => { 

     // Efeito para fazer o scroll da página para o topo
    useEffect(() => { 
        
        window.scrollTo({top: 0, behavior: 'smooth'});

    }, []);

    // Estilos customizados para os componentes
  const customStylePersonal = {

    linkDetails: {
      display: 'none'
    },

    buttonContainerMargin: {
      marginTop: '3rem'
    }

  }
    
  // Renderização do componente
    return (

        <section>
            <About customStylePersonal={customStylePersonal} />

            <div className="my-expirience">
        <h2>Minhas Experiência</h2>
        <div className="my-expirience-professional">
          <div className="company-content">
            <img src={GoogleIcon} alt="Logo da empresa" />
            <div className="company-name">
              <h3>Google</h3>
              <p>UX/UI Designer</p>
            </div>
          </div>
          <div className="work-description">
              <p>
                My role involves undertaking extensive research and user
                testing, engaging in ideation, and developing wireframes.
                dedicated to crafting refined, high-fidelity user experiences
                and interfaces for iOS, Android, and Web platforms.{" "}
              </p>
            </div>
        </div>
        <div className="my-expirience-professional">
          <div className="company-content">
            <img src={Spotify} alt="Logo da empresa" />
            <div className="company-name">
              <h3>Spotify</h3>
              <p>UX/UI Designer</p>
            </div>
          </div>
          <div className="work-description">
              <p>
                My role involves undertaking extensive research and user
                testing, engaging in ideation, and developing wireframes. 
                dedicated to crafting refined, high-fidelity user experiences
                and interfaces for iOS, Android, and Web platforms.{" "}
              </p>
            </div>
        </div>
        <div className="my-expirience-professional">
          <div className="company-content">
            <img src={AppleIcon} alt="Logo da empresa" />
            <div className="company-name">
              <h3>Apple</h3>
              <p>UX/UI Designer</p>
            </div>
          </div>
          <div className="work-description">
              <p>
                My role involves undertaking extensive research and user
                testing, engaging in ideation, and developing wireframes.
                dedicated to crafting refined, high-fidelity user experiences
                and interfaces for iOS, Android, and Web platforms.{" "}
              </p>
            </div>
        </div>
      </div>

            <Services customStylePersonal={customStylePersonal} />
            <Button />
        </section>
        
    ) 

    

};

export default ProfesionalServices;