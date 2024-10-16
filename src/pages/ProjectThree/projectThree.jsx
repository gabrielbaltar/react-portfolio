import './style.css';
import ProjectThumb3 from '../../assets/image3.png';

const projectDetails2 = () => {
    return (
        
        <section className="projectContainer">
        <div className="projectThumb1">
          <img src={ProjectThumb3} alt="Capa dos projetos" />
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
                <h4>Serviços </h4>
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
                The EvokeEssence design project epitomizes the fusion of modern
                aesthetics and functionality. A team of talented designers
                blended innovative materials with classic elegance, creating a
                collection that resonates with both minimalism and rich detail.
                Each piece in the collection has been meticulously crafted, from
                the selection of color palettes to ergonomic usability. Harmony
                of Forms is more than just utilitarian objects; its a series of
                true art pieces that bring harmony and a unique character to any
                space.
              </p>
            </div>
          </div>
        </div>

        <div className="processContainer">
          <h2>Process</h2>
          <p>
            The design process is a streamlined yet dynamic approach, beginning
            with in-depth research to understand client needs and user
            behaviors. Creativity blooms in the conceptualization phase, where
            ideas are sketched and refined. These concepts materialize in the
            design and development stage, with a keen focus on aesthetic
            cohesion and user-centric functionality. After meticulous testing
            and refinement to ensure flawless user interaction, the project
            culminates in a strategic launch. Post-launch, continuous evaluation
            feeds back into the cycle, ensuring, enduring resonance and
            relevance.
          </p>
        </div>

        <div className='thumbs'>
          <div className="projectThumb1">
            <img src={ProjectThumb3} alt="Capa dos projetos" />
          </div>

          <div className="projectThumb1">
            <img src={ProjectThumb3} alt="Capa dos projetos" />
          </div>
       </div>

        <div className="processContainer">
          <h2>Objetivo</h2>
          <p>
            The EvokeEssence project is a testament to the power of
            collaboration and innovation. The teams dedication to excellence
            and creativity has resulted in a collection that transcends the
            ordinary, bringing a touch of elegance and sophistication to
            everyday life. The project success is a reflection of the teams
            commitment to pushing boundaries and creating designs that resonate
            with users on a profound level.
          </p>
        </div>

       <div className='thumbs'>
        <div className="projectThumb1">
            <img src={ProjectThumb3} alt="Capa dos projetos" />
          </div>

          <div className="projectThumb1">
            <img src={ProjectThumb3} alt="Capa dos projetos" />
          </div>
       </div>

        <div className="processContainer footerMargin">
          <h2>Resultados</h2>
          <p>
            The Result design process is an outcome-driven methodology,
            starting with a clear definition of desired results and benchmarks.
            The brainstorming phase is pivotal, where potential pathways to
            achieve these outcomes are explored and honed. In the design and
            development stage, emphasis is placed on crafting solutions that
            directly align with the set benchmarks. Thorough testing validates
            the efficacy and impact of the design choices. After a strategic
            launch optimized for maximum impact, post-launch analytics and
            feedback are harnessed to measure success and guide further
            refinements, ensuring the results consistently hit the mark.
          </p>
        </div>
      </section>

    );
};

export default projectDetails2;