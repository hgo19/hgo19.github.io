import React, { useState } from 'react';

import { 
  HeaderContainer,
  NavBarContainer,
  HamburguerMenuButtons,
  HamburgerMenu,
  UlLinks,
  NavLinks } from '../styles/styles';
import menuHamburguer from '../files/images/menuIcon.svg';

export default function Header() {
  const [isToggled, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!isToggled);
  };

  return (
    <HeaderContainer>
      <NavBarContainer>
        <HamburguerMenuButtons type="button" onClick={toggle}>
          <HamburgerMenu src={menuHamburguer} alt="menu hamburguer" />
        </HamburguerMenuButtons>
        <UlLinks>
          <NavLinks to="/"><li>Home</li></NavLinks>
          <NavLinks to="/projects"><li>Projects</li></NavLinks>
          <NavLinks to="/contact"><li>Contact</li></NavLinks>
        </UlLinks>
      </NavBarContainer>
    </HeaderContainer>
  );
}
