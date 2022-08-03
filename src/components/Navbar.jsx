import React from 'react';
import { Link } from 'react-router-dom';
import { router } from '../lib/router';
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className="navbar__list">
        {router.map(({ link, name }) => (
          <li key={name}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
