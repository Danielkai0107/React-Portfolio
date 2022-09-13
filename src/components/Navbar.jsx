import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioContext } from '../func/context';

function Navbar() {
  const { dark, setDark, setMenuOpen } = useContext(PortfolioContext);
  function handleDarkModeClick(mode) {
    setDark(mode);
  }
  return (
    <nav className={dark ? 'navbar--b' : 'navbar'}>
      <ul className={dark ? 'navbar--b__circle' : 'navbar__circle'}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul className={dark ? 'navbar--b__list' : 'navbar__list'}>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleDarkModeClick(false);
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Project"
            onClick={() => {
              handleDarkModeClick(false);
            }}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            onClick={() => {
              handleDarkModeClick(true);
            }}
          >
            About
          </Link>
        </li>
      </ul>
      <span
        className={dark ? 'navbar--b__burger' : 'navbar__burger'}
        onClick={() => {
          setMenuOpen(true);
        }}
      ></span>
    </nav>
  );
}

export default Navbar;
