// component/FAQ.jsx
import React from 'react';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h2>Question 1: What is this project about?</h2>
        <p>Answer: This project is designed to help users...</p>
      </div>
      <div className="faq-item">
        <h2>Question 2: How do I get started?</h2>
        <p>Answer: To get started, you can...</p>
      </div>
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQ;
