import gif from "../assets/images/Vector Gif/R.gif";
import PropTypes from 'prop-types';

const ErrorPage = (props) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen mt-16 left-0 z-50"
      style={{ background: props.mode === "black" ? "" : "" }}
    >
      <div className="w-11/12 md:w-3/5 lg:w-2/5 h-auto p-8 text-center bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        style={{
          background: props.mode === 'dark' ? 'black' : 'white',
          color: props.mode === 'dark' ? 'black' : 'white',
        }}
      >
        <img
          src={gif}
          alt="Error"
          className="w-full h-48 object-contain rounded-md mb-6 transition duration-500 ease-in-out transform hover:scale-105"
        />
        <div className='ErrorPage'>
          <h1
            className="text-3xl font-extrabold mb-2 text-black"
            style={{
              background: props.mode === 'dark' ? '#000' : '',
              color: 'black',
              borderRadius: '0.5rem',
              padding: '0.5rem 1rem',
            }}
          >
            Oops! Page not found
          </h1>
          <p
            className="text-lg mb-4 text-black"
            style={{
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
            }}
          >
            The page you are looking for doesn’t exist or has been moved.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => window.location.href = '/'}
            className="px-5 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Go to Homepage
          </button>

          <button
            onClick={() => window.location.href = '/Login'}
            className="px-5 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300 transform hover:scale-105"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div >
  );
};

ErrorPage.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default ErrorPage;
