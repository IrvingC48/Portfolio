import React from 'react'
import { Link } from 'react-router-dom'

const RightNav = ({ styled }) => {
  return (
    <div className={`menu-nav ${styled}`}>
      <div className="nav-container">
        <Link className="nav-item is-primary" to="/">
          Home
        </Link>
        <Link className="nav-item is-primary" to="about">
          About Me
        </Link>
        <Link className="nav-item is-primary" to="projects">
          Projects
        </Link>
        <Link className="nav-item is-primary" to="contact">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default RightNav
