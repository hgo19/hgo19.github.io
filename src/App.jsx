import React, { useContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './assets/styles/theme';

import PortifolioContext from './context/PortifolioContext';
import GlobalStyle from './assets/styles/GlobalStyle';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const { theme } = useContext(PortifolioContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
