import styled from "styled-components";

export const SectionStyled = styled.section`
  background-color: ${({theme}) => theme.sectionColor};
`;

export const SectionTitleStyled = styled.h3`
  color: ${({theme}) => theme.textColor};
`;