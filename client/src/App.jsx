import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Footer from './component/Footer';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import UserProjects from './component/UserProjects';
import ProjectState from './context/ProjectState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import BrowserRouter as Router
import Codeofconduct from './component/Footer/Codeofconduct';
import Feedback from './component/Footer/Feedback';
import Contactus from './component/Footer/Contactus';
import Privacypolicy from './component/Footer/Privacypolicy';
import Termsandcondition from './component/Footer/Termsandcondition';
import GlobalProjects from './component/GlobalProjects';
// import Profile from './component/Footer/Authenic/Myprofile'
import ScrollTop from './component/ScrollTop';
import Contributers from './component/Contributers';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Define routes where the footer should not be shown
  const hideFooterRoutes = ['/login', '/signup'];

  return (
    <>
      <ProjectState>
        <Router>
          {/* Navbar */}
          <div className="content">
            <Navbar title="Bitbox" home="Home" community="Community" about="About us" myProfile="My profile" showAlert={showAlert} />
          </div>
          <div className="alert-bar" style={{ position: "none" }}>
            <Alert alert={alert} />
          </div>
          <div className="First-Bc">
            <ScrollTop />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/community" element={<GlobalProjects showAlert={showAlert} />} />
              <Route exact path="/myProfile" element={<UserProjects showAlert={showAlert} />} />
              <Route exact path="/about" element={<About showAlert={showAlert} />} />
              {/* <Route exact path="/profile" element={<Profile showAlert={showAlert} />} /> */}
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
              <Route exact path="/contributers" element={<Contributers showAlert={showAlert} />} />

              {/* Footer */}
              <Route exact path="/codeofconduct" element={<Codeofconduct showAlert={showAlert} />} />
              <Route exact path="/feedback" element={<Feedback showAlert={showAlert} />} />
              <Route exact path="/contactus" element={<Contactus showAlert={showAlert} />} />
              <Route exact path="/Privacypolicy" element={<Privacypolicy showAlert={showAlert} />} />
              <Route exact path="/termsandcondition" element={<Termsandcondition showAlert={showAlert} />} />
            </Routes>
          </div>
          {/* Conditionally render the footer based on the current route */}
          {!hideFooterRoutes.includes(window.location.pathname) && <Footer />}
        </Router>
      </ProjectState>
    </>
  );
}

export default App;
