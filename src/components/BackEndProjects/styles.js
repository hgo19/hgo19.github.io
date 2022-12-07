import styled from "styled-components";

export const ProjectsContainerStyled = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;

  h3 {
    color: ${({theme}) => theme.titleColor};
  }

  @media (max-width : 900px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ProjectsCardStyled = styled.div`
  background-color: ${({theme}) => theme.sectionColor};
  padding: 5px;
  width: 300px;
`;

export const LinkStyled = styled.a`
  color: ${({theme}) => theme.textColor};
  font-weight: 700;

  :hover {
    opacity: 0.7;
  }`;