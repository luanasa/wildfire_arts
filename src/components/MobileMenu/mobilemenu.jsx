import React from 'react';
import { Link } from 'react-router-dom';
import './mobilemenu.css'

function MobileMenu({ handleMenuToggle }) {
  return (
    <div className={`mobile-menu`}>
      <ul className='links_list'>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </div>
  );
}

export default MobileMenu;
