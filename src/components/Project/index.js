import React from 'react'
import './project.scss';

const Project = ({project}) => {
  return (
    <div className="container-project font-card">
      <figure className="project-image">
        <img src={project.image} alt="" className="image"></img>
        {/* <img src="https://bulma.io/images/placeholders/480x320.png" alt="" className="image"></img> */}
      </figure>
      <div className="project-descrp">
        <div className="project-text">
          <h1 className="descp-title">{project.title}</h1>
          <span className="descp-techs">{project.techs}</span>
          <p className="descp-text">
            {project.description}
          </p>
        </div>
        <div className="container-button">
          <a href={project.link_project} className="button">Link to project</a>
          <a href={project.link_repository} className="button">Link to repository</a>
        </div>
      </div>
    </div>
  )
}

export default Project
