import React from 'react';

import {frontEndProjects} from '../../assets/projects';

import { 
  ProjectsContainerStyled,
  ProjectsCardStyled,
  ImgProjectStyled,
  LinkStyled } from './styles';

export default function FrontEndProjects() {
  return (
    <ProjectsContainerStyled>
      {frontEndProjects.map(({
        name, img, techs, repositorio,
      }) => (
        <ProjectsCardStyled key={name}>
          <ImgProjectStyled src={img} alt={name} />
          <h3>{name}</h3>
          <p>
            Ferramentas Utilizadas:
            {' '}
            {techs}
          </p>
          <p>
            Repositório:
            {' '}
            <LinkStyled href={repositorio} target="_blank">Aqui</LinkStyled>
          </p>
        </ProjectsCardStyled>
      ))}
    </ProjectsContainerStyled>
  );
}
