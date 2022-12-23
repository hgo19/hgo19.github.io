import React from 'react';
import { SectionStyled, SectionTitleStyled, CardStyled } from './style';

import { PrincipalProjects } from '../../assets/projects';

export default function SomeProjects() {
  return (
    <SectionStyled>
      <SectionTitleStyled>Principais Projetos</SectionTitleStyled>
      {PrincipalProjects.map(({name, techs, repositorio}) => (
        <CardStyled key={`${name}-card`}>
          <h3>{name}</h3>
          <p>
            Tecnologias Utilizadas:
            {' '}
            {techs}
          </p>
          <p>
            Repositório:
            {' '}
            <a href={repositorio} target="_blank" rel="noreferrer">Aqui</a>
          </p>
        </CardStyled>
      ))}
    </SectionStyled>
  )
}
