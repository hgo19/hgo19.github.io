import React from 'react';

import { backEndProjects } from '../../assets/projects';

import { 
  ProjectsContainerStyled,
  ProjectsCardStyled,
  LinkStyled } from './styles';

export default function BackEndProjects() {
  return (
    <ProjectsContainerStyled>
      {backEndProjects.map(({name, techs, repositorio}) => (
        <ProjectsCardStyled key={`${name}-card`}>
          <h3>{name}</h3>
          <p>
            Tecnologias Utilizadas:
            {' '}
            {techs}
          </p>

          <p>
            Repositório:
            {' '}
            <LinkStyled href={repositorio} target="_blank" rel="noreferrer">
              Aqui
            </LinkStyled>
          </p>
        </ProjectsCardStyled>
      ))}
    </ProjectsContainerStyled>
  )
}
