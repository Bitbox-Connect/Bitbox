import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const host = "http://localhost:5000";

const VerifyEmail = () => {
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(null);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleVerification = () => {
    fetch(`${host}/api/auth/verify/${token}`, {
      method: 'POST',
    })
      .then(response => {
        if (response.status === 200) {
          setIsVerified(true);
          setModalMessage('Email verified! You can now log in.');
        } else if (response.status === 400) {
          setIsVerified(false);
          setModalMessage('Invalid or expired verification link');
        }
        setShowModal(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    handleVerification();
  }, [token]);

  const handleModalClose = () => {
    setShowModal(false);
    if (isVerified) {
      navigate('/login');
    }else{
        navigate('/signup')
    }
  };

  return (
    <div>
      <h2>Verify Your Email</h2>
      {isLoading ? (
        <p>Verifying your email...</p>
      ) : (
        <button onClick={handleVerification} disabled={isLoading}>
          {isLoading ? 'Verifying...' : 'Verify Email'}
        </button>
      )}

      {/* Modal Implementation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{modalMessage}</h3>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
