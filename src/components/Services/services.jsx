import './styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Services = ({ customStylePersonal = {} }) => {
    
    return (
      <section style={customStylePersonal.buttonContainerMargin} className="services-container">
        <div className="services-title">
          <h2>Serviços</h2>
          <Link to={'./profesionalServices'}>
            <a style={customStylePersonal.linkDetails} href="#">Mais serviços</a>
          </Link>
        </div>
        <div className="services-content">
          <h3>Branding</h3>
          <p>
            Unveiling your  essence through a careful blend of imagery
            and planning. Developing lasting identities that strike a chord.
          </p>
        </div>
        <div className="services-content">
          <h3>Design</h3>
          <p>
            Constructing captivating encounters from the first interaction.
            Developing instinctive interfaces for uninterrupted user engagement.
          </p>
        </div>
        <div className="services-content">
          <h3>Development</h3>
          <p>
            Translating ideas into vibrant digital dimensions. From adaptable
            web schemes to engaging applications, driving innovation.
          </p>
        </div>
        <div className="services-content">
          <h3>Testing</h3>
          <p>
            By comprehensive research and evaluation, I attain instinctive
            layout.
          </p>
        </div>
      </section>
    );
};

// Declarar a Props do componente

Services.propTypes = {
  customStylePersonal: PropTypes.object,
};

export default Services;