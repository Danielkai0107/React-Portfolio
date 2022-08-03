import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Navbar />
      <figure className="theme-bgc">
        <section className="theme-bgc__border">
          <main className="home container">
            <figure className="home__title">
              <Link to={'/React-Portfolio/Project'}></Link>
            </figure>
            <section className="home__circle">
              <figure></figure>
              <span>click</span>
              <Link to={'/React-Portfolio/Project'}></Link>
            </section>
          </main>
        </section>
      </figure>
    </>
  );
}

export default HomePage;
