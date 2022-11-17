import React from 'react';

import '../styles/apresentation.css';

import subTitle from '../texts/subTitle';

import manWorking from '../images/man-computer.svg';
import mobileImage from '../images/mobileImage.svg';
import linkedinIcon from '../images/logos/linkedinIcon.svg';
import githubIcon from '../images/logos/githubIcon.svg';

export default function Apresentation() {
  return (
    <section className="apresentation-container">
      <article className="apresentation-text">
        <h1>{'<Hello World />'}</h1>
        <p>{subTitle}</p>
        <div className="mobile-image-box"><img src={ mobileImage } alt="mobile vector" className="mobile-image" /></div>
        <div className="apresentation-logos">
          <a href="https://www.linkedin.com/in/hugo-leop/" target="_blank" rel="noopener noreferrer">
            <img src={ linkedinIcon } alt="Linkedin" />
            {' '}
            <span>Linkedin</span>
          </a>
          <a href="https://github.com/hgo19" target="_blank" rel="noopener noreferrer">
            <img src={ githubIcon } alt="aedin" />
            {' '}
            <span>GitHub</span>
          </a>
        </div>
      </article>
      <img src={ manWorking } alt="Man Working Draw" className="apresentation-img" />
    </section>
  );
}
