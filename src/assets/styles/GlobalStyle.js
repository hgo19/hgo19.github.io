import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.textColor};
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  h1 {
    font-family: 'Open Sans', sans-serif;
  }

  h3 {
    color: ${({theme}) => theme.textColor};
  }

  a {
    color: ${({theme}) => theme.textColor};
    text-decoration: none;
  }

  a:hover {
    opacity: 0.7;
  }

  a:visited {
    color: ${({theme}) => theme.textColor};
  }

  a:active {
    color: ${({theme}) => theme.textColor};
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;