import React from 'react'
import Project from '../components/Project'
import { ProjectsData } from '../data/projects'

const Projects = () => {
  return (
    <div>
      {ProjectsData.map((projectD, index) => {
        return (
          <Project key={index} project={projectD}/>
        )
      })
      }
    </div>
  )
}

export default Projects
