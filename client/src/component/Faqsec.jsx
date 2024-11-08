import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is a blog?", answer: "A blog is a website or platform where you can share your thoughts, ideas, and articles on various topics." },
    { question: "How do I start a blog?", answer: "You can start a blog by choosing a platform (like WordPress, Blogger, or Medium), picking a domain name, and publishing your first post." },
    { question: "How often should I post on my blog?", answer: "It's recommended to post consistently, whether it's once a week, biweekly, or monthly, to keep your audience engaged." },
    { question: "What are the best platforms for blogging?", answer: "Some popular blogging platforms include WordPress, Blogger, Medium, Wix, and Squarespace." },
    { question: "How do I drive traffic to my blog?", answer: "You can drive traffic through SEO optimization, social media marketing, guest blogging, and sharing your posts in relevant communities." },
    { question: "Can I monetize my blog?", answer: "Yes, you can monetize your blog through ads, affiliate marketing, sponsored posts, and selling digital products or services." },
    { question: "How do I improve my blog's SEO?", answer: "Improving your blog's SEO includes using relevant keywords, optimizing images, writing high-quality content, and building backlinks." },
    { question: "What should I write about on my blog?", answer: "Write about topics you’re passionate about, solving problems for your audience, or sharing your expertise in a specific niche." },
    { question: "How can I make my blog more engaging for readers?", answer: "You can engage readers by writing in a conversational tone, using visuals, asking questions, and responding to comments." },
    { question: "How do I manage comments on my blog?", answer: "Manage comments by enabling moderation, replying to comments to engage readers, and filtering out spam or inappropriate content." },
  ];
  

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg mt-4">
      <h2 className="text-2xl font-semibold mb-4 mt-20">Frequently Asked Questions</h2>
      <div className="space-y-4">
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
  );
};

export default FAQSection;
