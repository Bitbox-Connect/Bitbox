import './App.css'
import About from './component/About';
import Alert from './component/Alert';
import Footer from './component/Footer'
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar'
import Signup from './component/Signup';
import UserProjects from './component/UserProjects';
import ProjectState from './context/ProjectState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <ProjectState>
        <Router>
          <Navbar title="Open Source" home="Home" about="About us" yourProjects="Your projects" />
          <Alert message="OpenSource Alert" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/yourProjects" element={<UserProjects />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
        <Footer />
      </ProjectState>
    </>
  )
}

export default App
