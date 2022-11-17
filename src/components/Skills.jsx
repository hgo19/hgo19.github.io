import React from 'react';

import '../styles/skills.css';

import htmlIcon from '../images/logos/htmlIcon.svg';
import cssIcon from '../images/logos/cssIcon.svg';
import jsIcon from '../images/logos/jsIcon.svg';
import reactIcon from '../images/logos/reactIcon.svg';
import reduxIcon from '../images/logos/reduxIcon.svg';

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
