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
            <section className="home__title">
              <Link to={'/React-Portfolio/Project'}></Link>
              <figure className="home__circle"></figure>
            </section>
          </main>
        </section>
      </figure>
    </>
  );
}

export default HomePage;
