import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/contact' component={ Contact } />
        <Route exact path='/projects' component={ Projects } />
      </Switch>
    </>
  );
}

export default App;
