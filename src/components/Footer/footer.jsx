import './styles.css'

const Footer = () => {

    const getCurrentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p>&copy; {getCurrentYear} Gabriel Baltar</p>
            <div className='site-map'>
                <ul>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Sobre mim</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
        </footer>
    );
    
}

export default Footer;