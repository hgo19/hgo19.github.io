import styled from "styled-components";

export const SectionContainerStyled = styled.section`
  background-color: ${({theme}) => theme.backgroundColor};
  display: grid;
  gap: 20px;
  /* justify-content: center; */
  place-items: center;

  h3 {
    color: ${({theme}) => theme.titleColor};
  }

  @media (max-width : 900px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ProjectAndSkillsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProjectsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;

  h3 {
    text-align: center;
  }
`;

export const ProjectsCardsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  }`;