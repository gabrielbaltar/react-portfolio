import { Link } from 'react-router-dom'
import Work from '../../components/Work/mywork.jsx'
import Services from '../../components/Services/services.jsx'
import About from '../../components/About/about.jsx'
import Button from '../../components/Button/button.jsx'
import { Helmet } from 'react-helmet' 

import './Main.css'

function Main() {

  return (
    <>
      <Helmet>
        <title>Página Inicial</title>
        <meta name="description" content="Gabriel Baltar - UX/UI Designer e Desenvolvedor Front-End no Rio de Janeiro. Criando experiências visuais acessíveis e funcionais para a web." />
      </Helmet>

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

        <Link className="contact-link" to="/contato">
          <button>
            Entrar em contato
          </button>
        </Link>

      </main>

     
      <Work/>
      <Services/>
      <About/>
      <Button/>

    </>
  )
}

export default Main
