import React, { useState } from 'react';
import '../css/Faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5); // Initially show 5 FAQs

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const loadMoreFAQs = () => {
    setVisibleCount((prevCount) => prevCount + 2); // Load 2 more FAQs
  };

  const faqs = [
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
    {
      question: "What programming languages does BitBox support?",
      answer: "BitBox supports a wide range of programming languages including Python, Java, JavaScript, and more.",
    },
    {
      question: "Are there any tutorials available for BitBox?",
      answer: "Yes, we offer comprehensive tutorials and documentation to help users get the most out of BitBox.",
    },
    {
      question: "Can I use BitBox for open-source projects?",
      answer: "Absolutely! BitBox is designed to support both open-source and private projects.",
    },
    {
      question: "What are the system requirements for using BitBox?",
      answer: "BitBox is a web-based platform, so you only need a modern web browser and an internet connection.",
    },
    {
      question: "Is there a mobile app for BitBox?",
      answer: "Currently, BitBox does not have a dedicated mobile app, but the platform is mobile-friendly and accessible via web browsers.",
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div key={index} className="faq-card">
            <h4 
              className="faq-question" 
              onClick={() => toggleAnswer(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              tabIndex="0"
            >
              {faq.question}
            </h4>
            {openIndex === index && (
              <p id={`faq-answer-${index}`} className="faq-answer">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      {visibleCount < faqs.length && (
        <button className="view-more" onClick={loadMoreFAQs}>
          View More
        </button>
      )}
    </div>
  );
};

export default FAQ;
