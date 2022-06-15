import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
const Experience = () => {
  return (
      <div className="experience">
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement className="vertical-timeline-element--education" date="2018 - 2021"
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon />}
          >
            <h3 className="verticl-timeline-element-title"> Master of Computer Application</h3>
            <p>Fakir Mohan University,  Odisha</p> 
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2015 - 2018"
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon />}
          >
            <h3 className="verticl-timeline-element-title"> Bachlor Of Science </h3>
            <h4 className="vertical-timeline-element-subtitle">Bachlor of Degree</h4>
            <p>Utkal University ,Odisha</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2013 - 2015"
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon />}
          >
            <h3 className="verticl-timeline-element-title">Intermediate of Science</h3>
            <h4 className="vertical-timeline-element-subtitle">K.P Junior College,Odisha</h4>
            
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
  )
}

export default Experience