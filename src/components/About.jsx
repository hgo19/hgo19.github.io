import React from 'react'

import '../styles/about.css';

import aboutPortguese from '../texts/aboutMe'

export default function About() {
  return (
    <section className="about-container">
      <h1>Sobre Mim</h1>
      <p className="about-text">{aboutPortguese}</p>
    </section>
  )
}
