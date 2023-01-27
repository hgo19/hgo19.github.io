import React from 'react';

import {
  AboutContainerStyled,
  AboutTitleStyled,
  AboutTextStyled,
} from './styles';

import { sobreMimPOne, sobreMimPTwo } from '../../assets/texts/aboutMe';

export default function About() {
  return (
    <AboutContainerStyled id="about-me">
      <AboutTitleStyled>Sobre Mim</AboutTitleStyled>
      <AboutTextStyled>{sobreMimPOne}</AboutTextStyled>
      <br />
      <AboutTextStyled>{sobreMimPTwo}</AboutTextStyled>
    </AboutContainerStyled>
  );
}
