import React, { useState } from 'react';
import DarkModeSwitcher from '../DarkModeSwitch';

import { 
  HeaderStyled,
  SwitcherStyled,
  HamburguerContainerStyled,
  HamburguerImgStyled,
  UlStyled,
  NavLinksStyled } from './styles';
import menuHamburguer from '../../assets/images/menuIcon.svg';

export default function Header() {
  const [show, setMenu] = useState(false);
  const [hide, setHide] = useState(false);

  const toggleMenu = () => {
    setMenu(!show);
    setHide(!hide);
  };

  return (
    <HeaderStyled>
        <SwitcherStyled>
          <DarkModeSwitcher />
        </SwitcherStyled>
        <HamburguerContainerStyled type="button" onClick={toggleMenu}>
          <HamburguerImgStyled src={menuHamburguer} alt="menu hamburguer" />
        </HamburguerContainerStyled>
        <UlStyled show={show} hide={hide}>
          <NavLinksStyled to="/" onClick={toggleMenu}>
            <li>Inicio</li>
          </NavLinksStyled>
          <NavLinksStyled to="/projetos" onClick={toggleMenu}>
            <li>Projetos</li>
          </NavLinksStyled>
          <NavLinksStyled to="/contato" onClick={toggleMenu}>
            <li>Contato</li>
          </NavLinksStyled>
        </UlStyled>
    </HeaderStyled>
  );
}
