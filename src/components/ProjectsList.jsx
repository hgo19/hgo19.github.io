import React from 'react'

import projects from '../utils/projects'

export default function ProjectsList() {
  return (
    <div>
      {projects.map(({name, preview, techs}, index) => (
        <div key={ index }> 
            <img src={ preview } alt={ name } />
            <h3>{name}</h3>
            <p>Ferramentas Utilizadas: {techs}</p>
        </div>
      ))}
    </div>
  )
}
