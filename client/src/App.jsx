import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import BrowserRouter as Routerimport './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Footer from './component/Footer';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import ProjectState from './context/ProjectState';
import ProfileState from './context/ProfileState';
import CodeOfConduct from './component/Footers/CodeOfConduct'
import Feedback from './component/Footers/Feedback';
import ContactUs from './component/Footers/ContactUs';
import PrivacyPolicy from './component/Footers/PrivacyPolicy';
import TermOfUse from './component/Footers/TermOfUse';
import Community from './component/Community';
import MyProfile from './component/MyProfile'
import ScrollTop from './component/ScrollTop';
import EditProfile from './component/EditProfile';
import Contributers from './component/Contributers';
// import { Link } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
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
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#374151';
      showAlert("Dark mode has been enabled", "success")

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <ProjectState>
        <ProfileState>
          <Router>
            {/* Navbar */}
            <div className="content">
              <Navbar title="Bitbox" home="Home" community="Community" about="About us" myProjects="My projects" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
            </div>
            <div className="First-Bc">
              <div className="alert-container">
                <Alert alert={alert} />
              </div>
              <ScrollTop />
              <Routes>
                <Route exact path="/" element={<Home mode={mode} showAlert={showAlert} />} />
                <Route exact path="/community" element={<Community mode={mode} showAlert={showAlert} />} />
                <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
                <Route exact path="/myprofile" element={<MyProfile mode={mode} showAlert={showAlert} />} />
                <Route exact path="/editprofile" element={<EditProfile mode={mode} showAlert={showAlert} />} />
                <Route exact path="/contibuters" element={<Contributers mode={mode} showAlert={showAlert} />} />
                <Route exact path="/login" element={<Login mode={mode} showAlert={showAlert} />} />
                <Route exact path="/signup" element={<Signup mode={mode} showAlert={showAlert} />} />
                {/* Footer */}
                <Route exact path="/codeofconduct" element={<CodeOfConduct mode={mode} showAlert={showAlert} />} />
                <Route exact path="/feedback" element={<Feedback mode={mode} showAlert={showAlert} />} />
                <Route exact path="/contactus" element={<ContactUs mode={mode} showAlert={showAlert} />} />
                <Route exact path="/privacypolicy" element={<PrivacyPolicy mode={mode} showAlert={showAlert} />} />
                <Route exact path="/termofuse" element={<TermOfUse mode={mode} showAlert={showAlert} />} />
              </Routes>
            </div>
            {/* Conditionally render the footer based on the current route */}
            {!hideFooterRoutes.includes(window.location.pathname) && <Footer />}
          </Router>
        </ProfileState>
      </ProjectState>
    </>
  );
}

export default App;
