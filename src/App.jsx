import React, { useContext } from 'react';

import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './assets/styles/theme';

import PortifolioContext from './context/PortifolioContext';
import GlobalStyle from './assets/styles/GlobalStyle';

import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
const {theme} = useContext(PortifolioContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contato" component={ Contact } />
        <Route exact path="/projetos" component={ Projects } />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
