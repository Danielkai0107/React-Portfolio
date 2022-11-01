import React from 'react';

function ProjectItem({ item }) {
  return (
    <section className="project__item">
      <ul className="left">
        <li className="left__title">
          <h1>Project</h1>
          <p>{item.number}</p>
        </li>
        <li className="left__decoration">
          <a
            className="github"
            href={item.github}
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
            <p>Github</p>
          </a>
          <a
            className="figma"
            href={item.figma}
            target="_blank"
            rel="noreferrer"
          >
            <span></span>
            <p>Figma</p>
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
          <h1>SIDE PROJECT</h1>
          <h2>{item.title}</h2>
        </li>
      </ul>
    </section>
  );
}

export default ProjectItem;
