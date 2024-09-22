import './styles.css';
import { Link } from 'react-router-dom';
import imageOne from '../../assets/image1.png';
import imageTwo from '../../assets/image2.png';
import imageThree from '../../assets/image3.png';
import imageFour from '../../assets/image4.png';
import imageFive from '../../assets/image5.png';
import ArrowIcon from '../../assets/arrow-right.svg';
import { useEffect, useState } from 'react';

const Work = ({ customStyle = {} }) => {
  // Efeito para fazer o scroll da página para o topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Estado para armazenar os cards que estão sendo hovereados
  const [hoveredCards, setHoveredCards] = useState(Array(6).fill(false));

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

  // Dados dos cards com imagens e links individuais
  const cardsData = [
    {
      title: 'Sebrae',
      description: 'Descrição 1',
      image: imageOne,
      link: '/project',
    },
    {
      title: 'Título do Card 2',
      description: 'Descrição 2',
      image: imageTwo,
      link: '/pagina2',
    },
    {
      title: 'Título do Card 3',
      description: 'Descrição 3',
      image: imageThree,
      link: '/pagina3',
    },
    {
      title: 'Título do Card 4',
      description: 'Descrição 4',
      image: imageFour,
      link: '/pagina4',
    },
    {
      title: 'Título do Card 5',
      description: 'Descrição 5',
      image: imageFive,
      link: '/pagina5',
    },
    {
      title: 'Dashboard',
      description: 'Descrição 6',
      image: imageFive,
      link: '/pagina6',
    },
  ];

  return (
    <section style={customStyle.container} className="my-work-container">
      <div className="title-and-link">
        <h2>Meus Trabalhos</h2>
        <Link to="/projetos" className="page-link">
          <span style={customStyle.link}>Mais projetos</span>
        </Link>
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="cards"
          >
            <Link href={card.link}>
              <img
                className={hoveredCards[index] ? 'scale' : ''}
                src={card.image}
                alt={`Capa do projeto ${index + 1}`}
              />
            </Link>
            <div className={`card-name ${hoveredCards[index] ? 'visible' : ''}`}>
              <div className="card-title">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
              <div className="card-tag">
                <a href={card.link}>
                  <img src={ArrowIcon} alt="Seta do botão do card" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
