import React from 'react';

import projects from '../files/projects';
import '../assets/projects.css';

export default function FrontEndProjects() {
  return (
    <div className="projects-container">
      {projects.map(({
        name, img, techs, repositorio, url,
      }) => (
        <div key={name} className="projects-cards">
          <img src={img} alt={name} />
          <h3>{name}</h3>
          <p>
            Ferramentas Utilizadas:
            {' '}
            {techs}
          </p>
          <p>
            Repositório:
            {' '}
            <a href={repositorio}>Aqui</a>
          </p>
          <p>
            <a href={url}>Visite a aplicação clicando aqui</a>
          </p>
        </div>
      ))}
    </div>
  );
}
