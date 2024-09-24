import './style.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ customStylePersonal = {} }) => {
    return (
        <section style={customStylePersonal.buttonContainerMargin} className='button-container'>
            <h2>Let discuss the upcoming big sensation!</h2>

            <Link className='contact-button' to="/contato">
                <button>
                    Entrar em contato
                </button>
            </Link>
        </section>
     );
}

Button.propTypes = {
    customStylePersonal: PropTypes.object,
};

export default Button;