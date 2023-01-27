import styled from 'styled-components';
import { svgDarkModeFilter } from '../../assets/styles/theme';

export const SectionContainerStyled = styled.section`
  background-color: ${({ theme }) => theme.sectionColor};
  display: grid;
  gap: 20px;
  /* justify-content: center; */
  padding: 10px;
  place-items: center;

  h3 {
    color: ${({ theme }) => theme.titleColor};
  }

  @media (max-width : 900px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const SkillsContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;

  h3 {
    text-align: center;
  }
`;

export const SkillBoxStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SkillIconStyled = styled.img`
  width: 30px;
  filter: ${({ theme }) => (theme.darkMode === 'on' ? svgDarkModeFilter : 'none')};

  @media ( max-width : 400px ) {
    width: 20px;
  }
`;
