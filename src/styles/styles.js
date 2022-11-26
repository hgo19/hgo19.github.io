import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = {
  backgroundColor: '#fefefe',
  sectionColor: '#f1f1f1',
  headerColor: '#2c6d7d',
  titleColor: '#47b3cd',
  textColor: '#000000',
};


export const HeaderContainer = styled.header`
  background-color: ${colors.headerColor};
  display: flex;
  height: 50px;
  justify-content: flex-end;
  margin: 0;
  top: 0;
`;

export const NavBarContainer = styled.nav`
  align-items: center;
  align-content: center;
  display: flex;
  margin-right: 3%;
`;

export const HamburguerMenuButtons = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
`;

export const HamburgerMenu = styled.img`
  filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(131deg) 
  brightness(103%) contrast(102%);
`;

export const UlLinks = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
`;