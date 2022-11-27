import styled from "styled-components";

export const ProjectsContainerStyled = styled.section`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

export const ProjectsCardStyled = styled.div`
  background-color: ${({theme}) => theme.sectionColor};
  padding: 5px;
  width: 300px;
`;

export const ImgProjectStyled = styled.img`
  margin: 5%;
  width: 90%;
`;

export const LinkStyled = styled.a`
  color: ${({theme}) => theme.textColor};
  font-weight: 700;

  :hover {
    opacity: 0.7;
  }
`;