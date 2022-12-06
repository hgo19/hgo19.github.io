import React, { useContext } from 'react';

import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './assets/styles/theme';

import PortifolioContext from './context/PortifolioContext';
import GlobalStyle from './assets/styles/GlobalStyle';

import Header from './components/Header';
import DarkModeSwitcher from './components/DarkModeSwitch';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
const {theme} = useContext(PortifolioContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <DarkModeSwitcher />
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contato" component={ Contact } />
        <Route exact path="/projetos" component={ Projects } />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
