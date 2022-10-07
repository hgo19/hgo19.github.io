import React from 'react'

import Apresentation from '../components/Apresentation';
import Skills from '../components/Skills';
import About from '../components/About';

export default function Home() {
  return (
    <main>
      <Apresentation />
      <Skills />
      <About />
    </main>
  )
}
