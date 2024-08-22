import { Link } from 'react-router-dom';
import CardThumb from '../../assets/card-thumb.png';
import ArrowIcon from '../../assets/arrow-right.svg';
import './styles.css';
import { useEffect, useState } from 'react';


const Work = ({customStyle = {}  }) => {

    useEffect(() => { 
      
      window.scrollTo({top: 0, behavior: 'smooth'});

    }, []);

    // Estado para armazenar os cards que estão sendo hovereados
    const [hoveredCards, setHoveredCards] = useState([]);

    // Função para atualizar o estado dos cards que estão sendo hovereados (true)
    const handleMouseEnter = (index) => {
      setHoveredCards((prev) => {

        const newHoveredCards = [...prev];
        newHoveredCards[index] = true;
        return newHoveredCards;
      
      });
    };

    // Função para atualizar o estado dos cards que estão sendo hovereados (false)
    const handleMouseLeave = (index) => {
      setHoveredCards((prev) => {

        const newHoveredCards = [...prev];
        newHoveredCards[index] = false;
        return newHoveredCards;
      
      });
    };

    // Dados dos cards
    const cardsData = [
      { title: 'Title of Card 1', description: 'Description 1' },
      { title: 'Title of Card 2', description: 'Description 2' },
      { title: 'Title of Card 3', description: 'Description 3' },
      { title: 'Title of Card 4', description: 'Description 4' },
      { title: 'Title of Card 5', description: 'Description 5' },
      { title: 'Title of Card 6', description: 'Description 6' },
    ];


    return (
      <section style={customStyle.container} className='my-work-container'>
        <div className='title-and-link'>
          <h2>My Works</h2>
          <Link to="/projetos" className='page-link'>
            <span style={customStyle.link}>Mais projetos</span>
          </Link>
        </div>
        <div className='cards-container'>
          {cardsData.slice(0, 2).map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className='cards'
            >
              <a href="#">
                <img
                  className={hoveredCards[index] ? 'scale' : ''}
                  src={CardThumb}
                  alt="Capa do projeto"
                />
              </a>
              <div className={`card-name ${hoveredCards[index] ? 'visible' : ''}`}>
                <div className='card-title'>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <div className='card-tag'>
                  <a href="#"><img src={ArrowIcon} alt="Seta do botão do card" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='cards-container'>
          {cardsData.slice(2, 4).map((card, index) => (
            <div
              key={index + 2}
              onMouseEnter={() => handleMouseEnter(index + 2)}
              onMouseLeave={() => handleMouseLeave(index + 2)}
              className='cards'
            >
              <a href="#">
                <img
                  className={hoveredCards[index + 2] ? 'scale' : ''}
                  src={CardThumb}
                  alt="Capa do projeto"
                />
              </a>
              <div className={`card-name ${hoveredCards[index + 2] ? 'visible' : ''}`}>
                <div className='card-title'>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <div className='card-tag'>
                  <a href="#"><img src={ArrowIcon} alt="Seta do botão do card" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='cards-container'>
          {cardsData.slice(4, 6).map((card, index) => (
            <div
              key={index + 4}
              onMouseEnter={() => handleMouseEnter(index + 4)}
              onMouseLeave={() => handleMouseLeave(index + 4)}
              className='cards'
            >
              <a href="#">
                <img
                  className={hoveredCards[index + 4] ? 'scale' : ''}
                  src={CardThumb}
                  alt="Capa do projeto"
                />
              </a>
              <div className={`card-name ${hoveredCards[index + 4] ? 'visible' : ''}`}>
                <div className='card-title'>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
                <div className='card-tag'>
                  <a href="#"><img src={ArrowIcon} alt="Seta do botão do card" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Work;