import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/logo 1.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='header'>
        <nav className="menu-header">
          {/* <img src={logo} alt=""  className='logo-icon'/> */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <ul className={`lista-menu-header ${isMenuOpen ? 'open' : ''}`}>
            <li className="item-menu-header">HOME</li>
            <li className="item-menu-header">SOBRE NÓS</li>
            <li className="item-menu-header">EQUIPE</li>
            <li className="item-menu-header">REDES SOCIAIS</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
