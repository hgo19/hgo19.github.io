import styled from 'styled-components';

export const AboutContainerStyled = styled.section`
  align-items: center;  
  background-color: ${({ theme }) => theme.sectionColor};
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 15px 15px 30px 15px;
`;

export const AboutTitleStyled = styled.h1`
  color: ${({ theme }) => theme.titleColor};
`;

export const AboutTextStyled = styled.p`
  height: auto;
  margin-top: 1%;
  text-align: justify;
  width: 70%;

  @media ( max-width : 900px ) {
    width: 80%;
  }
`;
