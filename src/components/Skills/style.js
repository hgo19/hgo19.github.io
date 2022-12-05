import styled from "styled-components";


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
    height: ${({show}) => show ? 'auto' : '150px'};
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

  @media ( max-width : 400px ) {
    width: 20px;
  }
`;

export const HidenSKills = styled.div`
  display: ${({show}) => show ? 'flex' : 'none'};
  gap: 10px;
`;

export const ShowMoreStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`