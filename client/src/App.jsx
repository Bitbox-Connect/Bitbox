import { useAtom } from "jotai";
import { modeAtom } from "./atom/Atom";
import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingBar from "react-top-loading-bar";
import About from "./component/About";
import BlogPage from "./component/Blog";
import Alert from "./component/Alert";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import ProjectState from "./context/ProjectState";
import ProfileState from "./context/ProfileState";
import CodeOfConduct from "./component/Footers/Codeofconduct";
import Feedback from "./component/Footers/Feedback";
import ContactUs from "./component/Footers/Contactus";
import PrivacyPolicy from "./component/Footers/Privacypolicy";
import TermOfUse from "./component/Footers/TermOfUse";
import Community from "./component/Community";
import MyProject from "./component/MyProject";
import ScrollTop from "./component/ScrollTop";
import EditProfile from "./component/EditProfile";
import Contributors from "./component/Contributors";
import Discussion from "./component/Discussion";
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";
import NotFound from "./component/NotFound";
import ProgressBar from "./component/ProgressBar/ProgressBar";
import Cursor from './component/Cursor';
import ReadMoreBlog from './component/ReadMoreBlog';
import AI from "./component/AI";
import AOS from "aos";
import "aos/dist/aos.css";
import Collab from "./component/Collab";
import CreateBlog from "./component/CreateBlog";
import LoginOTP from "./component/LoginPhone";
import UploadProject from "./component/UploadProject";


const Layout = ({ children, mode, setProgress, toggleMode, showAlert }) => {
  return (
    <div className="h-full w-full">
      <Navbar
        title="BITBOX"
        home="Home"
        about="About Us"
        community="Community"
        projects="Projects"
        blog="Blogs"
        discussion="Discussion"
        contributors="Contributors"
        ai="AI"
        Feedback="Feedback"
        showAlert={showAlert}
        mode={mode}
        toggleMode={toggleMode}
      />
      {children}
      <Footer mode={mode} setProgress={setProgress} setAlert={showAlert} />
    </div>
  );
};

function App() {
  const [mode, setMode] = useAtom(modeAtom);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [progress, setProgress] = useState(0);
  const [islogged, setloggedin] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
      document.body.style.backgroundColor =
        savedMode === "dark" ? "black" : "white";
      document
        .querySelectorAll("*")
        .forEach(
          (element) =>
            (element.style.color = savedMode === "dark" ? "white" : "")
        );
    }
  }, [setMode]);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document
        .querySelectorAll("*")
        .forEach((element) => (element.style.color = "white"));
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document
        .querySelectorAll("*")
        .forEach((element) => (element.style.color = ""));
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-full w-screen">
      <Cursor />
      <ProjectState>
        <ProfileState>
          <LoadingBar color="blue" progress={progress} onLoaderFinished={() => setProgress(0)} />
          <div className="alert-container"> <Alert alert={alert} /> </div>
          <ProgressBar mode={mode} />
          <ScrollTop />
          <Layout mode={mode} setProgress={setProgress} toggleMode={toggleMode} showAlert={showAlert} >
            <Routes>
              <Route exact path="/" element={<Home mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/contributors" element={<Contributors mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/discussion" element={<Discussion mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/community" element={<Community mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/ai" element={<AI mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/about" element={<About mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/feedback" element={<Feedback mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/blog" element={<BlogPage mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/collab" element={<Collab mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/myproject' element={<MyProject mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/editprofile' element={<EditProfile mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login mode={mode} setProgress={setProgress} showAlert={showAlert} loggedin={islogged} setloggedin={setloggedin} />} />
              <Route exact path="/login-otp" element={<LoginOTP mode={mode} setProgress={setProgress} showAlert={showAlert} loggedin={islogged} setloggedin={setloggedin} />} />
              <Route exact path='/signup' element={<Signup mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/forgot-password' element={<ForgotPassword mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/reset-password' element={<ResetPassword mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/codeofconduct' element={<CodeOfConduct mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/contactus' element={<ContactUs mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/feedback' element={<Feedback mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/privacypolicy' element={<PrivacyPolicy mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/termofuse' element={<TermOfUse mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/uploadProject' element={<UploadProject mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/createBlogPost' element={<CreateBlog />} />
              <Route exact path='/read-more-blog/:id' element={<ReadMoreBlog mode={mode} setProgress={setProgress} showAlert={showAlert} />} />
              <Route exact path='/*' element={<NotFound />} />
            </Routes>
          </Layout>
        </ProfileState>
      </ProjectState>
    </div>
  );
}

// Prop validation
App.propTypes = {
  mode: PropTypes.string,
  setProgress: PropTypes.func,
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
  islogged: PropTypes.bool,
};

Layout.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
  setProgress: PropTypes.func,
  toggleMode: PropTypes.func,
  showAlert: PropTypes.func,
};

export default App;
