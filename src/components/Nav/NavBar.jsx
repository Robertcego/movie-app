import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import './NavBar.component.css';

export default function NavBar() {
  return (
    <header>
      <nav>
        <Search />
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
}
