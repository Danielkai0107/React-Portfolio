import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <figure className="theme-bgc">
        <section className="theme-bgc__border">
          <main className="home container">
            <section className="home__circle"></section>
            <section className="home__circle2"></section>
            <Link to="/Project">
              <section className="home__title">
                <h1>FRONT-END</h1>
                <h1>ENGINEER</h1>
                <h1>+ART</h1>
                <h1>DESIGNER</h1>
              </section>
            </Link>
          </main>
        </section>
      </figure>
    </>
  );
}

export default HomePage;
