import React from 'react';
import Navbar from '../components/Navbar';

function AboutPage() {
  const darkStyle = true;
  function handleToTop() {
    const p = document.querySelector('.about');
    p.scrollTo(0, 0);
  }
  return (
    <>
      <Navbar darkStyle={darkStyle} />
      <figure className="theme-bgc--b">
        <section className="theme-bgc--b__border">
          <main className="about container">
            <figure className="about__title"></figure>
            <figure className="about__info"></figure>
            <section className="about__skill">
              <figure className="about__skill__title"></figure>
              <figure className="about__skill__info"></figure>
            </section>
            <section className="about__ex">
              <figure className="about__ex__title"></figure>
              <figure className="about__ex__info"></figure>
            </section>
            <figure className="about__mail"></figure>
            <section className="backToTop">
              <span onClick={handleToTop}>Back To Top</span>
            </section>
          </main>
        </section>
      </figure>
    </>
  );
}

export default AboutPage;
