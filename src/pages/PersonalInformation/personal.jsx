import { useEffect } from "react";
import About from "../../components/About/about";
import Services from "../../components/Services/services";
import Button from "../../components/Button/button";
import './styles.css'

const Personal = () => {

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

  return (

    <section className='personal-information-container'>
        <div>
            <About customStylePersonal={customStylePersonal} />
            {/* <h1>About Pagesadas</h1> */}

            <Services customStylePersonal={customStylePersonal} />
            <Button customStylePersonal={customStylePersonal} />
        </div>
    </section>
    
  );
}

export default Personal;