import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../Helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
    const {id} = useParams()
    //const [project] = ProjectList[id]
    //console.log(ProjectList[id])
    const ppp = ProjectList[id]
    //console.log(ppp.image)
    //console.log(ppp.name)
  return (
        <div className="project">
            <h1>{ppp.name}</h1>
            <img alt={"wrong"} src={ppp.image} />
            <p>
               <b> Skills:</b>{ppp.skills}
            </p>
            <GitHubIcon /> 
            
        </div>
  )
}

export default ProjectDisplay