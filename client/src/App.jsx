import { useState } from 'react';
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
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <ProjectState>
        <Router>
          <Navbar title="Open Source" home="Home" about="About us" yourProjects="My projects" showAlert={showAlert} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/yourProjects" element={<UserProjects showAlert={showAlert} />} />
            <Route exact path="/about" element={<About showAlert={showAlert} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </Router>
        <Footer />
      </ProjectState>
    </>
  )
}

export default App
