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
import CodeOfConduct from './component/Footers/Codeofconduct'
import Feedback from './component/Footers/Feedback';
import ContactUs from './component/Footers/Contactus';
import PrivacyPolicy from './component/Footers/Privacypolicy';
import TermOfUse from './component/Footers/TermOfUse';
import Community from './component/Community';
import MyProfile from './component/MyProfile'
import ScrollTop from './component/ScrollTop';
import EditProfile from './component/EditProfile';

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
        <ProfileState>
          <Router>
            {/* Navbar */}
            <div className="content">
              <Navbar title="Bitbox" home="Home" community="Community" about="About us" myProjects="My projects" showAlert={showAlert} />
            </div>
            <div className="First-Bc">
              <div className="alert-container">
                <Alert alert={alert} />
              </div>
              <ScrollTop />
              <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert} />} />
                <Route exact path="/community" element={<Community showAlert={showAlert} />} />
                <Route exact path="/about" element={<About showAlert={showAlert} />} />
                <Route exact path="/myprofile" element={<MyProfile showAlert={showAlert} />} />
                <Route exact path="/editprofile" element={<EditProfile showAlert={showAlert} />} />
                <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
                {/* Footer */}
                <Route exact path="/codeofconduct" element={<CodeOfConduct showAlert={showAlert} />} />
                <Route exact path="/feedback" element={<Feedback showAlert={showAlert} />} />
                <Route exact path="/contactus" element={<ContactUs showAlert={showAlert} />} />
                <Route exact path="/privacypolicy" element={<PrivacyPolicy showAlert={showAlert} />} />
                <Route exact path="/termofuse" element={<TermOfUse showAlert={showAlert} />} />
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
