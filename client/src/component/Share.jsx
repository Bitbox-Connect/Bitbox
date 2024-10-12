import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Share from '../assets/images/Share.png';

const ShareComponent = (props) => {
  const handleShareClick = () => {
    const shareLink = window.location.href;
    navigator.clipboard.writeText(shareLink).then(() => {
      toast.success('Link copied to clipboard!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: '#fff',   // White background
          color: '#000',             // Force black text color
          fontWeight: 'bold',        // Optional: Make the text bold for better visibility
        },
        progressStyle: {
          backgroundColor: '#000',   // Black progress bar
        },
      });
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <img className="w-100 rounded-5" src={Share} alt="Share" />
        </div>
        <div className="col-lg-6">
          <div className="p-5 mt-4">
            <h1 className="display-4" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              Share
            </h1>
            <p className="lead" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              🌐 Join the vibrant Bitbox Opensource Community today! Whether you're a seasoned developer or just starting out, there's a place for you to collaborate,
              innovate, and make a difference. Let's shape the future of digital exchange together! #BitboxCommunity #OpenSource 🚀💻
            </p>
            <button
              onClick={handleShareClick}
              className="btn btn-outline-dark"
              style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            >
              Share Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShareComponent;
