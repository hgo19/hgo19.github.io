import React from 'react';

import {MainStyled, ProjectsTitleStyled} from './styles';

import FrontEndProjects from '../components/FrontEndProjects';

export default function Projects() {
  return (
    <MainStyled>
      <ProjectsTitleStyled>Projetos Front-End:</ProjectsTitleStyled>
      <FrontEndProjects />
    </MainStyled>
  );
}
