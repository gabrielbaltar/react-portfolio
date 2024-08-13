import { Link } from 'react-router-dom';
import CardThumb from '../../assets/card-thumb.png';
import './styles.css';


const Work = ({customStyle = {}  }) => {
    return (
        <section style={customStyle.container} className='my-work-container'>
        <div className='title-and-link'>
          <h2>
            My Works
          </h2>
          <Link to="/projetos" className='page-link'>
            <span style={customStyle.link} href="#">Mais projetos</span>
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
    );
}

export default Work;