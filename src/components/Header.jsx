import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/header.css';

export default function Header() {
  return (
    <header className="header-container">
      <nav>
        <ul className="navbar-links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </header>
  )
}
