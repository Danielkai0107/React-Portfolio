import React from 'react';
import { Link } from 'react-router-dom';
import { router } from '../lib/router';
function Navbar({ darkStyle }) {
  return (
    <nav className={darkStyle ? 'navbar--b' : 'navbar'}>
      <ul className={darkStyle ? 'navbar--b__circle' : 'navbar__circle'}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className={darkStyle ? 'navbar--b__list' : 'navbar__list'}>
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
