import styled from "styled-components";


export const MainStyled = styled.main`
  margin-top: 8%;
  padding-bottom: 5rem;
  
  @media (max-width : 900px) {
    margin-top: 10%;
  }

  @media (max-width : 500px) {
    margin-top: 15%;
  }

  @media (max-width : 350px) {
    margin-top: 20%;
  }

`;

export const ProjectsTitleStyled = styled.h3`
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
`;