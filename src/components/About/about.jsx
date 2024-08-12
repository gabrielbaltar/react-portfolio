import './styles.css'
import Profile from '../../assets/profile.png'
import LinkGithubIcon from '../../assets/link.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import InstagramIcon from '../../assets/instagram.svg'

const About = () => {

    return (
        <section className='service-container'>
            <div className='services-title'>
                <h1>Sobre</h1>
                <p>Mais detalhes</p>
            </div>
            <div className='profile-image'>
                <img src={Profile} alt='Foto do Perfil' />
                <div className='profile-content'>
                    <p>
                    Hi, I'm Jimme, a passionate and dedicated UI/UX designer with a keen eye for detail
                    and a commitment to creating user-friendly and visually appealing designs. With a
                    background in both graphic design and user experience, I strive to bridge the gap
                    between aesthetics and functionality.
                    </p>
                    <p>
                    I have experience working on a variety of projects, from mobile apps to web platforms,
                    always focusing on the user's needs and preferences. My approach is collaborative
                    and iterative, involving clients and users at every stage to ensure the final product not
                    only meets but exceeds expectations.
                    </p>
                    <div className='social-media'>
                        <img src={LinkGithubIcon} alt="Ícone do Github" />
                        <img src={LinkedinIcon} alt="Ícone do Github" />
                        <img src={InstagramIcon} alt="Ícone do Github" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;