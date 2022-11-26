import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';
import menuHamburguer from '../files/images/menuIcon.svg';

export default function Header() {
  const [isToggled, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!isToggled);
  };

  return (
    <header className="header-container">
      <nav className="navbar-container">
        <div onClick={toggle} className="hamburguer-menu-container">
          <img className="hamburger-menu" src={menuHamburguer} alt="menu hamburguer" />
        </div>
        <ul className={isToggled ? 'navbar-open' : 'navbar-links'}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  );
}
