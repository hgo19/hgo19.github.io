import React from 'react';

import { MainStyled } from './styles';

import Apresentation from '../components/Apresentation';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <MainStyled>
      <Apresentation />
      <About />
      <Projects />
      <ContactForm />
    </MainStyled>
  );
}
