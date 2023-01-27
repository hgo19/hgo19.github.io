import styled from 'styled-components';
import { svgDarkModeFilter } from '../../assets/styles/theme';

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
