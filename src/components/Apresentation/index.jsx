import React from 'react';

import { 
  ApresentationContainerStyled,
  ApresentationTextsStyled,
  MobileImageBoxStyled,
  MobileImageStyled,
  ApresentationLogosStyled,
  ApresentationImgStyled } from './style';

import subTitle from '../../assets/texts/subTitle';

import manWorking from '../../assets/images/man-computer.svg';
import mobileImage from '../../assets/images/mobileImage.svg';
import linkedinIcon from '../../assets/images/logos/linkedinIcon.svg';
import githubIcon from '../../assets/images/logos/githubIcon.svg';

export default function Apresentation() {
  return (
    <ApresentationContainerStyled>
      <ApresentationTextsStyled>
        <h1>{'<Hello World />'}</h1>
        <p>{subTitle}</p>
        <MobileImageBoxStyled>
          <MobileImageStyled src={ mobileImage } alt="mobile vector"/>
        </MobileImageBoxStyled>
        <ApresentationLogosStyled>
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
        </ApresentationLogosStyled>
      </ApresentationTextsStyled>
      <ApresentationImgStyled src={ manWorking } alt="Man Working Draw"/>
    </ApresentationContainerStyled>
  );
}
