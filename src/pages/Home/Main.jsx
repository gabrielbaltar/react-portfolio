import { Link } from 'react-router-dom'
import Work from '../../components/Work/mywork.jsx'
import Services from '../../components/Services/services.jsx'
import About from '../../components/About/about.jsx'
import Button from '../../components/Button/button.jsx'
import { Helmet } from 'react-helmet';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Main.css'

function Main() {

  // Efeito para o texto principal
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {

    gsap.to(titleRef.current, {
      duration: 1.6,
      y: 0,
      ease: 'back.out',
    });
  
    gsap.to(subtitleRef.current, {
      duration: 1.7,
      y: 0,
      ease: 'back.out',
      delay: 0.4,
    });

  }, []);

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
        
        <div className="masked-element" >
          <h1 ref={titleRef}>Desenhando o Futuro, Pixel por Pixel</h1>
        </div>

        <div className="masked-element">
          <p ref={subtitleRef}>
            Olá! Sou Gabriel Baltar, desenvolvedor front-end baseado no Rio de Janeiro, Brasil. Com um olhar voltado para o futuro da web, busco constantemente inovar e aprimorar a experiência digital. 🚀
          </p>
        </div>
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
