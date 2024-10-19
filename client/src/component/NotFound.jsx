import React from 'react';
import gif from "../assets/images/Vector Gif/R.gif"
import PropTypes from 'prop-types';
const ErrorPage = (props) => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-blue-100 mt-8 left-0 z-50">
      <div className="w-[75vw] h-[75vh] p-4 text-center bg-white shadow-md rounded-lg">
        <img 
          src={gif}
          alt="Error"
          className="w-[75vw] h-[40vh]  rounded-md"
        />
        <div className='ErrorPage'>
        <h1 className="mt-4 text-3xl font-bold text-gray-800" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Oops! Page not found</h1>
        <p className="mt-2 text-gray-600" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          The page you are looking for doesn’t exist or has been moved.
        </p>
        </div>
        
        <button
          onClick={() => window.location.href = '/'}
          className="px-4 py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Go to Homepage
        </button>
        <button
          onClick={() => window.location.href = '/community'}
          className="px-4 py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 ml-4"
        >
          Go to Community
        </button>
      </div>
    </div>
  );
};
ErrorPage.propTypes = {
    showAlert: PropTypes.func,
    mode: PropTypes.string,
  };
  
export default ErrorPage;