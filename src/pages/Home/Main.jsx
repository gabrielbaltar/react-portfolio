import { Link } from 'react-router-dom'
import CardThumb from '../../assets/card-thumb.png'
import './Main.css'
function Main() {

  return (
    <>
      
      <main className="main-content">

        <div className='available-tag-main'>
            <span></span>
            <p>Disponível para Freelas</p>
        </div>

        <h1>
          Designing the Future, One Pixel at a Time
        </h1>

        <p>
          Greetings! Web Developer living in Brazil. I favor minimalistic designs with a
          strong passion for low-code as well as user interactions. 🚀
        </p>

        <Link className="contact-link" to="/index.jsx">
          <button>
            Entrar em contato
          </button>
        </Link>

      </main>

      <section className='my-work-container'>
        <div className='title-and-link'>
          <h2>
            My Work
          </h2>
          <Link to="/projects.jsx">
            <a href="#">Mais projetos</a>
          </Link>
        </div>
        <div className='cards-container'>
          <div className='cards'> 
            <a href="#"><img src={CardThumb} alt="Capa do projeto" /></a>
            <div className='card-name'>

            </div>
          </div>
          <div className='cards'> 
            <a href="#"><img src={CardThumb} alt="Capa do projeto" /></a>
            <div className='card-name'>

            </div>
          </div>
        </div>
        <div className='cards-container'>
          <div className='cards'> 
            <a href="#"><img src={CardThumb} alt="Capa do projeto" /></a>
            <div className='card-name'>

            </div>
          </div>
          <div className='cards'> 
            <a href="#"><img src={CardThumb} alt="Capa do projeto" /></a>
            <div className='card-name'>

            </div>
          </div>
        </div>
        <div className='cards-container'>
          <div className='cards'> 
            <a href="#"><img src={CardThumb} alt="Capa do projeto" /></a>
            <div className='card-name'>

            </div>
          </div>
          <div className='cards'> 
            <a href="#"><img src={CardThumb} alt="Capa do projeto" /></a>
            <div className='card-name'>

            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Main
