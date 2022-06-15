import React from 'react'
import ProjectItem from '../Pages/ProjectItem'
import { ProjectList } from '../Helpers/ProjectList'

import "../styles/Projects.css"

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
       <div className="projectList">
          {ProjectList.map((projectt,indx)=>{
            return <ProjectItem id={indx} name={projectt.name}  image={projectt.image}/>
          })}
      </div> 
        
    </div>
  )
}

export default Projects