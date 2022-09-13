import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioContext } from '../func/context';

const Burger = () => {
  const { menuOpen, setMenuOpen, dark, setDark } = useContext(PortfolioContext);
  function handleMenuClose(mode) {
    setMenuOpen(false);
    setDark(mode);
  }
  return (
    <>
      {menuOpen && (
        <article className={dark ? 'burger-b' : 'burger'}>
          <ul>
            <li className={dark ? 'burger-b__title' : 'burger__title'}>
              Daniel Portfolio
            </li>
            <li className={dark ? 'burger-b__link' : 'burger__link'}>
              <Link
                to="/"
                onClick={() => {
                  handleMenuClose(false);
                }}
              >
                home
              </Link>
            </li>
            <li className={dark ? 'burger-b__link' : 'burger__link'}>
              <Link
                to="/Project"
                onClick={() => {
                  handleMenuClose(false);
                }}
              >
                project
              </Link>
            </li>
            <li className={dark ? 'burger-b__link' : 'burger__link'}>
              <Link
                to="/About"
                onClick={() => {
                  handleMenuClose(true);
                }}
              >
                about
              </Link>
            </li>
          </ul>
          <section className="close__area" onClick={handleMenuClose}></section>
        </article>
      )}
    </>
  );
};

export default Burger;
