import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav >
        <div>
          <NavLink to="/">Cars</NavLink>
          <NavLink to="/brand">Brand</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header