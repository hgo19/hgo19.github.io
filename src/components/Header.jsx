import React, { useState } from 'react';

import { 
  HeaderStyled,
  HamburguerContainerStyled,
  HamburguerImgStyled,
  UlStyled,
  NavLinksStyled } from '../styles/styles';
import menuHamburguer from '../files/images/menuIcon.svg';

export default function Header() {
  const [show, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!show);
  };

  return (
    <HeaderStyled>
        <HamburguerContainerStyled type="button" onClick={toggleMenu}>
          <HamburguerImgStyled src={menuHamburguer} alt="menu hamburguer" />
        </HamburguerContainerStyled>
        <UlStyled show={show} >
          <NavLinksStyled to="/">
            <li>Inicio</li>
          </NavLinksStyled>
          <NavLinksStyled to="/projects">
            <li>Projetos</li>
          </NavLinksStyled>
          <NavLinksStyled to="/contact">
            <li>Entre em Contato</li>
          </NavLinksStyled>
        </UlStyled>
    </HeaderStyled>
  );
}
