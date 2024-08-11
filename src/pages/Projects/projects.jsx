import './style.css';
import { Helmet } from 'react-helmet';

import Work from '../../components/Work/mywork.jsx';

const Projects = () => {

  const customStyle = {
    
    link: {
      display: 'none'
    },

    container: {
      marginTop: '60px'
    }

  };

  return (
    <section className="projects">
      <Helmet>
        <title>Página Meus Projetos</title>
        <meta name="description" content="Conheça os projetos de Gabriel Baltar, UX/UI Designer e Desenvolvedor Front-End no Rio de Janeiro." />
      </Helmet>

      <div className='customize'>
        <Work customStyle={customStyle} />
      </div>
    </section>
  );
}

export default Projects;