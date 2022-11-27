import styled from "styled-components";

export const AboutContainerStyled = styled.section`
  align-items: center;  
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;

export const AboutTitleStyled = styled.h1`
  color: ${({theme}) => theme.titleColor};
`;

export const AboutTextStyled = styled.p`
  height: auto;
  margin-top: 1%;
  text-align: justify;
  width: 50%;

  @media ( max-width : 900px ) {
    width: 80%;
  }
`;