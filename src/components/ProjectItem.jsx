import React from 'react';

function ProjectItem({ item }) {
  return (
    <section className="project__item">
      <ul className="left">
        <li className="left__number">
          <p>Project</p>
          <h1>{item.number}</h1>
        </li>
        <li className="left__circle">
          <figure className="text"></figure>
          <figure className="circle"></figure>
        </li>
        <li className="left__github">
          <a href={item.github} target="_blank" rel="noreferrer">
            Github Code <span>↗</span>
          </a>
        </li>
      </ul>
      <ul className="right">
        <li className="right__img">
          <div className="mask"></div>
          <a href={item.website} target="_blank" rel="noreferrer">
            <img src={item.img} alt="" />
          </a>
        </li>
        <li className="right__title">
          <img src={item.title} alt="" />
        </li>
      </ul>
    </section>
  );
}

export default ProjectItem;
