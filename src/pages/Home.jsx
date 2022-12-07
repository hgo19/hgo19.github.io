import React from 'react';

import {MainStyled} from './styles';

import Apresentation from '../components/Apresentation';
import Skills from '../components/Skills';
import About from '../components/About';
import SomeProjects from '../components/SomeProjects';

export default function Home() {
  return (
    <MainStyled>
        <Apresentation />
        <Skills />
        <About />
        <SomeProjects />
      </MainStyled>
  );
}
