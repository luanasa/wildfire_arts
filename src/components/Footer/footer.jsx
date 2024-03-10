import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  const [footerRef, footerInView] = useInView({ threshold: 0.5 }); // Detecta se o footer está 50% visível na tela
  const [animateFooter, setAnimateFooter] = useState(false);

  useEffect(() => {
    if (footerInView) {
      setAnimateFooter(true); // Se o footer estiver visível, ativa a animação
    }
  }, [footerInView]);

  return (
    <div ref={footerRef} className={`footer_container ${animateFooter ? 'animate' : ''}`}>
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
