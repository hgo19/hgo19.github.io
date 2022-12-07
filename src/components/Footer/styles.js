import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({theme}) => theme.sectionColor};
  bottom: 0;
  padding: 20px;
  position: fixed;
  width: 100%;
`;

export const FooterTextStyled = styled.span`
  font-size: 0.7rem;
`;