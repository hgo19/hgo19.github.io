import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background-color);
  // background-color: rgb(17, 17, 17);
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-family: 'Open Sans', sans-serif;
}
`;

export default GlobalStyle;