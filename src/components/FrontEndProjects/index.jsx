import React from 'react';

import projects from '../../assets/projects';

import { 
  ProjectsContainerStyled,
  ProjectsCardStyled,
  ImgProjectStyled,
  LinkStyled } from './styles';

export default function FrontEndProjects() {
  return (
    <ProjectsContainerStyled>
      {projects.map(({
        name, img, techs, repositorio, url,
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
          <p>
            <LinkStyled href={url} target="_blank">
              Visite a aplicação clicando aqui
            </LinkStyled>
          </p>
        </ProjectsCardStyled>
      ))}
    </ProjectsContainerStyled>
  );
}
