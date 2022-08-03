import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { items } from '../lib/items';

function ProjectPage() {
  function handleToTop() {
    const p = document.querySelector('.project');
    p.scrollTo(0, 0);
  }

  return (
    <figure className="theme-bgc">
      <section className="theme-bgc__border">
        <main className="project container">
          {items.map((item) => (
            <ProjectItem item={item} key={item.number} />
          ))}
          <span className="backToTop" onClick={handleToTop}>
            Back To Top
          </span>
        </main>
      </section>
    </figure>
  );
}

export default ProjectPage;
