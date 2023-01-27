import React from 'react';

import { frontEndProjects, backEndProjects } from '../../assets/projects';

import {
  SectionContainerStyled,
  ProjectsContainerStyled,
  ProjectsCardsContainerStyled,
  ProjectsCardStyled,
  ImgProjectStyled,
  LinkStyled,
} from './styles';

export default function Projects() {
  return (
    <SectionContainerStyled id="projects">
      <ProjectsContainerStyled>
        <h2>Projetos: </h2>
        <h3>Front-end: </h3>
        <ProjectsCardsContainerStyled>
          {frontEndProjects.map(({
            name, img, techs, repositorio,
          }) => (
            <ProjectsCardStyled key={name}>
              <ImgProjectStyled src={img} alt={name} />
              <h3>{name}</h3>
              <p>
                Tecnologias Utilizadas:
                {' '}
                {techs}
              </p>
              <p>
                Repositório:
                {' '}
                <LinkStyled href={repositorio} target="_blank">Clique Aqui</LinkStyled>
              </p>
            </ProjectsCardStyled>
          ))}

        </ProjectsCardsContainerStyled>

        <h3>Back-end: </h3>
        <ProjectsCardsContainerStyled>
          {backEndProjects.map(({ name, techs, repositorio }) => (
            <ProjectsCardStyled key={name}>
              <h3>{name}</h3>
              <p>Tecnologias Utilizadas: </p>
              {techs}
              <p>Repositório:</p>
              <LinkStyled href={repositorio} target="_blanck">Clique Aqui</LinkStyled>
            </ProjectsCardStyled>
          ))}
        </ProjectsCardsContainerStyled>
      </ProjectsContainerStyled>
    </SectionContainerStyled>
  );
}
