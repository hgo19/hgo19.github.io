import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  background-color: ${({theme}) => theme.headerColor};
  display: flex;
  height: 70px;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  @media ( max-width  : 900px) {
    position: fixed;
  }
`;

export const HamburguerContainerStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  position: absolute;
  overflow: hidden;
  z-index: 4;

  @media ( max-width  : 900px) {
    display: flex;
    align-items: center;
    position: fixed;
  }
`;

export const HamburguerImgStyled = styled.img`
  filter: invert(100%) sepia(0%) saturate(6%) hue-rotate(131deg) 
  brightness(103%) contrast(102%);
`;

export const UlStyled = styled.ul`
  align-self: center;
  display: flex;
  font-size: 1.3rem;
  gap: 1.4rem;
  justify-content: center;
  list-style: none;
  margin: 0 3% 0 0;
  overflow: hidden;


  li {
      display: block;
      color: #fff;
      text-align: center;
    }

  @media ( max-width  : 900px) {
    background: ${({ theme }) => theme.headerColor};
    display: ${({ show, hide }) => show && hide ? 'block' : 'none' };
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 10%;
    position: fixed;
    top: 40px;
    width: 100%;
    z-index: 4;

    li {
      border-bottom: 1px solid #fff;
      padding: 16px;
      width: 100%;
    }
  }
`;

export const NavLinksStyled = styled(Link)`
  color: #fff;
  font-weight: 200;
  text-decoration: none;

  :hover {
    opacity: 0.7;
  }
`;