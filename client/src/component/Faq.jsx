// component/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css'; // Import the CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h2 onClick={() => toggleAnswer(index)} className="faq-question">
            {item.question}
          </h2>
          {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

const faqData = [
  {
    question: "What is BitBox?",
    answer: "BitBox is a user-friendly platform that simplifies version control and collaboration for developers.",
  },
  {
    question: "How does BitBox enhance collaboration?",
    answer: "BitBox offers intuitive tools that enable both solo programmers and large teams to manage projects efficiently.",
  },
  {
    question: "How do I get started with BitBox?",
    answer: "You can sign up for an account on BitBox and start managing your projects right away.",
  },
  {
    question: "Is BitBox compatible with modern development workflows?",
    answer: "Yes, BitBox seamlessly integrates with modern development workflows, providing fast and reliable performance.",
  },
  {
    question: "How can I contact support if I need help?",
    answer: "You can reach out to support through the 'Contact Us' page or by emailing support@example.com.",
  },
];


export default FAQ;
