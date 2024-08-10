import './style.css';

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
      <div className='customize'>
        <Work customStyle={customStyle} />
      </div>
    </section>
  );
}

export default Projects;