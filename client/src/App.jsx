import { useState } from 'react';
import './App.css'
import About from './component/About';
import Alert from './component/Alert';
import Footer from './component/Footer'
import Home from './component/Community';
import Login from './component/Login';
import Navbar from './component/Navbar'
import Signup from './component/Signup';
import UserProjects from './component/UserProjects';
import ProjectState from './context/ProjectState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './component/Community';
import SearchBar from './component/SearchBar';
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
          <Navbar title="Kaiyuan" home="Home" community="Community" about="About us" myProjects="My projects" showAlert={showAlert} />
          <SearchBar />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/community" element={<Community showAlert={showAlert} />} />
            <Route exact path="/myProjects" element={<UserProjects showAlert={showAlert} />} />
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
