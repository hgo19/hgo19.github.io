import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: ${(theme) => theme.backgroundColor};
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

h1 {
  font-family: 'Open Sans', sans-serif;
}
`;

export default GlobalStyle;