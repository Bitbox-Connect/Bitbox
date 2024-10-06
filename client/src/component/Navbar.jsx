import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AddProject from './AddProject';
import logo from '../assets/images/logo.png';
import avatarDropdown from '../assets/images/Dropdown/avatar.png';
import { auth } from '../component/Firebase/Setup';

function Navbar({ title, home, community, discussion, about, mode, toggleMode, showAlert }) {
    const host = "http://localhost:5000";
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

   
    useEffect(() => {
        axios.get(`${host}/getAvatarImage`)
            .then(res => {
                setImage(res.data[res.data.length - 1].image);
            })
            .catch(err => {
                setImageError(true);
                console.log(err);
            });
    }, [host]);

  
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

      
        document.addEventListener('mousedown', handleClickOutside);

        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const renderUploadButton = () => {
        if (location.pathname === '/myprofile') {
            return <AddProject mode={mode} showAlert={showAlert} />;
        }
        return null;
    };

    const handleLogout = async () => {
        if (window.confirm("Are you sure you want to log out?")) {
            try {
                await auth.signOut();
                localStorage.removeItem('token');
                navigate('/login');
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <nav className={`flex items-center justify-between p-4 border-b ${isScrolled ? 'bg-white shadow-lg border-b-2 fixed top-0 left-0 right-0 z-50 transform -translate-y-2' : 'bg-transparent border-b-0'} transition-all duration-300 ease-in-out shadow-2xl hover:translate-y-1 hover:shadow-2xl`}>
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="logo" className="h-10 w-10" />
                    <span className={`text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Bitbox</span>
                </div>

                <div className="flex space-x-6">
                    <Link to="/" className={`relative hover:text-blue-500 transition ${location.pathname === '/home' ? 'text-blue-500 ' : (mode === 'dark' ? 'text-gray-300' : 'text-gray-800')}`}>
                        Home
                    </Link>
                    <Link to="/about" className={`relative hover:text-blue-500 transition ${location.pathname === '/about' ? 'text-blue-500 underline' : (mode === 'dark' ? 'text-gray-300' : 'text-gray-800')}`}>
                        About
                    </Link>
                    <Link to="/community" className={`relative hover:text-blue-500 transition ${location.pathname === '/community' ? 'text-blue-500 underline' : (mode === 'dark' ? 'text-gray-300' : 'text-gray-800')}`}>
                        Community
                    </Link>
                    <Link to="/discussion" className={`relative hover:text-blue-500 transition ${location.pathname === '/discussion' ? 'text-blue-500 underline' : (mode === 'dark' ? 'text-gray-300' : 'text-gray-800')}`}>
                        Discussion
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    {!localStorage.getItem('token') ? (
                        <>
                            <Link to='/login' className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105">Login</Link>
                            <Link to='/signup' className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105">Signup</Link>
                        </>
                    ) : (
                        <>
                            {renderUploadButton()}
                            <div className="relative flex items-center" ref={dropdownRef}>
                                <button onClick={toggleMode} className="p-2 text-xl transition-transform transform hover:rotate-45">
                                    {mode === 'dark' ? '🌙' : '☀️'}
                                </button>
                                <img
                                    src={image || avatarDropdown}
                                    alt="avatar"
                                    className="h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-105"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-20 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-300 animate-fadeIn">
                                        <Link to="/myprofile" className="block px-4 py-2 text-black hover:bg-gray-100 transition-all">My Profile</Link>
                                        <Link to="/editprofile" className="block px-4 py-2 text-black hover:bg-gray-100 transition-all">Edit Profile</Link>
                                        <hr className="my-1 border-gray-200" />
                                        <a onClick={handleLogout} className="block px-4 py-2 text-red-500 hover:bg-red-100 transition-all cursor-pointer">Logout</a>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </nav>
            <hr className="border-gray-200 mt-1" /> 
        </>
    );
}

export default Navbar;
