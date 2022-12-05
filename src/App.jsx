import React, { useContext } from 'react';

import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './assets/styles/theme';

import PortifolioContext from './context/PortifolioContext';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Header from './components/Header';

function App() {
const {theme} = useContext(PortifolioContext);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
