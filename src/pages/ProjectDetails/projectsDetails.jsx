import './style.css';
import ProjectThumb1 from '../../assets/capa.png';
import { useEffect } from 'react';

const ProjectDetails = () => { 

    // Efeito para fazer o scroll da página para o topo
    useEffect(() => { 
      
        window.scrollTo({top: 0, behavior: 'smooth'});

    }, []);

    // Aqui será a página de detalhes do projeto

    return (
      <section className="projectContainer">
        <div className="projectThumb1">
          <img src={ProjectThumb1} alt="Capa dos projetos" />
        </div>

        <div className="projectIntro">
          <h2>EvokeEssence</h2>

          <div className="projectIntroInformation">
            <div className="about">
              <div>
                <h4>Ano</h4>
                <p>2024</p>
              </div>
              <div>
                <h4>Serviços    </h4>
                <p>Front-end</p>
              </div>
              <div>
                <h4>Cliente</h4>
                <p>MAG</p>
              </div>
            </div>
            <div className="intro">
              <h4>Intro</h4>
              <p>
                The EvokeEssence design project epitomizes the fusion of
                modern aesthetics and functionality. A team of talented
                designers blended innovative materials with classic elegance,
                creating a collection that resonates with both minimalism and
                rich detail. Each piece in the collection has been meticulously
                crafted, from the selection of color palettes to ergonomic
                usability. Harmony of Forms is more than just utilitarian
                objects; its a series of true art pieces that bring harmony and
                a unique character to any space.
              </p>
            </div>
          </div>
        </div>
      </section>
    );

}

export default ProjectDetails;