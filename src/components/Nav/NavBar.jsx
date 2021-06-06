import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.component.css';

export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="menu-container">
          <div className="menu-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          <div className="menu-item">
            <NavLink to="/favorites">Favorites</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
