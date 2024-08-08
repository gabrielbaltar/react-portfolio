import Logo from '../../assets/logo.svg'
import MobileLogo from '../../assets/logoMobile.svg'
import './styles.css'

function Header() {

  return (
    <header className="navbar-container">
      <nav className='navbar-content'>

        <a href="#"><img src={Logo} alt="Logo do portfólio de Gabriel Baltar Pereira" /></a>

        <div className='available-tag'>
            <span></span>
            <p>Disponível para Freelas</p>
        </div>

        <div className='menu-mobile-icon'>
            <img src={MobileLogo} alt="Ícone do Menu Mobile" />
        </div>

      </nav>
    </header>
  );
}

export default Header;