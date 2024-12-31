import Logo from '../../assets/logo.svg'
// import MobileLogo from '../../assets/logoMobile.svg'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {

  return (
    <header className="navbar-container">
      <nav className='navbar-content'>

        <Link to="/">
          <a href="#"><img src={Logo} alt="Logo do portfólio de Gabriel Baltar Pereira" /></a>
        </Link>

        <div className='available-tag'>
            <span></span>
            <p>Disponível para trabalhos</p>
        </div>

        {/* <div className='menu-mobile-icon'>
            <img src={MobileLogo} alt="Ícone do Menu Mobile" />
        </div> */}

      </nav>
    </header>
  );
}

export default Header;