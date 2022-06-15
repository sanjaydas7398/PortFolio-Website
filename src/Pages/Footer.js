import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import Facebook from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className="footer">
         <div className="socialMedia">
          <InstagramIcon />
          <TwitterIcon />
          <Facebook />
          <LinkedInIcon />
           <p>&copy; 2022 sanjaydas.com</p>
         </div>
      </div>
  )
}

export default Footer