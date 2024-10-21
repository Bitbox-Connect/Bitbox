import React, { useEffect, useState } from 'react'; // Import useState and useEffect
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import LoadingBar from 'react-top-loading-bar';
import About from './component/About';
import Alert from './component/Alert';
import Footer from './component/Footer';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import ProjectState from './context/ProjectState';
import ProfileState from './context/ProfileState';
import CodeOfConduct from './component/Footers/Codeofconduct';
import Feedback from './component/Footers/Feedback';
import ContactUs from './component/Footers/Contactus';
import PrivacyPolicy from './component/Footers/Privacypolicy';
import TermOfUse from './component/Footers/TermOfUse';
import Community from './component/Community';
import MyProfile from './component/MyProfile';
import ScrollTop from './component/ScrollTop';
import EditProfile from './component/EditProfile';
import Contributers from './component/Contributers';
import Discussion from './component/Discussion';
import { useAtom } from 'jotai';
import { modeAtom } from './atom/Atom';
import ForgotPassword from './component/forgotpass';
import VerifyEmail from './component/Verify';
import NotFound from './component/NotFound';
import MiniChatbot from './component/MiniChatbot'
import ProgressBar from './component/ProgressBar/ProgressBar';

// Main Layout Component

const Layout = ({ children, mode, setProgress, toggleMode, showAlert }) => {
  const location = useLocation(); // Use location inside Router

  // Define routes where the footer or navbar should not be shown
  const hideNavbarRoutes = ['/login', '/signup'];
  const hideFooterRoutes = ['/login', '/signup'];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar
          title="BITBOX"
          home="Home"
          about="About Us"
          community="Community"
          discussion="Discussion"
          showAlert={showAlert}
          mode={mode}
          toggleMode={toggleMode}
        />
      )}

      {/* Main content */}
      {children}

      {/* Conditionally render the Footer */}
      {!hideFooterRoutes.includes(location.pathname) && (
        <Footer
          mode={mode}
          setProgress={setProgress}
          setAlert={showAlert}
        />
      )}
    </>
  );
};

function App() {
  const [mode, setMode] = useAtom(modeAtom)
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
      document.body.style.backgroundColor = savedMode === 'dark' ? 'black' : 'white';
      document.querySelectorAll('*').forEach(element => element.style.color = savedMode === 'dark' ? 'white' : '');
    }
  }, [setMode]);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.querySelectorAll('*').forEach(element => element.style.color = 'white');
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.querySelectorAll('*').forEach(element => element.style.color = '');
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <div>
      <ProjectState>
        <ProfileState>
          <Router>
            <LoadingBar
              color='blue'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <div className="alert-container">
              <Alert alert={alert} />
            </div>
            <ProgressBar mode={mode}/>
            <ScrollTop />
            <MiniChatbot />

            {/* Wrap everything inside the Layout component */}
            <Layout mode={mode} setProgress={setProgress} toggleMode={toggleMode} showAlert={showAlert}>
              <Routes>
                <Route exact path="/" element={<Home mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/discussion" element={<Discussion mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/community" element={<Community mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/about" element={<About mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/myprofile" element={<MyProfile mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/editprofile" element={<EditProfile mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/contributers" element={<Contributers mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/login" element={<Login mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/signup" element={<Signup mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/ForgotPassword" element={<ForgotPassword mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/codeofconduct" element={<CodeOfConduct mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/feedback" element={<Feedback mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/contactus" element={<ContactUs mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/privacypolicy" element={<PrivacyPolicy mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/termofuse" element={<TermOfUse mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
                <Route exact path="/verify/:token" element={<VerifyEmail />} />
                {/* 404 Route */}
            <Route exact path="/*" element={<NotFound />} />   
              </Routes>
              
            </Layout>
          </Router>
        </ProfileState>
      </ProjectState>
    </div>
  );
}

// Props Validation
App.propTypes = {
  children: PropTypes.string,
  mode: PropTypes.string,
  setProgress: PropTypes.string,
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
  myProjects: PropTypes.string,
  about: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

// Props Validation
Layout.propTypes = {
  children: PropTypes.node, // Allows children to be any renderable React node, including JSX
  mode: PropTypes.string,
  setProgress: PropTypes.func, // Should be a function
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
  myProjects: PropTypes.string,
  about: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};


export default App;



