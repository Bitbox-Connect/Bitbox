import  { useState } from 'react';
import faqimage from "../assets/images/vector-faq-frequently-asked-questions.png"
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is Bitbox?", answer: "Bitbox is a collaborative platform for developers to share and find solutions to coding projects, enhancing project development and troubleshooting." },
    { question: "Who can use Bitbox?", answer: "Bitbox is suitable for developers, students, and tech enthusiasts seeking collaboration on coding projects or guidance." },
    { question: "How can I submit a project on Bitbox?", answer: "Sign up and click 'Submit Project' to share details and engage with the community." },
    { question: "Is Bitbox free to use?", answer: "Yes, Bitbox is currently free for project submission and collaboration." },
    { question: "Can I get feedback on my code?", answer: "Yes, community members can provide feedback and suggestions on projects." },
    { question: "What types of projects are welcome on Bitbox?", answer: "All coding projects across languages and frameworks are welcome on Bitbox." },
    { question: "How do I report inappropriate content?", answer: "Click the 'Report' button on any content, and our moderators will review it." },
    { question: "Can I connect with other users?", answer: "Yes, you can comment on projects and join discussions to collaborate." },
    { question: "Is Bitbox limited to specific programming languages?", answer: "No, Bitbox supports projects in various programming languages and frameworks." },
    { question: "How do I stay updated on new projects?", answer: "Sign up for notifications or follow popular projects for updates on the latest content." }
];


  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg mt-4  dark:from-gray-900 dark:to-gray-800 mb-4">
      <h2 className="text-[3rem] font-semibold mb-4 mt-20">Frequently Asked Questions</h2>
      
      <div className='flex justify-around'>
        <div>
        <img src={faqimage} alt="Description w-1/2" className='object-cover'style={{ width: '600px',  }}/>
        </div>
      <div className="space-y-4 w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <div
              className="p-4 cursor-pointer bg-gray-200 rounded-t-lg hover:bg-gray-300 transition duration-200"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default FAQSection;
