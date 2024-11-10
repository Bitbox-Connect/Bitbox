
import { useState } from "react";
import "../css/Faq.css";
import img1 from "../assets/images/faqs.png";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What is BitBox?",
            answer:
                "BitBox is a user-friendly platform that simplifies version control and collaboration for developers.",
        },
        {
            question: "How does BitBox enhance collaboration?",
            answer:
                "BitBox offers intuitive tools that enable both solo programmers and large teams to manage projects efficiently.",
        },
        {
            question: "How do I get started with BitBox?",
            answer:
                "You can sign up for an account on BitBox and start managing your projects right away.",
        },
        {
            question: "Is BitBox compatible with modern development workflows?",
            answer:
                "Yes, BitBox seamlessly integrates with modern development workflows, providing fast and reliable performance.",
        },
        {
            question: "How can I contact support if I need help?",
            answer:
                "You can reach out to support through the 'Contact Us' page or by emailing support@example.com.",
        },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {/* Flex container for image and FAQ list */}
            <div className="faq-left">
                {/* Image on the left */}
                <div className="faq-image-container">
                    <img src={img1} alt="FAQ-related" className="faq-image" />
                </div>
            </div>

            {/* FAQ list on the right */}
            <div className="faq-right">
                <div className="faq-header">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <ul className="faq-list">
                    {faqData.map((item, index) => (
                        <li key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleAnswer(index)}>
                                <span>{item.question}</span>
                                <span className="faq-icon">
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
