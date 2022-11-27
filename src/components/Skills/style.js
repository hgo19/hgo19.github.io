import styled from "styled-components";


export const SkillsContainerStyled = styled.section`
  align-content: center;
  align-items: center;
  background-color:  var(--section-color);
  display: flex;
  gap: 10px;
  height: 150px;
  justify-content: center;
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

export const MySQLStyled = styled.img`
  margin-top: -7px;
  width: 65px;
  filter: invert(0%) sepia(100%) saturate(90%) 
    hue-rotate(216deg) brightness(10%) contrast(100%);
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