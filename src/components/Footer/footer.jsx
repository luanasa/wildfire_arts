import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer_container'>
      <div className="footer_header">
        <h1>Se torne um dos <span>Wildfire Lovers</span>🤍</h1>
        <p>Siga nossas redes sociais para receber descontos e novidades</p>
      </div>
      <div className="footer_links">
        <ul className='pages_links'>
          <li className='title'>Site</li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/about">Contato</Link></li>
          <li><Link to="/about">Socials</Link></li>
        </ul>

        <ul className='other_links'>
          <li className='title'>Minhas lojas de pattern</li>
          <li>
            <a href="https://ko-fi.com/awildfire">Ko-fi</a>
          </li>
          <li>
            <a href="https://www.ravelry.com/designers/wildfire-arts">Ralvery</a>
          </li>
        </ul>
      </div>

      <hr className='line' />
    </div>
  );
}

export default Footer;
