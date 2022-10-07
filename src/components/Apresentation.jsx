import React from 'react'

import '../styles/apresentation.css';

import manWorking from '../images/man-computer.svg';
import linkedinIcon from '../images/logos/linkedinIcon.svg';
import githubIcon from '../images/logos/githubIcon.svg';
import { Link } from 'react-router-dom';

export default function Apresentation() {
  return (
    <section className="apresentation-container">
      <article className='apresentation-text'>
        <h1>{`<Hello World />`}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="apresentation-logos">
            <Link to="https://www.linkedin.com/in/hugo-leop/" target={"_blank"} rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin"/> <span>Linkedin</span>
            </Link>
          <Link to="https://github.com/hgo19" target={"_blank"} rel="noopener noreferrer">
            <img src={githubIcon} alt="Linkedin"/> <span>GitHub</span>
          </Link>
        </div>
      </article>
      <img src={manWorking} alt="Man Working Draw" className="apresentation-img"/>
    </section>
  )
}
