import './styles.css'
import Profile from '../../assets/profile.png'
import LinkGithubIcon from '../../assets/link.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/instagram.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const About = ({ customStylePersonal = {} }) => {

    return (
        <section className='service-container'>
            <div className='services-title'>
                <h1>Sobre</h1>
                <Link style={customStylePersonal.linkDetails}  to={'/sobre'}>
                    <p>Mais detalhes</p>
                </Link>
            </div>
            <div className='profile-image'>
                <img src={Profile} alt='Foto do Perfil' />
                <div className='profile-content'>
                    <p>
                    Hi,  Jimme, a passionate and dedicated UI/UX designer with a keen eye for detail
                    and a commitment to creating user-friendly and visually appealing designs. With a
                    background in both graphic design and user experience, I strive to bridge the gap
                    between aesthetics and functionality.
                    </p>
                    <p>
                    I have experience working on a variety of projects, from mobile apps to web platforms,
                    always focusing on the  needs and preferences. My approach is collaborative
                    and iterative, involving clients and users at every stage to ensure the final product not
                    only meets but exceeds.
                    </p>
                    <div className='social-media'>
                        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/gabrielbaltar?tab=overview&from=2024-09-01&to=2024-09-28" aria-label="Visite o meu perfil no Github"> 
                            <img src={LinkGithubIcon} alt="Ícone do Github" /> 
                        </a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://github.com/gabrielbaltar?tab=overview&from=2024-09-01&to=2024-09-28" aria-label="Visite o meu perfil no Github"> 
                            <img src={LinkedinIcon} alt="Ícone do Linkedin" />
                        </a>
                        <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gbbaltar/" aria-label="Visite o meu perfil no Instagram"> 
                            <img src={InstagramIcon} alt="Ícone do Github" />
                        </a>
                    </div> 
                </div>
            </div>
        </section>
    )
} 

About.propTypes = {
    customStylePersonal: PropTypes.object,
};

export default About;