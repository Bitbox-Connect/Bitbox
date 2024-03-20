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
import Codeofconduct from './component/Footer/Codeofconduct';
import Asoc from './component/Footer/Asoc';
import Contactus from './component/Footer/Contactus';
import Upliftproject from './component/Footer/Upliftproject';
import GlobalProjects from './component/GlobalProjects';
import ScrollTop from './component/ScrollTop';

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
          {/* Navbar */}
          <div className="content">
            <Navbar title="Kaiyuan" home="Home" community="Community" about="About us" myProjects="My projects" showAlert={showAlert} />
          </div>
          <div className="Main-Bc">
            <Alert alert={alert} />
          </div>
          <div className="First-Bc">
            <ScrollTop />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/community" element={<GlobalProjects showAlert={showAlert} />} />
              <Route exact path="/myProjects" element={<UserProjects showAlert={showAlert} />} />
              <Route exact path="/about" element={<About showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
              {/* Footer */}
              <Route exact path="/codeofconduct" element={<Codeofconduct showAlert={showAlert} />} />
              <Route exact path="/asoc" element={<Asoc showAlert={showAlert} />} />
              <Route exact path="/contactus" element={<Contactus showAlert={showAlert} />} />
              <Route exact path="/upliftproject" element={<Upliftproject showAlert={showAlert} />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ProjectState>
    </>
  )
}

export default App;
