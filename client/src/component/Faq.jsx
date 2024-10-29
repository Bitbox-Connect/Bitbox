import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

// Sample FAQ data array
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
function FAQ(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const loadMoreFAQs = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  // Dynamic styles based on mode
  const bgClass = props.mode === 'dark' ? 'bg-black' : 'bg-gray-100';
  const textPrimary = props.mode === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const textSecondary = props.mode === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const borderClass = props.mode === 'dark' ? 'border-gray-600' : 'border-gray-300';
  const buttonBg = props.mode === 'dark' ? 'bg-blue-600' : 'bg-blue-900';
  const buttonHover = props.mode === 'dark' ? 'bg-blue-500' : 'bg-blue-800';

  return (
    <div className={`${bgClass} p-8 mt-28`}>
      <div className="max-w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="text-center md:text-left w-3/5 mb-4 md:mb-0 flex justify-center">
            <div className='w-1/2' data-aos="fade-right" data-aos-duration='1300'>
              <h2 className={`text-3xl font-bold ${textPrimary}`}>FAQs</h2>
              <p className={textSecondary}>
                Have questions? Here you’ll find the answers most valued by our partners,
                along with access to step-by-step instructions and support.
              </p>
            </div>
          </div>
          <div className="md:w-1/3" data-aos="fade-left" data-aos-duration='1300'>
            <img
              src="https://img.freepik.com/free-vector/tiny-people-sitting-standing-near-giant-faq_74855-7879.jpg?t=st=1730230687~exp=1730234287~hmac=c4b0ded086432ac95ae1b1da544d08d153b0dc1de2436041fec87835dc56a0db&w=1380"
              alt="FAQ illustration"
              className="w-full max-w-[28rem] mx-auto"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5 m-auto">
          {/* Sidebar Links */}
          <div className="col-md-6 col-lg-5 col-12 ft-1 w-4/5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
            <h3 style={{ fontFamily: "medium", fontSize: "2.5rem" }} className={textPrimary}>
              BIT<span className='code' style={{ color: "#0D92F4" }}>BOX</span>
            </h3>
            <p className={textSecondary}>
              Empowering Developers,<br />
              Where Projects Find Solutions Together
            </p>
            <div className="footer-icons">
              {/* Social media icons with links */}
              <a href="https://github.com/bitboxcommunity" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub color={props.mode === 'dark' ? "#f0f0f0" : "#211F1F"} fontSize="2rem" />
              </a>
              <a href="https://twitter.com/BITBOX688152" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter color={props.mode === 'dark' ? "#1da1f2" : "#1da1f2"} fontSize="2rem" />
              </a>
              <a href="https://www.youtube.com/channel/UCXUTdcw27jaH_go9iyUjJnA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube color={props.mode === 'dark' ? "#FF0000" : "red"} fontSize="2rem" />
              </a>
              <a href="https://www.linkedin.com/in/bit-box-community" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin color={props.mode === 'dark' ? "#0A66C2" : "#0077b5"} fontSize="2rem" />
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="md:col-span-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1800">
            <h3 className={`text-xl font-semibold ${textPrimary} mb-4`}>About us</h3>
            <div className="space-y-4">
              {faqData.slice(0, visibleCount).map((faq, index) => (
                <div key={index} className={`border-b ${borderClass}`}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left flex justify-between items-center py-4 focus:outline-none ${textSecondary}`}
                  >
                    <span className={`font-medium ${textPrimary}`}>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke={props.mode === 'dark' ? 'white' : 'currentColor'}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeIndex === index && (
                    <div className={textSecondary}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {visibleCount < faqData.length && (
              <button
                className={`${buttonBg} cursor-pointer text-white px-7 my-2 py-2 rounded-lg hover:${buttonHover}`}
                onClick={loadMoreFAQs}
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;