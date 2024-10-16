import About from "../../components/About/about";
import Services from "../../components/Services/services";
import Button from "../../components/Button/button";
import Spotify from '../../assets/spotify.svg'
import GoogleIcon from '../../assets/google.svg';
import AppleIcon from '../../assets/apple.svg';
import './styles.css'

const Personal = () => {


  // Estilos customizados para os componentes
  const customStylePersonal = {

    linkDetails: {
      display: 'none'
    },

    buttonContainerMargin: {
      marginTop: '3rem'
    }

  }

  return (
    <section className="personal-information-container">
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
      <Button customStylePersonal={customStylePersonal} />
    </section>
  );
}

export default Personal;