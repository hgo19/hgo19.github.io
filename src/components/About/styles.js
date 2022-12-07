import styled from "styled-components";

export const AboutContainerStyled = styled.section`
  align-items: center;  
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const AboutTitleStyled = styled.h1`
  color: ${({theme}) => theme.titleColor};
`;

export const AboutTextStyled = styled.p`
  height: auto;
  text-align: justify;
  width: 70%;

  @media ( max-width : 900px ) {
    width: 80%;
  }
`;