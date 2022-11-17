import React from 'react';

import '../styles/skills.css';

import htmlIcon from '../files/images/logos/htmlIcon.svg';
import cssIcon from '../files/images/logos/cssIcon.svg';
import jsIcon from '../files/images/logos/jsIcon.svg';
import reactIcon from '../files/images/logos/reactIcon.svg';
import reduxIcon from '../files/images/logos/reduxIcon.svg';

export default function Skills() {
  return (
    <section className="skills-container">
      <div className="skill-box">
        <img src={ htmlIcon } alt="HTML Skill" className="skills-icons" />
        <p>HTML</p>
      </div>
      <div className="skill-box">
        <img src={ cssIcon } alt="HTML Skill" className="skills-icons" />
        <p>CSS</p>
      </div>
      <div className="skill-box">
        <img src={ jsIcon } alt="HTML Skill" className="skills-icons" />
        <p>JavaScript</p>
      </div>
      <div className="skill-box">
        <img src={ reactIcon } alt="HTML Skill" className="skills-icons" />
        <p>React</p>
      </div>
      <div className="skill-box">
        <img src={ reduxIcon } alt="HTML Skill" className="skills-icons" />
        <p>Redux</p>
      </div>
    </section>
  );
}
