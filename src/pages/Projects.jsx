import React from 'react';

import MainStyled from './styles';

import FrontEndProjects from '../components/FrontEndProjects';

export default function Projects() {
  return (
    <MainStyled>
      <h3>Projetos Front-End:</h3>
      <FrontEndProjects />
    </MainStyled>
  );
}
