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

        {/* <div className='available-tag-main'>
            <span></span>
            <p>Disponível para Freelas</p>
        </div> */}

        <h1>
          Desenhando o Futuro, Pixel por Pixel
        </h1>

        <p>
          Olá! Sou Gabriel Baltar, desenvolvedor front-end baseado no Rio de Janeiro, Brasil. Com um olhar voltado para o futuro da web, busco constantemente inovar e aprimorar a experiência digital. 🚀
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
