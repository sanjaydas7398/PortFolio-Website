
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Projects from './Components/Projects';
import Experience from './Components/Experience'; 
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import "./App.css"
import ProjectDisplay from './Components/ProjectDisplay';
 

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        <Footer />
      </Router>
      </div>
  )
}

export default App