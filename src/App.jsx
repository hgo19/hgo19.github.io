import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './assets/styles/theme';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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
