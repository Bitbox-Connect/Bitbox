import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const InputModal = ({ isOpen, onClose, onSubmit, mode }) => {
  const [name, setName] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleJoin = () => {
    if (!name) {
      setModalMessage("Name cannot be empty. Please enter your name.");
    } else if (name.length < 3 || name.length > 20) {
      setModalMessage("Name must be between 3 and 20 characters long.");
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      setModalMessage("Name can only contain letters and spaces.");
    } else {
      onSubmit(name); // Pass the valid name to the parent component
      onClose(); // Close the modal
    }
  };

  // Prevents keyboard accessibility issues by handling Enter key for submit
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleJoin();
    }
  };

  if (!isOpen) return null;

  return ( /*fixed the inputmodal overlay issue in dark mode*/
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`rounded-lg shadow-lg p-8 w-[24rem] h-auto ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-lg font-semibold mb-4 text-center"
          style={{
            color: mode === "dark" ? "white" : "black",
          }}>
          Enter your name to join:
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setModalMessage(''); // Clear error message on input change
          }}
          style={{
            color: mode === "dark" ? "white" : "black",
            backgroundColor: mode === "dark" ? "#444" : "white", // Adjust input background color
          }}
          onKeyDown={handleKeyDown} // Allow Enter key to submit
          placeholder="Enter your name"
          className="border rounded py-2 px-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {modalMessage && <p className="text-red-500 mb-3 text-md text-center">{modalMessage}</p>}
        <div className="flex justify-center">
          <button
            onClick={handleJoin}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

InputModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default InputModal;
