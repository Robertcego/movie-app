import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
