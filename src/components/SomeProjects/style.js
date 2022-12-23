import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  background-color: ${({theme}) => theme.sectionColor};
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  padding: 10px 0;
`;

export const SectionTitleStyled = styled.h3`
  color: ${({theme}) => theme.textColor};
  text-align: center;
  width: 100%;
`;

export const CardStyled = styled.div`
  background-color: ${({theme}) => theme.backgroundColor};
  padding: 10px;
  width: 30%;

  :hover {
    opacity: 0.7;
  }
`;