import './style.css';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <section className='button-container'>
            <h2>Let's discuss the upcoming big sensation!</h2>

            <Link className='contact-button' to="/contato">
                <button>
                    Entrar em contato
                </button>
            </Link>
        </section>
     );
}

export default Button;