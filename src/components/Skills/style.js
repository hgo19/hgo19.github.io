import styled from "styled-components";
import { svgDarkModeFilter } from "../../assets/styles/theme";

export const SkillsTitleStyled = styled.h3`
  color: ${({theme}) => theme.textColor};
  margin: 1% 0 0 30%;
  position: absolute;

  @media (max-width : 330px) {
    display: none;
  }
`;

export const SkillsContainerStyled = styled.section`
  align-content: center;
  align-items: center;
  background-color:  ${({theme}) => theme.sectionColor};
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 150px;
  justify-content: center;
  margin-bottom: 5rem;

  @media (  max-width : 900px ) {
    padding: 20px;
  };
`;

export const SkillBoxStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkillIconStyled = styled.img`
  width: 30px;
  filter: ${({theme}) => theme.darkMode === 'on' ? svgDarkModeFilter : 'none'};

  @media ( max-width : 400px ) {
    width: 20px;
  }
`;

export const HidenSKills = styled.div`
  display: flex;
  gap: 10px;

  @media ( max-width : 600px ) {
    display: ${({show}) => show ? 'flex' : 'none'};
  }
`;

export const ShowMoreStyled = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: ${({theme}) => theme.textColor};
  cursor: pointer;

  @media ( max-width : 600px ) {
    display: block;
  }
`