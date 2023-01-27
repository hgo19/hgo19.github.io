import React from 'react';

import htmlIcon from '../../assets/images/logos/htmlIcon.svg';
import cssIcon from '../../assets/images/logos/cssIcon.svg';
import jsIcon from '../../assets/images/logos/jsIcon.svg';
import reactIcon from '../../assets/images/logos/reactIcon.svg';
import reduxIcon from '../../assets/images/logos/reduxIcon.svg';
import dockerIcon from '../../assets/images/logos/dockerIcon.svg';
import nodejsIcon from '../../assets/images/logos/nodejsIcon.svg';

import { SkillBoxStyled, SkillIconStyled } from './styles';

export default function Skills() {
  return (
    <div>
      <h2>Skills:</h2>
      <SkillBoxStyled>
        <SkillIconStyled src={jsIcon} alt="JavaScript Skill" />
        <p>JavaScript</p>
      </SkillBoxStyled>
      <SkillBoxStyled>
        <SkillIconStyled src={reactIcon} alt="React Skill" />
        <p>React</p>
      </SkillBoxStyled>
      <SkillBoxStyled>
        <SkillIconStyled src={nodejsIcon} alt="NodeJS Skill" />
        <p>NodeJS</p>
      </SkillBoxStyled>
      <SkillBoxStyled>
        <SkillIconStyled src={dockerIcon} alt="Docker Skill" />
        <p>Docker</p>
      </SkillBoxStyled>
      <SkillBoxStyled>
        <SkillIconStyled src={reduxIcon} alt="Redux Skill" />
        <p>Redux</p>
      </SkillBoxStyled>
      <SkillBoxStyled>
        <SkillIconStyled src={htmlIcon} alt="HTML Skill" />
        <p>HTML</p>
      </SkillBoxStyled>
      <SkillBoxStyled>
        <SkillIconStyled src={cssIcon} alt="CSS Skill" />
        <p>CSS</p>
      </SkillBoxStyled>
    </div>
  );
}
