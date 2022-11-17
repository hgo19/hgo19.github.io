import React from 'react';

import '../styles/about.css';

import { sobreMimPOne, sobreMimPTwo } from '../texts/aboutMe';

export default function About() {
  return (
    <section className="about-container">
      <h1>Sobre Mim</h1>
      <p className="about-text">{sobreMimPOne}</p>
      <p className="about-text">{sobreMimPTwo}</p>
    </section>
  );
}
