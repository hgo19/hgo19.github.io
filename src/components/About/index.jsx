import React from 'react';

import { 
  AboutContainerStyled,
  AboutTitleStyled,
  AboutTextStyled } from './styles';

import { sobreMimPOne, sobreMimPTwo } from '../../assets/texts/aboutMe';

export default function About() {
  return (
    <AboutContainerStyled className="about-container">
      <AboutTitleStyled>Sobre Mim</AboutTitleStyled>
      <AboutTextStyled>{sobreMimPOne}</AboutTextStyled>
      <AboutTextStyled>{sobreMimPTwo}</AboutTextStyled>
    </AboutContainerStyled>
  );
}
