import { Link } from 'react-router-dom'
import './Main.css'

function Main() {

  return (
    <>
      
      <div className="main-content">

        <h1>
          Designing the Future, One Pixel at a Time
        </h1>

        <p>
        Greetings! Web Developer living in Brazil. I favor minimalistic designs with a
        strong passion for low-code as well as user interactions. 🚀
        </p>

          <Link className="contact-link" to="/index.jsx">
            <button>
              Entrar em contato
            </button>
          </Link>

      </div>
      
    </>
  )
}

export default Main
