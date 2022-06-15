import React,{useState,useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder'

const Navbar = () => {
    const[expand,setExpand] = useState(false)

    const location = useLocation();

    useEffect(()=>{
         setExpand(false)
    },[location])
  return (
    <div className="navbar" id={expand ? "open":"close"}>
         <div className="toggleButton">
            <button onClick={()=>{setExpand((prev)=>!prev)}}><ReorderIcon /></button>
         </div>

         <div className="links">
            <Link to="/" >Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
         </div>
    </div>
  )
}

export default Navbar