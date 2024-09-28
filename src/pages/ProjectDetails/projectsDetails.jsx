import './style.css';
import ProjectThumb1 from '../../assets/capa.png';

const ProjectDetails = () => { 

    // Aqui será a página de detalhes do projeto

    return (

        <section className='projectContainer'>

            <div className='projectThumb1'>
                <img src={ProjectThumb1} alt="Capa dos projetos" />
            </div>

            <div className='projectIntro'>

                {/* <h2>EvokeEssence</h2> */}

                <div className='projectIntroInformation'>

                </div>
            </div>

        </section>

        
    )

}

export default ProjectDetails;