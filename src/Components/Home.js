import React from 'react'
import LinkedIn from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"
//import html from "../Images/html.png"


const Home = () => {
  return (
      <div className="home">
         <div className="about">
          <h2>Welcome To My Personal Portfolio</h2>
          <div className='prompt'>
            <p>Hi,My name is Sanjay Das</p>
             <LinkedIn />
             <EmailIcon />
             <GithubIcon />
          </div>
         </div>
             <div className="skills">
              <h1>Skills</h1>
              <ol className="list">
                 <li className="item">
                    <h2>Front-End</h2>
                    <span>
                      Html, Css, Css3, JavaScript, Reactjs, Redux, BootStrap, Material Ui,
                      StyledComponents
                    </span>
                    
                 </li>

                 <li className="item">
                    <h2>Back-End</h2>
                    <span>
                      NodeJS, ExpressJS, Npm, GraphQL, MongoDB, MySQL,
                    </span>
                 </li>

                 <li className="item">
                    <h2>Languages</h2>
                    <span>
                      JavaScript, TypeScript, Python
                    </span>
                 </li>
              </ol>
             </div>

             
        
      </div>
  )
}

export default Home